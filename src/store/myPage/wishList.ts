const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type WishState = {
  wishList: [];
  goodsList: [];
};

export default {
  state: {
    wishList: [],
    goodsList: [],
  },

  mutations: {
    setWishList(state: WishState, payload: []) {
      state.wishList = payload;
    },
    setGoodsList(state: WishState, payload: []) {
      state.goodsList = payload;
    },
  },

  actions: {
    async setWishList(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setWishList", j);
      context.commit("setGoodsList", j[0].goodsList);
      console.log("j", j);
    },
  },
  getters: {
    getWishList(state: WishState) {
      return state.wishList;
    },
    getGoodsList(state: WishState) {
      return state.goodsList;
    },
  },
};
