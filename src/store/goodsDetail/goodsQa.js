const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsQA: {},
    qaList: [],
    totalCount: Number,
    pageNo: 1,
    totalPage: Number,
    showLeft: false,
  },
  mutations: {
    //syncrous
    setGoodsQA(state, payload) {
      state.goodsQA = payload[0];
      console.log("array push ", payload);
    },
    setQaList(state, payload) {
      state.qaList = payload[0].qaList;
    },
    setTotalCount(state, payload) {
      state.totalCount = payload[0].totalCount;
    },
    nextPage(state) {
      state.pageNo++;
    },
    previousPage(state) {
      state.pageNo--;
    },
    changeShowLeft(state, changeShowLeft) {
      state.showLeft = changeShowLeft;
    },
  },

  actions: {
    //asyncronous
    async setGoodsQA(context, payload) {
      const goodsQA = await fetch(url + payload, { headers });
      const j = await goodsQA.json();
      context.commit("setGoodsQA", j);
      console.log("in setGoodsQA method", j);
    },
  },
  getters: {
    getGoodsQA: (state) => {
      return state.goodsQA;
    },
    getQaList: (state) => {
      return state.qaList;
    },
    getTotalCount: (state) => {
      return state.totalCount;
    },
    getPageNo: (state) => {
      return state.pageNo;
    },
    getTotalPage: (state) => {
      return state.totalPage;
    },
    getShowLeft: (state) => {
      return state.showLeft;
    },
  },
};
