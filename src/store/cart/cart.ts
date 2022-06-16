import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const headers = { Accept: "application/json" };

type CartState = {
  cartItem: Item[];
  quantity: number;
  paymentSum: number;
  quantityInCart: number;
};
type Item = {
  id: number;
  userId: string;
  goodsId: number;
  size: string;
  sku: string;
  color: string;
  photo: string;
  price: number;
  title: string;
  shipment: string;
  postage: number;
  link: string;
  quantity: number;
};

export default {
  state: {
    cartItem: [],
    quantity: 1,
    paymentSum: 0,
    quantityInCart: 0,
  },
  mutations: {
    //syncrous
    setCartItem(state: CartState, payload: any) {
      state.cartItem = payload;
    },
    updateQuantity(state: CartState, quantity: number) {
      if (quantity > 999) {
        state.quantity = +quantity.toString().slice(0, 3);
      } else {
        state.quantity = +quantity;
      }
    },
    updateQuantityInCart(state: CartState, quantity: number) {
      if (quantity > 999) {
        state.quantityInCart = +quantity.toString().slice(0, 3);
      } else {
        state.quantityInCart = +quantity;
      }
    },
    setSum(state: CartState, payload: number) {
      state.paymentSum = payload;
    },
  },
  actions: {
    // get data
    async setCartItem(context, payload: string) {
      const cartItem = await fetch(url + payload, { headers });
      const j = await cartItem.json();
      context.commit("setCartItem", j);

      let paymentSum = 0;
      context.state.cartItem.map(
        (item) => (paymentSum += item.price * item.quantity + item.postage)
      );
      context.commit("setSum", paymentSum);
    },
    // add data
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
      alert("カートに追加しました！");
    },
    // delect data
    async deleteCart(
      { commit }: { commit: Function },
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/cartList/" + id, { method: "DELETE" });

      const cartItem = await fetch(url + userId, { headers });
      const j = await cartItem.json();
      commit("setCartItem", j);
    },
    // update data
    async UpdateCart(context, { id, userId }: { id: number; userId: string }) {
      await axios.patch("http://localhost:3000/cartList/" + id, {
        quantity: context.state.quantityInCart,
      });
      const cartItem = await fetch(url + userId, { headers });
      const j = await cartItem.json();
      context.commit("setCartItem", j);
      console.log("j", j);
      let paymentSum = 0;
      context.state.cartItem.map(
        (item) => (paymentSum += item.price * item.quantity + item.postage)
      );
      context.commit("setSum", paymentSum);
    },
  },
  getters: {
    getCartItem: (state: CartState) => {
      return state.cartItem;
    },
    getQuantity: (state: CartState) => {
      return state.quantity;
    },
    getPaymentSum: (state: CartState) => {
      return state.paymentSum;
    },
  },
};
