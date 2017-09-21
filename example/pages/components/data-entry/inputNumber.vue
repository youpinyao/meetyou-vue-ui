<template>
  <div>

    <ma-crumb-auto></ma-crumb-auto>
    <div class="data-entry-number-input-page">
      <div class="container"
        ma-full-container>
        <h2>InputNumber 数字输入框</h2>
        <p>通过鼠标或键盘，输入范围内的数值。</p>
        <h3>代码演示</h3>
        <div class="pb-20">
          <ma-switch v-model="disabled"></ma-switch>
        </div>
        <div class="p clearfix">
          <ma-input-number name="test"
            :min="1"
            :max="5"
            :disabled="disabled"
            v-model="numberTestValue"></ma-input-number>
        </div>

        <h3>API</h3>
        <div class="p">
          只能输入数字，其它与
          <a href="#/components/data-entry/input">Input 组件</a>。
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
        disabled: false,
        numberTestValue: 4,
        placeholder: '提示文本',
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
