import Vue from 'vue';
import Router from 'vue-router';
import components from '../../pages/components';
import utils from '../../pages/utils';

Vue.use(Router);

const routerConfig = [{
  path: '/',
  redirect: '/components',
}, {
  path: '/components',
  name: 'Components 组件',
  component: components,
}, {
  path: '/utils',
  name: 'Utils 工具',
  component: utils,
}];

setParent(routerConfig);

const router = new Router({
  routes: routerConfig,
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
