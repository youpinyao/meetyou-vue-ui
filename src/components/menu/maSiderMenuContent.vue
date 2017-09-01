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
    mounted() {

    },
    created() {

    },
    destroyed() {

    },
    methods: {
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
      isParent(currentUrl, routeUrl) {

      },
      isActive(route) {

      },
      goTo(route) {
        const path = [route.path];
        let rou = route;

        while (rou.parent) {
          path.unshift(rou.parent.path);
          rou = rou.parent;
        }

        this.$router.push(path.join('/'));
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
