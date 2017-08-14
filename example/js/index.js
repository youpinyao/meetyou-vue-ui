// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import '../../src';
import App from '../pages/app';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
