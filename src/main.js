import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'G-T5GW032EY1',
  router
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
