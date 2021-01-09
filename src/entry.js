import App from './components/App.vue';

import Vue from 'vue';

import 'normalize.css';
import '@styles/reset.scss';


new Vue({
  render: (h) => h(App),
}).$mount('#root');