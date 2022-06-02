const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    info: {},
    sizeType1: [],
  },
  mutations: {
    //synchronous 同期
    setInfo(state, payload) {
      state.info = payload[0];
      state.infoList = payload[0].infoList;
      state.sizeType1 = payload[0].colorList[0];
      //console.log("array push ", payload);
    },

    filterSize(state, size) {
      state.info.sizeList.filter((info) => info.size === size);
    },
    filterColor(state, color) {
      state.info.sizeList.infoList.filter((info) => info.color === color);
    },
  },
  actions: {
    //asyncronous 非同期
    async setInfo(context, payload) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setInfo", j);
    },
  },
  getters: {
    getInfo: (state) => {
      return state.info;
    },
    getSizeType1: (state) => {
      return state.sizeType1;
    },
  },
};
