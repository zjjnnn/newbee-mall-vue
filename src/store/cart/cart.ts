import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const headers = { Accept: "application/json" };

type CartState = {
  cartItem: {};
  quantity: number;
};

export default {
  state: {
    cartItem: {},
    quantity: 1,
  },
  mutations: {
    //syncrous
    setCartItem(state: CartState, payload: {}) {
      state.cartItem = payload;
    },
  },
  actions: {
    //asyncronous
    async setCartItem({ commit }: { commit: Function }, payload: string) {
      const cartItem = await fetch(url + payload, { headers });
      const j = await cartItem.json();
      commit("setCartItem", j);
    },
    async addCart() {
      const cart = {
        userId: "user01",
        sku: "10195s_wh",
        quantity: 1,
        cartDate: new Date(),
      };

      await axios.post("http://localhost:3000/addCart", cart);
    },
  },
  getters: {
    getCartItem: (state: CartState) => {
      return state.cartItem;
    },
  },
};
