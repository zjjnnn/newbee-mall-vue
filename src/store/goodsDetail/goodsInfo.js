const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    infomations: [],
  },
  mutations: {
    //synchronous 同期
    setInfomations(state, payload) {
      state.infomations = payload[0];
      //console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous 非同期
    async setInfomations(context, payload) {
      const infomations = await fetch(url + payload, { headers });
      const j = await infomations.json();
      context.commit("setInfomations", j);
    },
  },
  getters: {
    getInfomations: (state) => {
      return state.infomations;
    },
  },
};
