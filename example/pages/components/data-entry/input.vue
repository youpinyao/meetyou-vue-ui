<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="data-entry-input-page">
      <div class="container"
        ma-full-container>
        <h2>Input 输入框</h2>
        <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <div class="pb-20">
            <ma-switch v-model="disabled"></ma-switch>
          </div>
          <div class="col-8">
            <h4>normal</h4>
            <div>
              <ma-input name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>disabled</h4>
            <div>
              <ma-input name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>readonly</h4>
            <div>
              <ma-input name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                :readonly="readonly"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>success</h4>
            <div>
              <ma-input class="ma-input-success"
                name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>error</h4>
            <div>
              <ma-input class="ma-input-error"
                name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>warning</h4>
            <div>
              <ma-input class="ma-input-warning"
                name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>search normal</h4>
            <div>
              <ma-input class="ma-input-search-normal"
                name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>search black</h4>
            <div>
              <ma-input class="ma-input-search-black"
                name="test"
                type="text"
                :disabled="disabled"
                @ma-icon-click="iconClick($event)"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>只能输入数字，并且小数点后位数为2</h4>
            <div>
              <ma-input ma-num
                :ma-decimal="2"
                name="numberTestValue"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="numberTestValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>textarea</h4>
            <div>
              <ma-input name="test"
                type="textarea"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"></ma-input>
            </div>
          </div>

          <div class="col-8">
            <h4>清空按钮</h4>
            <div>
              <ma-input name="test"
                type="text"
                :disabled="disabled"
                :placeholder="placeholder"
                v-model="testValue"
                :ma-clear="true"></ma-input>
            </div>
          </div>
        </div>

        <h3>API</h3>
        <div class="p">
          <div class="mb-20">属性和 html input 一致，除了 disabled、readonly 由 :disabled、:readonly 代替。</div>
          <table class="mb-20">
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>ma-clear</td>
              <td>清空按钮</td>
              <td>boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ma-num</td>
              <td>只要在标签内配置此属性就可以限制只能输入数字</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ma-decimal</td>
              <td>和 ma-num 配合使用限制数字小数点后位数长度</td>
              <td>Int</td>
              <td>-</td>
            </tr>
            <tr>
              <td>v-model</td>
              <td>必填</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>@ma-icon-click</td>
              <td>选填，在有右边搜索icon场景下使用</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </table>

          <table>
            <tr>
              <th>样式</th>
              <th>说明</th>
            </tr>
            <tr>
              <td>.ma-input-success</td>
              <td>显示为正确</td>
            </tr>
            <tr>
              <td>.ma-input-error</td>
              <td>显示为错误</td>
            </tr>
            <tr>
              <td>.ma-input-warning</td>
              <td>显示为警告</td>
            </tr>
            <tr>
              <td>.ma-input-search-normal</td>
              <td>显示为搜索样式 正常</td>
            </tr>
            <tr>
              <td>.ma-input-search-black</td>
              <td>显示为搜索样式 黑色</td>
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
        testValue: '123',
        numberTestValue: 3.12,
        placeholder: '提示文本',
        disabled: false,
        readonly: true,
      };
    },
    computed: {

    },
    created() {

    },
    destroyed() {

    },
    methods: {
      iconClick(e) {
        console.log('iconClick', e);
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>
  @import '../../../../src/scss/theme';
  @import '../../../../src/scss/mixin';
  .data-entry-input-page .col-8 {
    width: 300px;
    padding-right: 60px;
  }

</style>
