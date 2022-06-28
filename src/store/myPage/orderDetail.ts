const url = "http://localhost:3000/order/detail/";
const headers = { Accept: "application/json" };

type OrderState = {
  order: {};
  detailList: [];
  sum: number;
};

export default {
  state: {
    order: {},
    detailList: [],
    sum: Number,
  },

  mutations: {
    setOrder(state: OrderState, payload: {}) {
      state.order = payload;
    },
    setDetailList(state: OrderState, payload: []) {
      state.detailList = payload;
    },
    setSum(state: OrderState, payload: number) {
      state.sum = payload;
    },
  },

  actions: {
    async setOrder(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setOrder", j[0]);
      context.commit("setDetailList", j[0].orderDetail);
      console.log("j", j);
      let paymentSum = 0;
      context.state.detailList.map(
        (item) => (paymentSum += item.price * item.quantity)
      );
      context.commit("setSum", paymentSum);
    },
  },
  getters: {
    getOrder(state: OrderState) {
      return state.order;
    },
    getDetailList(state: OrderState) {
      return state.detailList;
    },
    getSum(state: OrderState) {
      return state.sum;
    },
  },
};
