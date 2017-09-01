<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="global-color-page">
      <div class="container"
        v-ma-full-container>
        <h2>Color 颜色</h2>
        <p>定义全局颜色变量</p>

        <h3>何时使用</h3>
        <p>在定义自己所开发部分的色值的时候可以引用</p>

        <h3>代码演示</h3>
        <div class="p colors">
          <div class="color black">$black
            <br/>#000000</div>
          <div class="color base">$base
            <br/>#323232</div>
          <div class="color grey">$grey
            <br/>#999999</div>
          <div class="color outlines">$outlines
            <br/>#CCCCCC</div>
          <div class="color shadow">$shadow
            <br/>#DDDDDD</div>
          <div class="color disabled">$disabled
            <br/>#E5E5E5</div>
          <div class="color hover">$hover
            <br/>#F5F5F5</div>
          <div class="color background">$background
            <br/>#F5F5F5</div>
          <div class="color white">$white
            <br/>#FFFFFF</div>
          <div class="color primary">$primary
            <br/>#FF74B9</div>
          <div class="color warning">$warning
            <br/>#F6A623</div>
          <div class="color success">$success
            <br/>#87D068</div>
          <div class="color danger">$danger
            <br/>#FF5073</div>
          <div class="color link">$link
            <br/>#34ABFF</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>
  @import '../../../../src/scss/_theme';
  @import '../../../../src/scss/mixin';
  .global-color-page {
    .colors {
      letter-spacing: -0.31rem;
      .color {
        letter-spacing: normal;
        text-align: center;
        padding: 40px 0px 40px 0px;
        width: 19%;
        margin: 0px 1% 1% 0px;
        display: inline-block;
        &.black {
          background-color: $black;
          color: $white;
        }
        &.base {
          background-color: $base;
          color: $white;
        }
        &.grey {
          background-color: $grey;
          color: $white;
        }
        &.outlines {
          background-color: $outlines;
          color: $white;
        }
        &.shadow {
          background-color: $shadow;
        }
        &.disabled {
          background-color: $disabled;
        }
        &.hover {
          background-color: $hover;
        }
        &.background {
          background-color: $background;
        }
        &.white {
          background-color: $white;
        }
        &.primary {
          background-color: $primary;
          color: $white;
        }
        &.warning {
          background-color: $warning;
          color: $white;
        }
        &.success {
          background-color: $success;
          color: $white;
        }
        &.danger {
          background-color: $danger;
          color: $white;
        }
        &.link {
          background-color: $link;
          color: $white;
        }
      }
    }
  }

</style>
