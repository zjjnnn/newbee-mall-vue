import { Data } from "ant-design-vue/lib/_util/type";

const url = "http://localhost:3000/goodsqa/";
const headers = { Accept: "application/json" };

type GoodsQAState = {
  goodsQA: { qaList: QaList[] };
  pageNo: number;
  totalPage: number;
  qaList: [];
};

type QaList = {
  questionContents: string;
  questionDate: Date;
  answerContents: string;
  answerName: string;
  answerDate: Date;
  count: number;
};

export default {
  state: {
    goodsQA: { qaList: [] },
    pageNo: 1,
    totalPage: Number,
  },
  mutations: {
    //syncrous
    setGoodsQA(state: GoodsQAState, payload: GoodsQAState) {
      state.goodsQA = payload;
      console.log("array push ", payload);
    },
    nextPage(state: GoodsQAState) {
      state.pageNo++;
    },
    previousPage(state: GoodsQAState) {
      state.pageNo--;
    },
    sortList(state: GoodsQAState, value: string) {
      if (value === "total_yes") {
        state.goodsQA.qaList.sort((a, b) => b.count - a.count);
      } else {
        state.goodsQA.qaList.sort(
          (a, b) => +new Date(b.answerDate) - +new Date(a.answerDate)
        );
      }
    },
  },
  actions: {
    //asyncronous
    async setGoodsQA({ commit }: { commit: Function }, payload: string) {
      const goodsQA = await fetch(url + payload, { headers });
      const j = await goodsQA.json();
      commit("setGoodsQA", j[0]);
      console.log("in setGoodsQA method", j);
    },
  },
  getters: {
    getGoodsQA: (state: GoodsQAState) => {
      return state.goodsQA;
    },
    getPageNo: (state: GoodsQAState) => {
      return state.pageNo;
    },
  },
};
