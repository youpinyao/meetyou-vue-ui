<template>
  <div class="sider-menu">
    <div class="sider-menu-title"
      :if="maTitle">{{maTitle}}</div>
    <ma-sider-menu-content v-bind:ma-routers="maRouters"></ma-sider-menu-content>
  </div>

</template>

<script>
  import $ from 'jquery';

  const cls = 'has-sider-menu';

  export default {
    props: {
      maTitle: {
        type: String,
        default: '',
      },
      maRouters: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {

      };
    },
    mounted() {
      const $element = this.$el;

      this.setTop = setTop;
      $('body').addClass(cls);
      $(window).on('scroll', this.setTop);
      $(window).on('resize', this.setTop);
      this.$on('update.second.menu', this.setTop);

      function setTop() {
        const header = $('body > div > .header');
        let top = header.height() - $(window).scrollTop();

        if ($('.has-second-nav').length) {
          top += $('.header .second-nav').height();
        }

        if (top < 0) {
          top = 0;
        }

        $($element).css({
          top,
        });
      }
    },
    created() {

    },
    destroyed() {
      $('body').removeClass(cls);
      $(window).off('scroll', this.setTop);
      $(window).off('resize', this.setTop);
    },
    methods: {

    },
    watch: {
      maRouters(d, p) {
        this.$nextTick(() => {
          this.$emit('update.sider.menu.cls');
        });
      },
    },
  };

</script>
