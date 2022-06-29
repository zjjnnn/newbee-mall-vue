import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
//import store from "./store";
import router from "./router/router";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
// main.js
import "gitart-vue-dialog/dist/style.css";
import { GDialog } from "gitart-vue-dialog";

const app = createApp(App);

app.use(VueViewer);
app.use(store, key);
app.use(router);
app.component("GDialog", GDialog);

app.mount("#app");
