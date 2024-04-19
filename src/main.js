/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueGtag from "vue-gtag";

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(VueGtag, {
  config: { id: "G-8WB4KTLKDJ" } // public key
})

app.mount('#app')
