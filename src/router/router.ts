import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import CartPage from "../pages/CartPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      path: "/goods/detail/:goodsId",
      component: GoodsDetail,
      props: true,
    },
    {
      path: "/cart",
      component: CartPage,
      props: true,
    },
  ],
});
