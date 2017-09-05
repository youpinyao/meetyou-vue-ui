<template>
  <div class="sider-menu-content">
    <div class="sider-menu-item"
      v-for="route in routers"
      :key="route.$index"
      v-if="route.hidden !== true">
      <a href="javascript:void(0);"
        :class="route.cls"
        @click="itemClick(route, $event)">
        <span>{{route.name}}</span>
        <ma-icon v-bind:ma-type="route.expand ? 'up' : 'down'"
          v-if="route.children && route.children.length"
          @click.native.stop="iconClick(route, $event)"></ma-icon>
      </a>
      <ma-sider-menu-content v-bind:class="{hide: !route.expand}"
        v-if="route.children && route.children.length && route.expand"
        v-bind:ma-routers="route.children"
        v-bind:ma-parent-router="route"></ma-sider-menu-content>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  import uuidv4 from 'uuid/v4';
  import util from '../../utils';

  const cls = 'has-sider-menu';

  export default {
    props: {
      maRouters: {

      },
      maParentRouter: {

      },
    },
    data() {
      return {
        routers: this.maRouters,
        parentRouter: this.maParentRouter,
      };
    },
    mounted() {},
    created() {
      const self = this;
      const uuid = uuidv4();
      const fnName = `maSiderMenuContentAfterEach-${uuid}`;
      const fns = {
        [fnName]() {
          self.expandCurrentMenu();
        },
      };

      this.fnName = fnName;
      this.fns = fns;
      this.forceUpdate = forceUpdate;
      this.expandCurrentMenu();

      this.$root.$on('update.sider.menu.cls', fns[fnName]);
      this.$root.$on('update.sider.menu.force', this.forceUpdate);
      this.$router.afterEach(fns[fnName]);

      function forceUpdate() {
        self.$forceUpdate();
      }
    },
    destroyed() {
      this.$root.$off('update.sider.menu.cls', this.fns[this.fnName]);
      this.$root.$off('update.sider.menu.force', this.forceUpdate);

      // 删除router afterEach
      util.each(this.$router.afterHooks, (d, i) => {
        if (d.name === this.fnName) {
          delete this.$router.afterHooks[i];
        }
      });
    },
    methods: {
      expandCurrentMenu(routers) {
        const currentUrl = this.$router.currentRoute.path;
        const isFromParent = util.isArray(routers);

        if (isFromParent || this.routers) {
          util.each(isFromParent ? routers[0] : this.routers, (router) => {
            const routerUrl = util.href(router, router.params);
            const isActive = this.isActive(router);

            if (currentUrl.indexOf(`${router.path}/`) !== -1) {
              router.expand = true;
            }
            if (isFromParent) {
              if (isActive) {
                routers[1].expand = true;
              }
            } else if (!!this.parentRouter && isActive) {
              this.parentRouter.expand = true;
            }

            router.cls = '';
            router.cls += isActive ? 'active ' : '';
            router.cls += router.children && router.children.length ? 'arrow ' : '';
            router.cls += this.isParent(currentUrl, routerUrl) ? 'parent ' : '';

            if (router.children && router.children.length) {
              this.expandCurrentMenu([router.children, router]);
            }
          });
        }
      },
      itemClick(route, $event) {
        if (route.children && route.children.length && util.isNull(route.path)) {
          this.toggleMenu(route, $event);
        } else {
          this.goTo(route);
        }

        if (route.children && route.children.length) {
          route.expand = true;
        }
      },
      iconClick(route, $event) {
        $event.stopPropagation();
        this.toggleMenu(route, $event);
      },
      toggleMenu(route, $event) {
        let el = $($event.target);
        let content = null;
        let height = 0;

        if (el.get(0).tagName.toLowerCase() !== 'a') {
          el = el.parents('a');
        }

        content = el.next('.sider-menu-content');

        content.find('> *').each(function () {
          height += $(this).outerHeight();
        });

        content.height(height);

        route.expand = !route.expand;
        this.$forceUpdate();
      },
      isParent(currentUrl, routerUrl) {
        return currentUrl.indexOf(`${routerUrl}/`) !== -1 && currentUrl !== routerUrl;
      },
      isActive(router) {
        const urls = [];
        const params = $.extend(true, {}, router.params);
        const currentRoute = this.$router.currentRoute;
        let active = false;

        urls.push(util.href(router, params));

        if (router.activeParams && router.activeParams.length) {
          router.activeParams.forEach((d) => {
            urls.push(util.href(router, $.extend(true, params, d)));
          });
        }

        active = urls.indexOf(currentRoute.path) !== -1 || (
          this.isParent(currentRoute.path, urls[0]) && !(router.children &&
            router.children.length)
        );

        if (active === false && router.childs && router.childs.length) {
          router.childs.forEach((d) => {
            if (currentRoute.path === d.path) {
              if (util.isEmpty(d.params)) {
                active = true;
              } else {
                let count = 0;
                let sameCount = 0;
                util.each(d.params, (v, k) => {
                  if (currentRoute.params[k] === v) {
                    sameCount += 1;
                  }
                  count += 1;
                });
                active = count === sameCount;
              }
            }
          });
        }

        return active;
      },
      goTo(route) {
        this.$router.push(util.href(route));
      },
    },
    watch: {
      maRouters(d) {
        this.routers = d;
      },
      maParentRouter(d) {
        this.parentRouter = d;
      },
    },
  };

</script>
