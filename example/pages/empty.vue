<template>
  <div class="empty-404-content">
    <div class="page error-page">
      <div class="article error-article">
        <div class="empty-img"></div>
        <p>页面不存在或已被删除</p>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {

      };
    },
    created() {
      $('body').addClass('empty-page');
    },
    destroyed() {
      $('body').removeClass('empty-page');
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../src/scss/_theme';
  body.empty-page {
    background-color: $white;
  }
  .empty-404-content {
    padding-top: 50px;
  }

  .empty-404-content p {
    font-size: 16px;
    text-align: center;
    padding: 20px 0;
  }

  .empty-404-content .empty-img {
    width: 588px;
    height: 348px;
    margin: 50px auto 0 auto;
    background: url("../images/404.png");
  }

</style>
