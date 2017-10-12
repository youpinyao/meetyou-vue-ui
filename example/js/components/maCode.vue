<template>
  <div class="ma-code">
    <div class="ma-code-bar"
      @click="show = !show">
      <ma-icon v-show="!show"
        ma-type="codesquareo1">code</ma-icon>
      <ma-icon v-show="show"
        ma-type="codesquare">code</ma-icon>
    </div>
    <div class="ma-code-more"
      v-show="show">
      <div class="transclude">
        <slot></slot>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    watch: {

    },
    methods: {

    },
    props: {

    },
  };

</script>
