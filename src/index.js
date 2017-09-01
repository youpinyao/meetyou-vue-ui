// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import util from './utils';

import './directives';

import {
  maFirstMenu,
  maSiderMenu,
  maSiderMenuContent,
  maCrumbAuto,
  maIcon,
} from './components';

window.util = util;

Vue.component('maFirstMenu', maFirstMenu);
Vue.component('maCrumbAuto', maCrumbAuto);
Vue.component('maSiderMenu', maSiderMenu);
Vue.component('maSiderMenuContent', maSiderMenuContent);
Vue.component('maIcon', maIcon);
