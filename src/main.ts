import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import cardVue from "./components/Card.vue"
export const app = createApp(App)
app.component("Card",cardVue)
app.mount('#app')

