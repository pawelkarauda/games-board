import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './components/App.vue'
import axios from "axios"
import vueAxios from "vue-axios"
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles.scss'
import VueAxios from 'vue-axios';
import CenteredLoader from "./components/global/CenteredLoader.vue"

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.component('centered-loader', CenteredLoader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
