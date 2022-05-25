const url = "http://localhost:3000/goods/detail/review/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviews: [],
  },
  mutations: {
    //synchronous 同期
    setReviews(state, payload) {
      state.reviews.push(...payload);
      //state.reviews = payload
      // state.reviews = payload[0];
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous 非同期
    async setReviews(context, payload) {
      const reviews = await fetch(url + payload, { headers });
      const j = await reviews.json();
      context.commit("setReviews", j);
      console.log("in setReviews method", j);
    },
  },
  getters: {
    getReviews: (state) => {
      console.log("in getReviews method", state.reviews);
      console.log(state.reviews);
      return state.reviews;
    },
  },
};
