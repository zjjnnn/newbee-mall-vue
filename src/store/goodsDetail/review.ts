const url = "http://localhost:3000/goods/detail/review/";
const headers = { Accept: "application/json" };

type ReviewState = {
  reviews: Review[];
  allReviewList: Review[];
  show: Review[];
  showed: boolean;
  titleCount: number;
  review: Review;
};

type Review = {
  goodsId: number;
  rating: number;
};

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
    setReviews(state: ReviewState, payload: Review[]) {
      state.reviews = payload;
      //state.reviews.push(...payload);
      console.log("array push ", payload);
    },
    // changeShowed(state:ReviewState, changeShowed) {
    //   state.showed = changeShowed;
    // },
    setShow(state: ReviewState) {
      state.show.push(...state.reviews.slice(0, 3));
    },
    filterReviews(state: ReviewState, rating: number) {
      if (state.allReviewList.length === 0) {
        //state.allReviewList.push(...state.reviews);
        state.allReviewList = state.reviews;
      }
      const arr = state.allReviewList.filter(
        (review: Review) => review.rating === rating
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
    async setReviews({ commit }: { commit: Function }, payload: number) {
      const reviews = await fetch(url + payload, { headers });
      const j = await reviews.json();
      commit("setReviews", j);
      // console.log("in setReviews method", j);
    },
  },
  getters: {
    getReviews: (state: ReviewState) => {
      // console.log("in getReviews method", state.reviews);
      // console.log(state.reviews);
      return state.reviews;
    },
    getShow: (state: ReviewState) => {
      return state.show;
    },
  },
};
