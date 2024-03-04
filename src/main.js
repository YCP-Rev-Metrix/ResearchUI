// Add the necessary CSS
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// imports for application and UIV
import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'

// set app variable
const app = createApp(App)

// set use params for app with  and router
app.use(createBootstrap()) // Important
app.use(router)

// mount the app
app.mount('#app')
