import { createApp } from 'vue';
import App from './App.vue';
import { inject } from '@vercel/analytics';

inject();

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
createApp(App).mount('#app');
