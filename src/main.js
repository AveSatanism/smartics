import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "@fontsource/montserrat/variable.css";
import './assets/css/main.css';
import VueMask from 'v-mask'
import { VueMasonryPlugin } from 'vue-masonry';

Vue.use(VueMask);
Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
