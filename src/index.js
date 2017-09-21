// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import util from './utils';

import {
  maFullContainer,
} from './directives';


import {
  maFirstMenu,
  maSecondMenu,
  maSiderMenu,
  maSiderMenuContent,
  maCrumbAuto,
  maIcon,
  maButton,
  maMessage,
  maAlert,
} from './components';

window.util = util;

export default {
  install(Vue, options) {
    Vue.component('maFirstMenu', maFirstMenu);
    Vue.component('maSecondMenu', maSecondMenu);
    Vue.component('maCrumbAuto', maCrumbAuto);
    Vue.component('maSiderMenu', maSiderMenu);
    Vue.component('maSiderMenuContent', maSiderMenuContent);
    Vue.component('maIcon', maIcon);
    Vue.component('maButton', maButton);
    Vue.component('maAlert', maAlert);

    Vue.directive('ma-full-container', maFullContainer);

    Vue.use(maMessage);

    Vue.prototype.$util = util;
  },
};
