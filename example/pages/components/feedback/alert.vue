<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="feedback-alert-page">
      <div class="container"
        v-ma-full-container>
        <h2>Alert 警告提示</h2>
        <p>
          当某个页面需要向用户显示警告的信息时。
          <br/> 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
        </p>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <ma-alert :ma-items="alertItems"
            ma-class="mb-20"></ma-alert>
        </div>
        <div class="p">
          <code>
        // ma-items
        $scope.alertItems = [{
          type: 'success',
          text: '成功提示框，主要用来显示成功信息。',
          close: false,
        }, {
          type: 'danger',
          text: '危险提示框，主要用来显示错误信息。',
        }, {
          type: 'warning',
          text: '警告提示框，主要用来显示重要信息。',
        }];
          </code>
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
              <td>ma-items</td>
              <td>提示文本对象</td>
              <td>Array</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ma-class</td>
              <td>此样式会应用于alert的每个item</td>
              <td>String</td>
              <td>-</td>
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
        alertItems: [{
          type: 'success',
          text: '成功提示框，主要用来显示成功信息。',
          close: false,
        }, {
          type: 'danger',
          text: '危险提示框，主要用来显示错误信息。',
        }, {
          type: 'warning',
          text: '警告提示框，主要用来显示重要信息。',
        }],
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
