<template>
  <div class="crumb"
    ref="crumb">
    <span class="crumb-item"
      v-for="(item, index) in crumbItems"
      :key="item.name"
      v-if="index !== crumbItems.length - 1">
      <span>
        <a href="javascript:void(0)"
          @click="$router.push(item.path)">{{item.name}}</a>
      </span>
      <span>{{maSeparator}} </span>
    </span>
    <span class="crumb-item"
      v-for="(item, index) in crumbItems"
      :key="item.name"
      v-if="index === crumbItems.length - 1 && showCurrent">
      <span>{{item.name}}</span>
      <span>{{maSeparator}}</span>
    </span>
    <span class="crumb-item">
      <span>
        <slot></slot>
      </span>
      <span>{{maSeparator}}</span>
    </span>
  </div>
</template>
<script>
  import $ from 'jquery';
  import util from '../../utils/index';

  export default {
    data() {
      return {
        crumbItems: [],
        showCurrent: false,
      };
    },
    mounted() {
      const element = $(this.$refs.crumb);

      if (util.isNull(element.find('> span.crumb-item:last-child > span:nth-child(1)').last().html()
          .trim())) {
        this.showCurrent = true;
        element.find('> span.crumb-item:last-child').remove();
      }
    },
    created() {
      const crumbItems = [];
      const self = this;

      pushItem(self.$router.options.routes);

      this.crumbItems = crumbItems;

      function pushItem(routes) {
        routes.forEach((route) => {
          let path = [];
          let cRoute = route;
          path.unshift(cRoute.path);

          while (cRoute.parent) {
            path.unshift(cRoute.parent.path);
            cRoute = cRoute.parent;
          }

          path = path.join('/');

          if (path === self.$route.path) {
            crumbItems.unshift({
              name: route.name,
              path,
            });
            getParentRoute(route);
          } else {
            pushItem(route.children || []);
          }
        });
      }

      function getParentRoute(route) {
        if (route.parent) {
          const parentRoute = route.parent;
          let path = [];
          let cRoute = route.parent;
          path.unshift(cRoute.path);

          while (cRoute.parent) {
            path.unshift(cRoute.parent.path);
            cRoute = cRoute.parent;
          }

          path = path.join('/');

          crumbItems.unshift({
            name: parentRoute.name,
            path,
          });
          getParentRoute(parentRoute);
        }
      }
    },
    props: {
      maSeparator: {
        type: String,
        default: '/',
      },
    },
  };

</script>
