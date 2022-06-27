import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import CartPage from "../pages/CartPage.vue";
import MyPage from "../pages/MyPage.vue";
import OrdersPage from "../pages/OrdersPage.vue";
import OrderDetailPage from "../pages/OrderDetailPage.vue";
import WishList from "../pages/WishList.vue";

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
    },
    {
      name: "order",
      path: "/my-account/orders",
      component: OrdersPage,
    },
    {
      name: "orderDetail",
      path: "/my-account/orders/:orderId",
      component: OrderDetailPage,
    },
    {
      name: "wishlist",
      path: "/my-account/wishlist",
      component: WishList,
    },
  ],
});
