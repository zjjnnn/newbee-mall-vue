const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

type GoodsInfoState = {
  infos: {};
  infoList: [];
  variants: [];
  imgList: string[][];
  newInfoList: {};
  size: string;
  color: string;
};

type InfoList = {
  sizeType: string;
  sizeValue: string;
  sizeDataCode: string;
  sku: string;
  color: string;
  size: string;
  material: string;
  weight: string;
  warranty: string;
  photo: string[];
  price: number;
  title: string;
};

export default {
  state: {
    infos: {},
    infoList: [],
    variants: [],
    imgList: [],
    newInfoList: {},
    size: "",
    color: "",
  },
  mutations: {
    //synchronous 同期
    setInfos(state: GoodsInfoState, payload: {}) {
      state.infos = payload;
      console.log("array push infos", payload);
    },
    setInfoList(state: GoodsInfoState, payload: []) {
      // state.infoList.push(...payload);
      state.infoList = payload;
      console.log("array push infoList", payload);
    },
    setVariants(state: GoodsInfoState, payload: []) {
      //state.variants.push(...payload);
      state.variants = payload;
      console.log("array push variants", payload);
    },
    setNewList(
      state: GoodsInfoState,
      { size, color }: { size: string; color: string }
    ) {
      let imgs: string[] = [];
      state.newInfoList = state.infoList.filter(
        (info: InfoList) => info.sizeType === size && info.color === color
      );

      imgs = state.infoList.filter(
        (info: InfoList) => info.sizeType === size && info.color === color
      )[0]["photo"];

      //每8张照片放进一组，放入一个list
      const limit = 8;
      const count = Math.ceil(imgs.length / limit);
      let index = 0;
      state.imgList = []; //清空
      while (index < count) {
        state.imgList.push(imgs.slice(index * limit, index * limit + limit));
        index++;
      }

      state.size = size;
      state.color = color;
    },
    // setNewInfoList(state, { size, color }) {
    //   state.newInfoList=state.infoList.filter(
    //     (info) => info.sizeType === size && info.color === color
    //   );
    // },
    setSize(state: GoodsInfoState, payload: string) {
      state.size = payload;
    },

    setColor(state: GoodsInfoState, payload: string) {
      state.color = payload;
    },
  },
  actions: {
    //asyncronous 非同期
    async setInfos({ commit }: { commit: Function }, payload: string) {
      const infos = await fetch(url + payload, { headers });
      const j = await infos.json();
      commit("setInfos", j[0]);
      commit("setInfoList", j[0].infoList);
      commit("setVariants", j[0].variants);
      const size = j[0].variants[0].size;
      const color = j[0].variants[0].color[0];

      commit("setSize", size);
      commit("setColor", color);
      commit("setNewList", { size, color });
      //context.commit("setNewInfoList", { size, color });
    },
  },
  getters: {
    getInfos: (state: GoodsInfoState) => {
      return state.infos;
    },
    getInfoList: (state: GoodsInfoState) => {
      //console.log("bbbbbbbbb", state.infoList);
      return state.infoList;
    },
    getVariants: (state: GoodsInfoState) => {
      //console.log("aaaaaaaaaaaaaaaa", state.variants);
      return state.variants;
    },
    getImgList: (state: GoodsInfoState) => {
      return state.imgList;
    },
    getSize: (state: GoodsInfoState) => {
      return state.size;
    },
    getColor: (state: GoodsInfoState) => {
      return state.color;
    },
    getNewInfoList: (state: GoodsInfoState) => {
      console.log("qqqqqq", state.newInfoList);
      return state.newInfoList;
    },
  },
};
