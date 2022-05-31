const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };

export default {
  state: {
    goodsQA: { qaList: [] },
    pageNo: 1,
    totalPage: Number,
  },
  mutations: {
    //syncrous
    setGoodsQA(state, payload) {
      state.goodsQA = payload[0];
      console.log("array push ", payload);
    },
    nextPage(state) {
      state.pageNo++;
    },
    previousPage(state) {
      state.pageNo--;
    },
    sortList(state, value) {
      if (value === "total_yes") {
        state.goodsQA.qaList.sort((a, b) => b.count - a.count);
      } else {
        state.goodsQA.qaList.sort(
          (a, b) => new Date(b.answerDate) - new Date(a.answerDate)
        );
      }
    },
  },
  // if (state.totalYesList.length == 0) {
  //   state.totalYesList = state.goodsQA.qaList;
  // }
  // const arr = state.totalYesList.sort((a, b) => b.count - a.count);
  // if (selected === "total_yes") {
  //   state.goodsQA.qaList = arr;
  //   //console.log("state.totalYesList", arr);
  // }
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
    getPageNo: (state) => {
      return state.pageNo;
    },
    getSelected: (state) => {
      return state.selected;
    },
  },
};
