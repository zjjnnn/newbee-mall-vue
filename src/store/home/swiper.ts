const url = "http://localhost:3000/swiper";
const headers = { Accept: "application/json" };

interface SwiperState {
  images: [];
}

export default {
  state: {
    images: [],
  },
  mutations: {
    //syncrous
    setImages(state: SwiperState, payload: []) {
      //state.images.push(...payload);
      state.images = payload;
      console.log("array push ", payload);
    },
  },
  actions: {
    //asyncronous
    async setImages({ commit }: { commit: Function }) {
      const images = await fetch(url, { headers });
      const j = await images.json();
      commit("setImages", j);
      //console.log("in setImages method", j);
    },
  },
  getters: {
    getImages: (state: SwiperState) => {
      console.log("in getImages method", state.images);
      console.log(state.images);
      return state.images;
    },
  },
};
