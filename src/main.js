import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/router";
// import "ant-design-vue/dist/antd.css";
// import Antd from "ant-design-vue";
// createApp(App).use(store);
// createApp(App).mount("#app");
const app = createApp(App);
// app.use(Antd);
app.use(store);
app.use(router);
app.mount("#app");
