import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Bootstrap Vue
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Embed Css
import "./assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
// End Bootstrap Vue

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
