const url = "http://localhost:3000/user/info/";
const headers = { Accept: "application/json" };

type userState = {
  userInfo: {};
};

export default {
  state: {
    userInfo: {},
  },

  mutations: {
    setUserInfo(state: userState, payload: {}) {
      state.userInfo = payload;
    },
  },
  actions: {
    async setUserInfo(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setUserInfo", j[0]);
      console.log("j", j);
    },
  },
  getters: {
    getUserInfo(state: userState) {
      return state.userInfo;
    },
  },
};
