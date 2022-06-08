const url = "http://localhost:3000/goods/detail/review/total/";
const headers = { Accept: "application/json" };

type ReviewTotal = {
  reviewTotal: {};
};
export default {
  state: {
    reviewTotal: {},
  },
  mutations: {
    //syncrous
    setReviewTotal(state: ReviewTotal, payload: {}) {
      //state.reviewTotal.push(...payload);
      //state.reviewTotal = payload
      state.reviewTotal = payload;
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewTotal({ commit }: { commit: Function }, payload: number) {
      const reviewTotal = await fetch(url + payload, { headers });
      const j = await reviewTotal.json();
      commit("setReviewTotal", j[0]);
      console.log("in setReviewTotal method", j);
    },
  },
  getters: {
    getReviewTotal: (state: ReviewTotal) => {
      console.log("in getReviewTotal method", state.reviewTotal);
      console.log(state.reviewTotal);
      return state.reviewTotal;
    },
  },
};
