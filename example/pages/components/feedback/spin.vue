<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="feedback-spin-page">
      <div class="container"
        v-ma-full-container>
        <h2>Spin 加载中</h2>
        <p>
          用于页面和区块的加载中状态。
        </p>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <ma-spin :ma-size="120"></ma-spin>
        </div>

        <h3>API</h3>
        <div class="p">
          <table>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>ma-size</td>
              <td>尺寸</td>
              <td>Int</td>
              <td>120</td>
            </tr>
          </table>
        </div>
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
    computed: {

    },
    created() {

    },
    destroyed() {

    },
    methods: {

    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>
  @import '../../../../src/scss/theme';
  @import '../../../../src/scss/mixin';

</style>
