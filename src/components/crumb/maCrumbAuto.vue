<template>
  <div class="crumb"
    ref="crumb">
    <span class="crumb-item"
      v-for="(item, index) in crumbItems"
      :key="item.name"
      v-if="index !== crumbItems.length - 1">
      <span>
        <a href="javascript:void(0)"
          @click="$router.push(item.path)">{{item.name}}{{index}}</a>
      </span>
      <span>{{maSeparator}}</span>
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

      if (!element.find('> span.crumb-item:last-child > span:nth-child(1)').last().html().trim()) {
        this.showCurrent = true;
        element.find('> span.crumb-item:last-child').remove();
      }
    },
    created() {
      const crumbItems = [];

      this.$router.options.routes.forEach((route) => {
        if (route.path === this.$route.path) {
          crumbItems.unshift({
            name: route.name,
            path: route.path,
          });
          getParentRoute(route);
        }
      });

      this.crumbItems = crumbItems;

      function getParentRoute(route) {
        if (route.parent) {
          const parentRoute = route.parent;
          crumbItems.unshift({
            name: route.name,
            path: route.path,
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
