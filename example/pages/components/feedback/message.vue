<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="feedback-message-page">
      <div class="container"
        v-ma-full-container>
        <h2>Message 全局提示</h2>
        <p>
          可提供成功、警告和错误等反馈信息。 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。
        </p>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <ma-button @click.native="showMessage('success')">success</ma-button>
          <ma-button @click.native="showMessage('danger')">danger</ma-button>
          <ma-button @click.native="showMessage('warning')">warning</ma-button>
        </div>
        <div class="p">
          <code>
      $message.success('成功提示框，主要用来显示成功信息。');
      $message.danger('警告提示框，主要用来显示重要信息。');
      $message.warning('危险提示框，主要用来显示错误信息。');
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
              <td>text</td>
              <td>必填，提示文本</td>
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

      };
    },
    computed: {

    },
    created() {

    },
    destroyed() {

    },
    methods: {
      showMessage(type) {
        switch (type) {
          case 'success':
            this.$message.success('成功提示框，主要用来显示成功信息。');
            break;
          case 'danger':
            this.$message.danger('警告提示框，主要用来显示重要信息。');
            break;
          case 'warning':
            this.$message.warning('危险提示框，主要用来显示错误信息。');
            break;
          default:
            break;
        }
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>
  @import '../../../../src/scss/theme';
  @import '../../../../src/scss/mixin';

</style>
