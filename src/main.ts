import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./store";
//import store from "./store";
import router from "./router/router";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
// import "ant-design-vue/dist/antd.css";
// import Antd from "ant-design-vue";

const app = createApp(App);
// app.use(Antd);
app.use(VueViewer);
app.use(store, key);
app.use(router);
app.mount("#app");
