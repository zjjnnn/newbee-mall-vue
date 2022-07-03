const url = "http://localhost:3000/userProfile";
const headers = { Accept: "application/json" };

export type UserProfile = {
  profile: {};
};

export default {
  state: {
    profile: {},
  },
  mutations: {
    setProfile(state: UserProfile, payload: {}) {
      state.profile = payload;
    },
  },
  actions: {
    async setProfile(context) {
      const info = await fetch(url, { headers });
      const j = await info.json();
      context.commit("setProfile", j[0]);
    },
  },
  getters: {
    getProfile: (state: UserProfile) => {
      return state.profile;
    },
  },
};
