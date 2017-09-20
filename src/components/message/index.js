import $ from 'jquery';

import maMessageTpl from './maMessageTpl.html';

export default {
  install(Vue, options) {
    console.log('$message register');
    const res = Vue.compile(maMessageTpl);

    $('body').append('<div id="maMessage"></div>');

    const message = new Vue({
      el: '#maMessage',
      data: {
        weakTipList: [],
      },
      methods: {
        hideMessage(index) {
          const msg = this.weakTipList[index];

          msg.hide = true;
          this.$forceUpdate();
          setTimeout(() => {
            msg.remove = true;
            this.$forceUpdate();
          }, 800);
        },
      },
      render: res.render,
      staticRenderFns: res.staticRenderFns,
    });

    Vue.prototype.$message = {
      danger(text) {
        this.show('danger', text);
      },
      success(text) {
        this.show('success', text);
      },
      warning(text) {
        this.show('warning', text);
      },
      show(type, text) {
        this.clearList();
        if (this.hasSame(type, text)) {
          return;
        }

        const msg = {
          type,
          text: text || '空',
        };

        message.weakTipList.push(msg);
        message.$forceUpdate();

        setTimeout(() => {
          msg.hide = false;
          message.$forceUpdate();
        }, 50);

        setTimeout(() => {
          msg.hide = true;
          message.$forceUpdate();
          setTimeout(() => {
            msg.remove = true;
            message.$forceUpdate();
          }, 350);
        }, 2000);
      },
      clearList() {
        const list = [];

        message.weakTipList.forEach((d) => {
          if (d.remove !== true) {
            list.push(d);
          }
        });
        message.weakTipList = list;
      },
      hasSame(type, text) {
        let has = false;
        message.weakTipList.forEach((d) => {
          if (d.text === text && d.type === type) {
            has = true;
          }
        });

        return has;
      },
    };
  },
};
