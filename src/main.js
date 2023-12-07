import './assets/style/main.scss'
import './assets/style/custom.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 排版
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.config.globalProperties.window = window;