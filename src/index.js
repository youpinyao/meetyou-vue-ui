// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import util from './utils';

import maFullContainer from './directives/maFullContainer';

import maFirstMenu from './components/menu/maFirstMenu';
import maCrumbAuto from './components/crumb/maCrumbAuto';

window.util = util;

Vue.directive('ma-full-container', maFullContainer);

Vue.component('maFirstMenu', maFirstMenu);
Vue.component('maCrumbAuto', maCrumbAuto);
