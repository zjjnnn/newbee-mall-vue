import axios from "axios";

const url = "http://localhost:3000/paymentInfo";
const headers = { Accept: "application/json" };

export type paymentInfo = {
  paymentList: [];
};

export default {
  state: {
    paymentList: [],
  },
  mutations: {
    setPaymentList(state: paymentInfo, payload: []) {
      state.paymentList = payload;
    },
  },
  actions: {
    async setPayment(context) {
      const info = await fetch(url, { headers });
      const j = await info.json();
      context.commit("setPaymentList", j);
    },
    async updatePayment(context) {
      const id = 1;
      const item = {};
      await axios.patch(url + "/" + id, item);
    },
    async deletePayment(context, id: number) {
      await fetch(url + "/" + id, { method: "DELETE" });
      context.dispatch("setPayment");
    },
  },
  getters: {
    getPaymentList: (state: paymentInfo) => {
      return state.paymentList;
    },
  },
};
