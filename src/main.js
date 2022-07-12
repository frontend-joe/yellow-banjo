import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import "./http/";

Vue.config.productionTip = false;

window.app = new Vue({
  data: {
    client_id: localStorage.getItem("client_id"),
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
