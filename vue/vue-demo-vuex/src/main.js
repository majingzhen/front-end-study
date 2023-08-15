import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuex from "./store"

createApp(App).use(vuex).mount('#app')
