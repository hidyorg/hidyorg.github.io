import Vue from "vue";
import VueAnalytics from "vue-analytics";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "G-SZRG4R6P3L" // Google Analytics의 Tracking ID를 넣어준다
});
Vue.use(VueGtag, {
  config: {
    id: "G-SZRG4R6P3L" // Google Analytics의 Tracking ID를 넣어준다
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
