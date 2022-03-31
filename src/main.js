import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// fontawesome
import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import brands from '@fortawesome/fontawesome-free-brands';
import { fas } from '@fortawesome/free-solid-svg-icons';

Vue.use(BootstrapVue);
// 安装 BootstrapVue 图标组件插件
Vue.use(IconsPlugin);


fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);
fontawesome.library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
