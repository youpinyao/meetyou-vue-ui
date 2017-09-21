<template>
  <div class="nav">
    <ul>
      <li v-for="(route, $index) in routes"
        :class="{
          active: cRoute.path === route.path || cRoute.path.indexOf(route.path + '/') !== -1
        }"
        v-if="route.path !== '/' && route.hidden !== true"
        :key="$index">
        <a href="javascript:void(0)"
          @click="toPage(route)">{{route.name}}</a>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        routes: this.$router.options.routes,
        cRoute: this.$router.currentRoute,
      };
    },
    created() {
      console.log('first created');
      this.$router.afterEach((to) => {
        this.cRoute = to;
      });
    },
    methods: {
      toPage(route) {
        this.$router.push(route);
      },
    },
  };

</script>
