// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'babel-polyfill';
import Router from 'vue-router';
import MeetYouUI from '../../src';
import App from '../pages/app';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(MeetYouUI);

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
