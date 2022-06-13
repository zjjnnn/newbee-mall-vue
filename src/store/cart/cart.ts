const url = "http://localhost:3000/cart/list/";
const headers = { Accept: "application/json" };

type CartState = {
  cartItem: {};
  imgSrc: string;
};

export default {
  state: {
    cartItem: {},
    imgSrc: String,
  },
  mutations: {
    //syncrous
    setCartItem(state: CartState, payload: {}) {
      state.cartItem = payload;
    },
    setImgSrc(state: CartState, payload: string) {
      state.imgSrc = payload;
    },
  },
  actions: {
    //asyncronous
    async setCartItem({ commit }: { commit: Function }, payload: string) {
      const cartItem = await fetch(url + payload, { headers });
      const j = await cartItem.json();
      commit("setCartItem", j[0]);
      commit("setImgSrc", j[0].photo[0]);
      console.log("in setCartItem method", j);
    },
  },
  getters: {
    getCartItem: (state: CartState) => {
      return state.cartItem;
    },
    getImgSrc: (state: CartState) => {
      return state.imgSrc;
    },
  },
};
