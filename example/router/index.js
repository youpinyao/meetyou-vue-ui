import Vue from 'vue';
import Router from 'vue-router';
import components from '../pages/components';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/components',
  }, {
    path: '/components',
    name: 'components',
    component: components,
  }],
});
