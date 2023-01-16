import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./main.css";
import VueViewer from "v-viewer";
import 'viewerjs/dist/viewer.css'

Vue.use(VueViewer);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
