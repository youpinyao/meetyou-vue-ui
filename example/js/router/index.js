import Vue from 'vue';
import Router from 'vue-router';
import components from '../../pages/components';

import global from '../../pages/components/global';
import color from '../../pages/components/global/color';
import font from '../../pages/components/global/font';

import general from '../../pages/components/general';
import icon from '../../pages/components/general/icon';
import button from '../../pages/components/general/button';

import utils from '../../pages/utils';

import empty from '../../pages/empty';

Vue.use(Router);

const routerConfig = [{
  path: '/',
  redirect: '/components',
}, {
  path: '/components',
  name: 'Components 组件',
  component: components,
  children: [{
    path: '',
    redirect: 'global',
  }, {
    path: 'global',
    name: 'Global 全局',
    component: global,
    children: [{
      path: '',
      redirect: 'font',
    }, {
      path: 'font',
      name: 'Font 文字',
      component: font,
    }, {
      path: 'color',
      name: 'Color 颜色',
      component: color,
    }],
  }, {
    path: 'general',
    name: 'General 一般',
    component: general,
    children: [{
      path: '',
      redirect: 'icon',
    }, {
      path: 'icon',
      name: 'Icon 文字',
      component: icon,
    }, {
      path: 'button',
      name: 'Button 按钮',
      component: button,
    }],
  }],
}, {
  path: '/utils',
  name: 'Utils 工具',
  component: utils,
}, {
  path: '/empty',
  name: 'empty',
  hidden: true,
  component: empty,
}];

setParent(routerConfig);

const router = new Router({
  routes: routerConfig,
});

router.beforeEach((route, from, next) => {
  if (route.matched.length === 0) {
    console.log('to 404');
    router.push('/empty');
  } else {
    next();
  }
});

export default router;

function setParent(routes, parent) {
  routes.forEach((route) => {
    if (parent) {
      route.parent = parent;
    }
    if (route.children) {
      setParent(route.children, route);
    }
  });
}
