import Vue from "vue";
import VueTagManager from "vue-tag-manager";
// import Hotjar from "vue-hotjar";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueTagManager, {
  gtmId: "GTM-WJ8G2WK" // Google Analytics의 Tracking ID를 넣어준다
});

// Vue.use(Hotjar, {
//   id: "2122391",
//   isProduction: process.env.NODE_ENV === "production"
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
