
// Loading Icon
import LoadingIcon from './utils/loading.js';

const loadingIcon = new LoadingIcon("./Udao.png");
loadingIcon.insert();

// Styles
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

// Hides the loading icon.
loadingIcon.hide();