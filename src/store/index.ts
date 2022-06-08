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
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
