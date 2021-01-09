import App from './components/App.vue';

import Vue from 'vue';

import '@styles/global.css';

new Vue({
  render: (h) => h(App),
}).$mount('#root');
