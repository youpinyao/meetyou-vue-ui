<template>
  <div class="second-nav"
    :class="{show: hasSecondNav}">
    <ul class="clearfix">
      <li v-for="(route, $index) in routes"
        v-if="
        route.parent
        && !route.parent.parent
        && fullPath(route).indexOf(`${route.parent.path}/`) !== -1
        && cRouteFullPath.indexOf(`${route.parent.path}/`) !== -1
        && route.hidden !== true
        && route.hiddenSecond !== true"
        :class="{
          active: cRouteFullPath === fullPath(route)
          || cRouteFullPath.indexOf(`${fullPath(route)}/`) !== -1
          || (route.childState && route.childState.indexOf(cRouteFullPath) !== -1)
        }"
        :key="$index">
        <a href="javascript:void(0)"
          @click="goTo(route)">{{route.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery';
  import util from '../../../src/utils';

  export default {
    data() {
      return {
        cls: 'has-second-nav',
        hasSecondNav: false,
        fullPath: util.fullPath,
        routes: this.flatten(this.$router.options.routes),
        cRoute: this.$router.currentRoute,
      };
    },
    computed: {
      cRouteFullPath() {
        return this.fullPath(this.cRoute);
      },
    },
    created() {
      const self = this;

      $(window).on('resize', this.resize);

      console.log('second menu created');
      this.$router.afterEach(updateRouter);

      updateRouter();

      function updateRouter(to) {
        if (to) {
          self.cRoute = to;
        }

        let hasSecondNav = false;

        checkShow(self.routes);

        function checkShow(routes) {
          routes.forEach((route) => {
            if (route.parent && !route.parent.parent && util.fullPath(route).indexOf(
                `${route.parent.path}/`) !== -1 &&
              util.fullPath(self.cRoute).indexOf(`${route.parent.path}/`) !== -1 &&
              route.hidden !== true && route.hiddenSecond !== true) {
              hasSecondNav = true;
            }

            if (route.children) {
              checkShow(route.children);
            }
          });
        }

        if (hasSecondNav) {
          $('body').addClass(self.cls);
        } else {
          $('body').removeClass(self.cls);
        }

        self.hasSecondNav = hasSecondNav;

        self.$forceUpdate();
        self.$nextTick(() => {
          self.resize();
          self.$root.$emit('update.second.menu');
        });
      }
    },
    destroyed() {
      $('body').removeClass(this.cls);
      $(window).off('resize', this.resize);
    },
    methods: {
      flatten(routes) {
        const newRoutes = [];

        function push(rs) {
          util.each(rs, (route) => {
            newRoutes.push(route);
            push(route.children);
          });
        }

        push(routes);

        return newRoutes;
      },
      resize() {
        const element = this.$el;
        let minWidth = parseInt($(element).parents('.header').css('min-width'), 10);

        if ($(window).width() > minWidth) {
          minWidth = $(window).width();
        }

        $(element).css({
          'min-width': minWidth,
        });
      },
      goTo(route) {
        this.$router.push(util.href(route));
      },
    },
  };

</script>
