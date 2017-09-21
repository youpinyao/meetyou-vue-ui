<template>
  <div class="ma-alert-box">
    <div class="ma-alert"
      v-for="(item, $index) in items"
      :key="$index"
      :class="{
      [cls]: true,
      'hide': item.hide,
      'ma-alert-success': item.type === 'success',
      'ma-alert-warning': item.type === 'warning',
      'ma-alert-danger': item.type === 'danger',
    }">
      <span v-html="item.text"></span>
      <ma-icon v-if="item.close !== false"
        ma-type="close"
        @click.native="remove(item, $index)"></ma-icon>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        items: [],
      };
    },
    computed: {
      cls() {
        return this.maClass;
      },
    },
    methods: {
      remove(item, $index) {
        item.hide = true;
        this.$forceUpdate();
        setTimeout(() => {
          this.items.splice($index, 1);
          this.$forceUpdate();
        }, 400);
      },
    },
    watch: {
      maItems(d) {
        this.items = d || [];
      },
    },
    created() {
      this.items = this.maItems;
    },
    props: {
      maItems: {
        type: Array,
        default: [],
      },
      maClass: {
        type: String,
        default: '',
      },
    },
  };

</script>
