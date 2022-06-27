const url = "http://localhost:3000/order/detail/";
const headers = { Accept: "application/json" };

type OrderState = {
  order: {};
  detailList: [];
};

export default {
  state: {
    order: {},
    detailList: [],
  },

  mutations: {
    setOrder(state: OrderState, payload: {}) {
      state.order = payload;
    },
    setDetailList(state: OrderState, payload: []) {
      state.detailList = payload;
    },
  },

  actions: {
    async setOrder(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setOrder", j[0]);
      context.commit("setDetailList", j[0].orderDetail);
      console.log("j", j);
    },
  },
  getters: {
    getOrder(state: OrderState) {
      return state.order;
    },
    getDetailList(state: OrderState) {
      return state.detailList;
    },
  },
};
