const url = "http://localhost:3000/user/info/";
const headers = { Accept: "application/json" };

type userState = {
  userInfo: {};
  orderList: Order[];
  filteredList: Order[];
  status: string;
  date: string;
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
    statusValue: string;
  };
};

export default {
  state: {
    userInfo: {},
    orderList: [],
    filteredList: [],
    status: "ALL",
    date: "00",
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

    setDate(state: userState, dateValue: string) {
      state.date = dateValue;
    },
    setStatus(state: userState, statusValue: string) {
      state.status = statusValue;
    },

    filterByDate(state: userState) {
      //js获取当前时间前后N天前后日期的方法
      function GetDateStr(AddDayCount) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
      }
      console.log("半年前：" + GetDateStr(-180));

      //根据注文日date过滤数据
      // const today = new Date();
      const thisYear = new Date().getFullYear();
      // const thisMonth = new Date().getMonth() + 1;
      const halfYear = GetDateStr(-180);
      console.log("halfYear", halfYear);
      let filtered: Order[] = [];
      if (state.date === "00") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate) > new Date(halfYear)
          // new Date(order.orderDate).getMonth() + 1 > thisMonth - 6 &&
          // new Date(order.orderDate).getFullYear() === thisYear
        );
      } else if (state.date === "10") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear
        );
      } else if (state.date === "11") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 1
        );
      } else if (state.date === "12") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 2
        );
      } else if (state.date === "13") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 3
        );
      } else if (state.date === "14") {
        filtered = state.orderList.filter(
          (order) => new Date(order.orderDate).getFullYear() === thisYear - 4
        );
      }
      //根据收获状态status过滤数据
      if (state.status === "ALL") {
        state.filteredList = filtered;
      } else {
        state.filteredList = filtered.filter(
          (order) => order.orderDetail[0].statusValue === state.status
        );
      }
      //按照时间降序排序
      state.filteredList.sort(
        (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
    },
  },

  actions: {
    async setUserInfo(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setUserInfo", j[0]);
      context.commit("setOrderList", j[0].orderList);
      console.log("j", j);
      context.commit("filterByDate");

      function GetDateStr(AddDayCount) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
      }
      const halfYear = GetDateStr(-180);
      const filtered = context.state.orderList.filter(
        (order) => new Date(order.orderDate) > new Date(halfYear)
      );
      filtered.sort((a, b) => +new Date(b.orderDate) - +new Date(a.orderDate));
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
    getDate(state: userState) {
      return state.date;
    },
    getStatus(state: userState) {
      return state.status;
    },
  },
};
