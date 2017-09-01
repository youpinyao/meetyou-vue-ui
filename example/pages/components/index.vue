<template>
  <div>
    <ma-sider-menu v-bind:ma-title="siderTitle"
      v-bind:ma-routers="routerConfig"></ma-sider-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery';
  import util from '../../../src/utils';

  export default {
    data() {
      return {
        siderTitle: '',
        routerConfig: [],
      };
    },
    created() {
      this.siderTitle = this.$router.currentRoute.matched[0].name;

      const routerConfig = [];

      this.$router.options.routes.forEach((route) => {
        if (route.path === '/components') {
          pushChildren(route, routerConfig, '/components/');
        }
      });

      this.routerConfig = routerConfig;

      function pushChildren(router, config, parent) {
        const params = {};
        router.children.forEach((route) => {
          if (route.path) {
            config.push({
              name: route.name,
              path: typeof parent === 'string' ? `${parent}${route.path}` : route.path,
              parent: typeof parent === 'string' || util.isNull(parent) ? null : parent,
              params,
            });
          }
          if (route.children) {
            config[config.length - 1].children = [];
            pushChildren(route, config[config.length - 1].children, config[config.length - 1]);
          }
        });
      }
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>


</style>
