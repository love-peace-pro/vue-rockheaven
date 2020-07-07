import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/elements/elements.js";
import '@/styles/element-variables.scss'
import '@/styles/public.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

