<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="layout-layout-page">
      <div class="container"
        v-ma-full-container>
        <h2>Layout 布局</h2>
        <h3>概述</h3>
        <div class="p">
          <ul>
            <li>Layout：布局容器，其下可嵌套 Header Sider Content 或 Layout 本身，可以放在任何父容器中。</li>
            <li>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
            <li>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</li>
            <li>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
          </ul>
        </div>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <div class="col-24 header">Header</div>
          <div class="col-24 content">Content</div>
        </div>
        <div class="p clearfix">
          <div class="col-24 header">Header</div>
          <div class="col-6 sider">Sider</div>
          <div class="col-18 content">Content</div>
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
  .layout-layout-page {
    div[class*="col-"] {
      padding: 30px 0px;
      text-align: center;
      background-color: $primary;
      color: $white;
      &.sider {
        background-color: rgba($primary, 0.8);
        padding: 80px 0px;
      }
      &.content {
        background-color: rgba($primary, 0.6);
        padding: 80px 0px;
      }
    }
  }

</style>
