<template>
  <div class="sider-menu">
    <div class="sider-menu-title"
      :if="maTitle">{{maTitle}}</div>
    <ma-sider-menu-content v-bind:ma-routers="maRouters"></ma-sider-menu-content>
  </div>

</template>

<script>
  import $ from 'jquery';
  import uuidv4 from 'uuid/v4';
  import util from '../../../src/utils';

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
      this.$element = $element;

      $('body').addClass(cls);
      $(window).on('scroll', this.setTop);
      $(window).on('resize', this.setTop);
      this.$root.$on('update.second.menu', this.setTop);
    },
    created() {
      const self = this;
      const uuid = uuidv4();
      const fnName = `maSiderMenuAfterEach-${uuid}`;
      const fns = {
        [fnName]() {
          self.$root.$emit('update.sider.menu.force');
        },
      };

      this.fnName = fnName;

      this.$router.afterEach(fns[fnName]);
    },
    destroyed() {
      $('body').removeClass(cls);
      $(window).off('scroll', this.setTop);
      $(window).off('resize', this.setTop);
      this.$root.$off('update.second.menu', this.setTop);
      // 删除router afterEach
      util.each(this.$router.afterHooks, (d, i) => {
        if (d.name === this.fnName) {
          delete this.$router.afterHooks[i];
        }
      });
    },
    methods: {
      setTop() {
        const $element = this.$element;
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
      },
    },
    watch: {
      maRouters(d, p) {
        this.$root.$emit('update.sider.menu.cls');
      },
    },
  };

</script>
