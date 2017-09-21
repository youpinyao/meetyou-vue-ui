import Vue from 'vue';
import Router from 'vue-router';
import components from '../../pages/components';

import global from '../../pages/components/global';
import color from '../../pages/components/global/color';
import font from '../../pages/components/global/font';

import general from '../../pages/components/general';
import icon from '../../pages/components/general/icon';
import button from '../../pages/components/general/button';

import layout from '../../pages/components/layout';
import grid from '../../pages/components/layout/grid';
import layout1 from '../../pages/components/layout/layout';
import cls from '../../pages/components/layout/cls';

import feedback from '../../pages/components/feedback';
import message from '../../pages/components/feedback/message';
import alert from '../../pages/components/feedback/alert';

import utils from '../../pages/utils';

import empty from '../../pages/empty';


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
    path: 'layout',
    name: 'Layout 布局',
    component: layout,
    children: [{
      path: '',
      redirect: 'grid',
    }, {
      path: 'grid',
      name: 'Grid 栅格',
      component: grid,
    }, {
      path: 'layout1',
      name: 'Layout 布局',
      component: layout1,
    }, {
      path: 'cls',
      name: 'Class 样式',
      component: cls,
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
  }, {
    path: 'feedback',
    name: 'Feedback 反馈',
    component: feedback,
    children: [{
      path: '',
      redirect: 'message',
    }, {
      path: 'message',
      name: 'Message 全局提示',
      component: message,
    }, {
      path: 'alert',
      name: 'Alert 警告提示',
      component: alert,
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
