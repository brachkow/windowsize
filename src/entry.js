import App from './components/App.vue';

import Vue from 'vue';
import VueRouter from 'vue-router';

import 'normalize.css';
import '@styles/reset.scss';

import router from './router/router.js';
import store from './store/store.js';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root');