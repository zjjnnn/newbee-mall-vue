import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const headers = { Accept: "application/json" };

type CartState = {
  cartItem: {};
  quantity: number;
  sku: string;
};

export default {
  state: {
    cartItem: {},
    quantity: 1,
    sku: "",
  },
  mutations: {
    //syncrous
    setCartItem(state: CartState, payload: {}) {
      state.cartItem = payload;
    },
    updateQuantity(state: CartState, quantity: number) {
      if (quantity > 999) {
        state.quantity = +quantity.toString().slice(0, 3);
      } else {
        state.quantity = +quantity;
      }
    },
  },
  actions: {
    //asyncronous
    async setCartItem({ commit }: { commit: Function }, payload: string) {
      const cartItem = await fetch(url + payload, { headers });
      const j = await cartItem.json();
      commit("setCartItem", j);
    },
    async addCart(context) {
      const cart = {
        userId: "user01",
        sku: "10195s_wh",
        quantity: 1,
        cartDate: new Date(),
      };
      cart.quantity = context.state.quantity;

      if (cart.quantity < 1 || cart.quantity > 999) {
        alert("数量は1以上、999以下で設定してください");
      } else {
        await axios.post("http://localhost:3000/addCart", cart);
      }
    },
    async deleteCart() {
      await fetch("http://localhost:3000/cartList/2", { method: "DELETE" });
      alert("deleted!!!!!");
    },
  },
  getters: {
    getCartItem: (state: CartState) => {
      return state.cartItem;
    },
    getQuantity: (state: CartState) => {
      return state.quantity;
    },
  },
};
