import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import CartPage from "../pages/CartPage.vue";
import MyPage from "../pages/MyPage.vue";
import OrdersPage from "../pages/OrdersPage.vue";

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
    {
      path: "/my-account",
      component: MyPage,
      children: [
        { path: "/", component: MyPage },
        { path: "orders", component: OrdersPage },
      ],
    },
  ],
});
