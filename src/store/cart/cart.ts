import axios from "axios";

const url = "http://localhost:3000/cart/list/";
const url2 = "http://localhost:3000/buy/later/list/";
const headers = { Accept: "application/json" };

type CartState = {
  cartItem: Item[];
  quantity: number;
  paymentSum: number;
  quantityInCart: number;
  buyLaterItems: Item[];
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
    quantityInCart: 1,
    buyLaterItems: [],
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

    setBuyLaterItem(state: CartState, payload: any) {
      state.buyLaterItems = payload;
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
    async addCart(context, sku: string) {
      const cart = {
        userId: "user01",
        sku: sku,
        quantity: 1,
        cartDate: new Date(),
      };
      cart.quantity = context.state.quantity;
      await axios.post("http://localhost:3000/addCart", cart);
    },
    // delect data
    async deleteCart(context, { id, userId }: { id: number; userId: string }) {
      await fetch("http://localhost:3000/cartList/" + id, { method: "DELETE" });

      //get data again
      context.dispatch("setCartItem", userId);
      // const cartItem = await fetch(url + userId, { headers });
      // const j = await cartItem.json();
      // context.commit("setCartItem", j);
      // //compute sum again
      // let paymentSum = 0;
      // context.state.cartItem.map(
      //   (item) => (paymentSum += item.price * item.quantity + item.postage)
      // );
      // context.commit("setSum", paymentSum);
    },

    // update data
    async UpdateCart(context, { id, userId }: { id: number; userId: string }) {
      await axios.patch("http://localhost:3000/cartList/" + id, {
        quantity: context.state.quantityInCart,
      });
      //get data again
      context.dispatch("setCartItem", userId);
    },

    async setBuyLaterItem(context, payload: string) {
      const buyLater = await fetch(url2 + payload, { headers });
      const j = await buyLater.json();
      context.commit("setBuyLaterItem", j);
    },
    async intoLaterList(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/cartList/" + id, { method: "DELETE" });
      const cartList = {
        id: 3,
        userId: "user01",
        goodsId: 10195,
        size: "シングル",
        sku: "10195s_wh",
        color: "ホワイト",
        photo: "http://localhost:8080/assets/images/goodsphoto1.jpg",
        price: 5000,
        title: "ゴムバンド付き敷きパッド　シングル(NクールWSP n-s WH SD)",
        shipment: "2~6",
        postage: 500,
        link: "/goods/detail/10195",
        quantity: 3,
      };
      await axios.post("http://localhost:3000/buyLaterList", cartList);

      //get data again
      context.dispatch("setCartItem", userId);
      context.dispatch("setBuyLaterItem", userId);
    },
    async backtoCartList(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/buyLaterList/" + id, {
        method: "DELETE",
      });
      const cartList = {
        id: 3,
        userId: "user01",
        goodsId: 10195,
        size: "シングル",
        sku: "10195s_wh",
        color: "ホワイト",
        photo: "http://localhost:8080/assets/images/goodsphoto1.jpg",
        price: 5000,
        title: "ゴムバンド付き敷きパッド　シングル(NクールWSP n-s WH SD)",
        shipment: "2~6",
        postage: 500,
        link: "/goods/detail/10195",
        quantity: 3,
      };
      await axios.post("http://localhost:3000/cartList", cartList);

      //get data again
      context.dispatch("setCartItem", userId);
      context.dispatch("setBuyLaterItem", userId);
    },
    async deleteByLater(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/buyLaterList/" + id, {
        method: "DELETE",
      });

      //get data again
      context.dispatch("setBuyLaterItem", userId);
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
    getQuantityInCart: (state: CartState) => {
      return state.quantityInCart;
    },

    getBuyLaterItem: (state: CartState) => {
      return state.buyLaterItems;
    },
  },
};
