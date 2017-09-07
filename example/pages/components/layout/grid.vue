<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="layout-grid-page">
      <div class="container"
        v-ma-full-container>
        <h2>Grid 栅格</h2>
        <h3>概述</h3>
        <div class="p">
          布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
          <br/>
          <ul class="mt-10">
            <li>· 通过row在水平方向建立一组column（简写col）</li>
            <li>· 你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>
            <li>· 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建</li>
            <li>· 如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列</li>
          </ul>
        </div>
        <h3>代码演示</h3>
        <div class="clearfix">
          <div v-for="col in [2,4,6,8,10,12,14,16,18,20,22,24]"
            :key="col.index">
            <div v-if="col"
              class="mb-20"
              :class="((24 - col) ? 'pr-10' : '') + ' ' + ('col-' + col)">
              <div>col-{{col}}
                <br/>mb-20</div>
            </div>
            <div v-if="24 - col"
              :class="'col-' + (24 - col)"
              class="mb-20 pl-10">
              <div>col-{{24 - col}}
                <br/>mb-20</div>
            </div>
          </div>
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
  .layout-grid-page {
    div[class*="col-"] {
      > div {
        padding: 20px 0px;
        text-align: center;
        background-color: $primary;
        color: $white;
      }
    }
  }

</style>
