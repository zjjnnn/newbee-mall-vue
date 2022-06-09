const url = "http://localhost:3000/goods/detail/review/rating/";
const headers = { Accept: "application/json" };

type reviewRatingState = {
  reviewRating: reviewRating[];
};
type reviewRating = {
  goodsId: number;
  rating: number[];
};
export default {
  state: {
    reviewRating: [],
  },
  mutations: {
    //syncrous
    setReviewRating(state: reviewRatingState, payload: []) {
      state.reviewRating = payload;
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setReviewRating({ commit }: { commit: Function }, payload: number) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setReviewRating", j[0].rating);
      console.log("in setReviewRating method", j);
    },
  },
  getters: {
    getReviewRating: (state: reviewRatingState) => {
      console.log("in getReviewRating method", state.reviewRating);
      console.log(state.reviewRating);
      return state.reviewRating;
    },
  },
};
