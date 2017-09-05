<template>
  <div>
    <ma-crumb-auto></ma-crumb-auto>
    <div class="general-icon-page">
      <div class="container"
        ma-full-container>
        <h2>Icon 图标</h2>
        <p>语义化的矢量图形。</p>
        <h3>来源</h3>
        <p>
          <a href="https://ant.design/components/icon-cn/"
            target="_blank">https://ant.design/components/icon-cn/</a>
        </p>
        <h3>如何使用</h3>
        <div class="p">
          <code v-text="iconSampleCode"></code>
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
              <td>ma-type</td>
              <td>设置 icon 类型，按照图标列表名称</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ma-size</td>
              <td>尺寸x</td>
              <td>Int</td>
              <td>16</td>
            </tr>
          </table>
        </div>
        <h3>图标列表</h3>
        <div class="p clearfix ml--5 mr--5">
          <p>点击图标复制代码。</p>
          <div class="center pb-20">
            <input type="text"
              class="ma-input center"
              v-model="searchKey"
              placeholder="搜索">
          </div>
          <div class="icon-item col-4 mb-10 pr-5 pl-5"
            v-for="icon in filterIcons"
            :key="icon.$index">
            <div>
              <ma-icon v-bind:ma-type="icon.text"></ma-icon>
              <div>{{icon.text}}</div>
              <div class="status"
                :class="{show: icon.status}">{{icon.status}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery';
  import Clipboard from 'clipboard';
  import icons from '../../../../src/scss/icons';

  export default {
    data() {
      return {
        searchKey: '',
      };
    },
    computed: {
      filterIcons() {
        const self = this;

        return this.icons.filter(icon => icon.text.indexOf(self.searchKey) !== -1);
      },
    },
    created() {
      this.iconSampleCode = '<ma-icon ma-type="unlock" />';
      this.icons = $.extend(true, [], icons);

      this.icons.forEach((icon, i) => {
        this.icons[i] = {
          text: icon,
          status: '',
        };
      });

      const clipboard = new Clipboard('.general-icon-page .icon-item', {
        text(trigger) {
          return $(trigger).find('> div > div').html();
        },
      });

      this.clipboard = clipboard;

      clipboard.on('success', (e) => {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);

        this.icons.forEach((icon) => {
          if (icon.text === e.text) {
            icon.status = 'Copied!';
            this.$forceUpdate();
            setTimeout(() => {
              icon.status = '';
              this.$forceUpdate();
            }, 600);
          }
        });
      });

      clipboard.on('error', (e) => {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
      });
    },
    destroyed() {
      this.clipboard.destroy();
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"
  scoped>
  @import '../../../../src/scss/theme';
  @import '../../../../src/scss/mixin';
  .general-icon-page {
    .icon-item {
      > div {
        position: relative;
        text-align: center;
        padding: 20px 0px;
        border-radius: 5px;
        @include transition();
        cursor: pointer;
        &:hover {
          background-color: $background;
        }
      }
      i {
        font-size: $font20;
      }
      .status {
        opacity: 0;
        position: absolute;
        z-index: 1;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        margin: auto;
        width: 60px;
        height: 20px;
        font-size: $font12;
        line-height: 20px;
        border-radius: 3px;
        background-color: rgba($black, 0.6);
        color: $white;
        @include transition();
        &.show {
          opacity: 1;
        }
      }
    }
  }

</style>
