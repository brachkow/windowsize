import { createApp } from 'vue';
import App from './App.vue';
import { OpenPanel } from '@openpanel/web';

// eslint-disable-next-line no-new
new OpenPanel({
  apiUrl: 'https://opdashboard-o8c4s0cg0ocoo08okoock40k.brachkow.com/api',
  clientId: 'cd0deb0a-11ef-461e-8134-c8d638783bd6',
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
createApp(App).mount('#app');
