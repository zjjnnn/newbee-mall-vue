const url = "http://localhost:3000/user/info/";
const headers = { Accept: "application/json" };

type userState = {
  userInfo: {};
  orderList: Order[];
  filteredList: Order[];
};
type Order = {
  orderId: string;
  orderDate: Date;
  store: string;
  orderDetail: {
    deliveryStatus: string;
    deliverytype: string;
    deliverDate: Date;
    goodsId: number;
    quantity: number;
  };
};

export default {
  state: {
    userInfo: {},
    orderList: [],
    filteredList: [],
  },

  mutations: {
    setUserInfo(state: userState, payload: {}) {
      state.userInfo = payload;
    },
    setOrderList(state: userState, payload: []) {
      state.orderList = payload;
    },
    setFilterList(state: userState, payload: []) {
      state.filteredList = payload;
      state.filteredList.sort(
        (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
    },
    filterByDate(state: userState, value: string) {
      const thisYear = new Date().getFullYear();
      state.filteredList = state.orderList;
      // const month = today.getMonth() + 1;
      if (value === "00") {
        state.filteredList = state.orderList.filter(
          (order) =>
            new Date(order.orderDate).getMonth() + 1 > 0 &&
            new Date(order.orderDate).getFullYear() > 2021
        );
      } else if (value === "10") {
        state.filteredList = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear
        );
      } else if (value === "11") {
        state.filteredList = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 1
        );
      } else if (value === "12") {
        state.filteredList = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 2
        );
      } else if (value === "13") {
        state.filteredList = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 3
        );
      } else if (value === "14") {
        state.filteredList = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 4
        );
      }
      state.filteredList.sort(
        (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
    },
    filterByStatus(state: userState, value: string) {
      if (value === "ORDERS") {
        state.filteredList = state.orderList.filter(
          (order) => order.orderDetail[0].deliveryStatus === "受注済"
        );
      }
    },
  },

  actions: {
    async setUserInfo(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setUserInfo", j[0]);
      context.commit("setOrderList", j[0].orderList);
      console.log("j", j);
      const filtered = context.state.orderList.filter(
        (order) =>
          new Date(order.orderDate).getMonth() + 1 > 0 &&
          new Date(order.orderDate).getFullYear() > 2021
      );
      context.commit("setFilterList", filtered);
    },
  },
  getters: {
    getUserInfo(state: userState) {
      return state.userInfo;
    },
    getOrderList(state: userState) {
      return state.orderList;
    },
    getFilteredList(state: userState) {
      console.log("filteredList", state.filteredList);
      return state.filteredList;
    },
  },
};
