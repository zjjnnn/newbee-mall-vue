const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

export default {
  state: {
    infos: {},
    infoList: [],
    variants: [],
    imgList: [],
    newList: [],
    size: "",
    color: "",
  },
  mutations: {
    //synchronous 同期
    setInfos(state, payload) {
      state.infos = payload;
      console.log("array push infos", payload);
    },
    setInfoList(state, payload) {
      // state.infoList.push(...payload);
      state.infoList = payload;
      console.log("array push infoList", payload);
    },
    setVariants(state, payload) {
      //state.variants.push(...payload);
      state.variants = payload;
      console.log("array push variants", payload);
    },
    setImgList(state, { size, color }) {
      let imgs = state.infoList.filter(
        (info) => info.sizeType === size && info.color === color
      )[0].photo;

      //每8张照片放进一组，放入一个list
      const limit = 8;
      let count = Math.ceil(imgs.length / limit);
      let index = 0;
      state.imgList = []; //清空
      while (index < count) {
        state.imgList.push(imgs.slice(index * limit, index * limit + limit));
        index++;
      }
    },
    setNewInfoList(state, { size, color }) {
      state.infoList.filter(
        (info) => info.sizeType === size && info.color === color
      );
    },
    setSize(state, payload) {
      state.size = payload;
    },
    setColor(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    //asyncronous 非同期
    async setInfos(context, payload) {
      const infos = await fetch(url + payload, { headers });
      const j = await infos.json();
      context.commit("setInfos", j[0]);
      context.commit("setInfoList", j[0].infoList);
      context.commit("setVariants", j[0].variants);
      const size = j[0].variants[0].size;
      const color = j[0].variants[0].color[0];

      context.commit("setSize", size);
      context.commit("setColor", color);
      context.commit("setImgList", { size, color });
      context.commit("setNewInfoList", { size, color });
    },
  },
  getters: {
    getInfos: (state) => {
      return state.infos;
    },
    getInfoList: (state) => {
      console.log("bbbbbbbbb", state.infoList);
      return state.infoList;
    },
    getVariants: (state) => {
      console.log("aaaaaaaaaaaaaaaa", state.variants);
      return state.variants;
    },
    getImgList: (state) => {
      return state.imgList;
    },
    getSize: (state) => {
      return state.size;
    },
    getColor: (state) => {
      return state.color;
    },
    getNewInfoList: (state) => {
      console.log("qqqqqq", state.newInfoList);
      return state.newInfoList;
    },
  },
};
