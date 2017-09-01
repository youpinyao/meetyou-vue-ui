<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="global-font-page">
      <div class="container"
        v-ma-full-container>
        <h2>Font 文字</h2>
        <p>定义全局字号变量</p>

        <h3>何时使用</h3>
        <p>在定义自己所开发部分的字号的时候可以引用</p>

        <h3>代码演示</h3>
        <div class="p">
          <div class="font font-12">$font12</div>
          <div class="font font-14">$font14</div>
          <div class="font font-16">$font16</div>
          <div class="font font-18">$font18</div>
          <div class="font font-20">$font20</div>
          <div class="font font-22">$font22</div>
          <div class="font font-24">$font24</div>
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
  @import '../../../../src/scss/theme';
  @import '../../../../src/scss/mixin';
  .global-font-page {
    .font {
      padding: 0px 20px 20px 0px;
      display: inline-block;
    }
    .font-12 {
      font-size: $font12;
    }
    .font-14 {
      font-size: $font14;
    }
    .font-16 {
      font-size: $font16;
    }
    .font-18 {
      font-size: $font18;
    }
    .font-20 {
      font-size: $font20;
    }
    .font-22 {
      font-size: $font22;
    }
    .font-24 {
      font-size: $font24;
    }
  }

</style>
