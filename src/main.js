import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import { createPinia } from 'pinia'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: false })
app.component('Button', Button)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
