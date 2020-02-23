import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.config.productionTip = false;

Vue.use(ViewUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
