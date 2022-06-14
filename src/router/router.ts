import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import CartPage from "../pages/CartPage.vue";
import cart from "@/store/cart/cart";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      name: "goods/detail",
      path: "/goods/detail/:goodsId",
      component: GoodsDetail,
      props: true,
    },
    {
      name: "cart",
      path: "/cart",
      component: CartPage,
      props: true,
    },
  ],
});
