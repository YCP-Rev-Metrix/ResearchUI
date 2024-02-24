import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as uiv from 'uiv'

const app = createApp(App)

app.use(router)

app.use(uiv)
app.use(uiv, {prefix: 'uiv'})

app.mount('#app')
