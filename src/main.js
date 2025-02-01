import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import AOS from 'aos';

import 'element-plus/dist/index.css';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(ElementPlus);
app.use(AOS.init());

app.mount('#perry');
