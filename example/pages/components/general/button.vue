<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="general-button-page">
      <div class="container"
        v-ma-full-container>
        <h2>Button 按钮</h2>
        <p>按钮用于开始一个即时操作。</p>
        <h3>代码演示</h3>
        <div class="p clearfix">
          <div class="col-24">
            <h4>Size</h4>
            <div class="ma-button-group">
              <ma-button v-bind:ma-size="sizeModel"
                @click.native="sizeModel = 'large'"
                v-bind:ma-active="sizeModel == 'large'"
                ma-click="sizeModel = 'large'">Large</ma-button>
              <ma-button v-bind:ma-size="sizeModel"
                @click.native="sizeModel = 'default'"
                v-bind:ma-active="sizeModel == 'default'"
                ma-click="sizeModel = 'default'">Default</ma-button>
              <ma-button v-bind:ma-size="sizeModel"
                @click.native="sizeModel = 'small'"
                v-bind:ma-active="sizeModel == 'small'"
                ma-click="sizeModel = 'small'">Small</ma-button>
              <ma-button v-bind:ma-size="sizeModel"
                @click.native="sizeModel = 'mini'"
                v-bind:ma-active="sizeModel == 'mini'"
                ma-click="sizeModel = 'mini'">Mini</ma-button>
            </div>
          </div>
          <div class="col-12">
            <h4>Default</h4>
            <ma-button v-bind:ma-size="sizeModel">
              <ma-icon ma-type="download"></ma-icon>Default</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              :ma-disabled="true">Default</ma-button>

            <h4>Primary</h4>
            <ma-button v-bind:ma-size="sizeModel"
              ma-type="primary">Primary</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              ma-type="primary"
              :ma-disabled="true">Primary</ma-button>

            <h4>Danger</h4>
            <ma-button v-bind:ma-size="sizeModel"
              ma-type="danger">Danger</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              ma-type="danger"
              :ma-disabled="true">Danger</ma-button>
          </div>

          <div class="col-12">
            <h4>Default Flat</h4>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true">Default</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true"
              v-bind:ma-disabled="true">Default</ma-button>

            <h4>Primary Flat</h4>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true"
              ma-type="primary">Primary</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true"
              ma-type="primary"
              v-bind:ma-disabled="true">Primary</ma-button>

            <h4>Danger Flat</h4>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true"
              ma-type="danger">Danger</ma-button>
            <ma-button v-bind:ma-size="sizeModel"
              v-bind:ma-flat="true"
              ma-type="danger"
              v-bind:ma-disabled="true">Danger</ma-button>
          </div>
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
              <td>按钮尺寸 large default small</td>
              <td>String</td>
              <td>default</td>
            </tr>
            <tr>
              <td>ma-type</td>
              <td>按钮类型 default primary danger</td>
              <td>String</td>
              <td>default</td>
            </tr>
            <tr>
              <td>ma-flat</td>
              <td>是否开启无背景模式</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>ma-active</td>
              <td>是否是活动状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>v-bind:ma-disabled</td>
              <td>是否为不可用状态</td>
              <td>Boolean</td>
              <td>false</td>
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
        sizeModel: 'default',
      };
    },
    computed: {

    },
    created() {

    },
    destroyed() {

    },
    methods: {
      setSize(size) {
        this.sizeModel = 'large';
        console.log('size:', size);
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
