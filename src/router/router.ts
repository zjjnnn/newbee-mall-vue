import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import CartPage from "../pages/CartPage.vue";
import MyPage from "../pages/myaccount/MyPage.vue";
import OrdersPage from "../pages/OrdersPage.vue";
import OrderDetailPage from "../pages/OrderDetailPage.vue";
import WishList from "../pages/myaccount/WishList.vue";
import MyStore from "../pages/myaccount/MyStore.vue";
import profileEditSelect from "../pages/myaccount/ProfileEditSelect.vue";
import UpdateProfile from "../pages/myaccount/UpdateProfile.vue";
import CustomerInfo from "../pages/myaccount/CustomerInfo.vue";
import UpdateMail from "../pages/myaccount/UpdateMail.vue";
import AddressBook from "../pages/myaccount/AddressBook.vue";
import PaymentDetails from "../pages/myaccount/PaymentDetails.vue";

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
    {
      name: "mystore",
      path: "/my-account/mystore",
      component: MyStore,
    },
    {
      name: "profileEditSelect",
      path: "/my-account/profileEditSelect",
      component: profileEditSelect,
    },
    {
      name: "updateProfile",
      path: "/my-account/update-profile",
      component: UpdateProfile,
    },
    {
      name: "customerInfo",
      path: "/my-account/customerInfoCompleted",
      component: CustomerInfo,
    },
    {
      name: "updateMail",
      path: "/my-account/update-mail",
      component: UpdateMail,
    },
    {
      name: "addressBook",
      path: "/my-account/address-book",
      component: AddressBook,
    },
    {
      name: "paymentDetails",
      path: "/my-account/payment-details",
      component: PaymentDetails,
    },
  ],
});
