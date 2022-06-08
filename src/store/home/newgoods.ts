const url = "http://localhost:3000/newGoodses";
const headers = { Accept: "application/json" };

export type HotGoodsState = {
  newGoodses: [];
};

export default {
  state: {
    newGoodses: [],
  },
  mutations: {
    //syncrous
    setNewGoods(state: HotGoodsState, payload: []) {
      //state.newGoodses.push(...payload);
      state.newGoodses = payload;
      //console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setNewGoodses({ commit }: { commit: Function }) {
      const goodses = await fetch(url, { headers });
      const j = await goodses.json();
      commit("setNewGoods", j);
      //console.log("in setNewGoodses method", j);
    },
  },
  getters: {
    getNewGoodses: (state: HotGoodsState) => {
      console.log("in getNewGoodses method", state.newGoodses);
      console.log(state.newGoodses);
      return state.newGoodses;
    },
  },
};
