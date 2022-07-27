import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
//import { createStore } from "vuex";
import category from "./home/categories";
import newgoods from "./home/newgoods";
import swiper from "./home/swiper";
import review from "./goodsDetail/review";
import reviewTotal from "./goodsDetail/reviewTotal";
import reviewRating from "./goodsDetail/reviewRating";
import goodsQa from "./goodsDetail/goodsQa";
import goodsInfo from "./goodsDetail/goodsInfo";
import cart from "./cart/cart";
import myPage from "./myPage/myPage";
import orderDetail from "./myPage/orderDetail";
import wishList from "./myPage/wishList";
import userProfile from "./myPage/userProfile";
import address from "./myPage/address";
import payment from "./myPage/payment";

type State = {};
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  modules: {
    category,
    newgoods,
    swiper,
    review,
    reviewTotal,
    reviewRating,
    goodsQa,
    goodsInfo,
    cart,
    myPage,
    orderDetail,
    wishList,
    userProfile,
    address,
    payment,
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
