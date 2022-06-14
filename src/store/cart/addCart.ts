import axios from "axios";

type CartState = {
  cart: {};
  id: number;
};

export default {
  state: {},
  mutations: {},
  actions: {
    //asyncronous
    async addCartItem() {
      const cartItem = {
        userId: "user01",
        sku: "10195s_wh",
        quantity: 1,
        cartDate: new Date(),
      };

      await axios.post("http://localhost:3000/addCart", cartItem);
    },
  },
  getters: {},
};
