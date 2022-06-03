const url = "http://localhost:3000/goods/detail/review/";
const headers = { Accept: "application/json" };

export default {
  state: {
    reviews: [], //显示所有数据
    allReviewList: [], //过滤显示各个rating的评论
    show: [], //显示3条数据,reviews.slice(0, 3)
    showed: false,
    titleCount: Number,
  },
  mutations: {
    //synchronous 同期
    setReviews(state, payload) {
      state.reviews = payload;
      //state.reviews.push(...payload);
      console.log("array push ", payload);
    },
    changeShowed(state, changeShowed) {
      state.showed = changeShowed;
    },
    setShow(state) {
      state.show.push(...state.reviews.slice(0, 3));
    },
    filterReviews(state, rating) {
      if (state.allReviewList.length === 0) {
        state.allReviewList.push(...state.reviews);
      }
      const arr = state.allReviewList.filter(
        (review) => review.rating === rating
      );

      if (arr.length > 3) {
        state.show = arr.slice(0, 3);
        state.reviews = arr.slice(0);
      } else {
        state.reviews = arr;
      }
    },
  },
  actions: {
    //asyncronous 非同期
    async setReviews(context, payload) {
      const reviews = await fetch(url + payload, { headers });
      const j = await reviews.json();
      context.commit("setReviews", j);
      // console.log("in setReviews method", j);
    },
  },
  getters: {
    getReviews: (state) => {
      // console.log("in getReviews method", state.reviews);
      // console.log(state.reviews);
      return state.reviews;
    },
    getShow: (state) => {
      return state.show;
    },
  },
};
