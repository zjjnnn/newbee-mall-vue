import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
    modules: {
      category;
      newgoods;
      swiper;
      review;
      reviewTotal;
      reviewRating;
      goodsQa;
      goodsInfo;
    };
  }

  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
