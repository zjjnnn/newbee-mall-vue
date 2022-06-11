import { State } from "vue";

const url = "http://localhost:3000/goods/info/";
const headers = { Accept: "application/json" };

type GoodsInfoState = {
  infos: {};
  infoList: InfoList[];
  variants: V[];
  imgList: string[][];
  newInfoList: {};
  size: string;
  color: string;
  colorList: string[];
  imgSrc: string;
  index: number;
};

type InfoList = {
  size: string;
  sizeValue: string;
  sizeDataCode: string;
  sku: string;
  color: string;
  sizeDetail: string;
  material: string;
  weight: string;
  warranty: string;
  photo: string[];
  price: number;
  title: string;
};
type V = {
  size: string;
  color: string[];
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
    colorList: [],
    imgSrc: "",
    index: 0,
    // colors: [],
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
    setColorList(state: GoodsInfoState, size: string) {
      state.colorList = state.variants.filter((v: V) => v.size === size)[0][
        "color"
      ];
    },
    setNewList(state, { size, color }: { size: string; color: string }) {
      let imgs: string[] = [];
      const filteredList = state.infoList.filter(
        (info: InfoList) => info.size === size && info.color === color
      );
      if (filteredList.length > 0) {
        imgs = filteredList[0]["photo"];
        state.newInfoList = filteredList[0];
      }

      //每8张照片放进一组，放入一个list
      const limit = 4;
      const count = Math.ceil(imgs.length / limit);
      let index = 0;
      state.imgList = []; //清空
      while (index < count) {
        state.imgList.push(imgs.slice(index * limit, index * limit + limit));
        index++;
      }
      state.imgSrc = state.newInfoList["photo"][0];
      state.size = size;
      state.color = color;
    },
    setSize(state: GoodsInfoState, payload: string) {
      state.size = payload;
    },

    setColor(state: GoodsInfoState, payload: string) {
      state.color = payload;
    },

    changeUrl(state: GoodsInfoState, img: string) {
      state.imgSrc = img;
    },
    nextDiv(state: GoodsInfoState) {
      state.index--;
    },
    previousDiv(state: GoodsInfoState) {
      state.index++;
    },
  },
  actions: {
    setNewListAndColor(
      context,
      { size, color }: { size: string; color: string }
    ) {
      context.commit("setColorList", size);

      const va = context.state.variants.filter((v) => v.size === size);
      const filteredColor = va[0].color.filter(
        (v) => v === context.state.color
      );

      if (filteredColor.length < 1) {
        context.commit("setColor", va[0].color[0]);
        context.commit("setNewList", { size, color: va[0].color[0] });
      } else {
        context.commit("setNewList", { size, color });
      }
    },

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
      commit("setColorList", size);
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
      //console.log("qqqqqq", state.newInfoList);
      return state.newInfoList;
    },
    getColorList: (state: GoodsInfoState) => {
      console.log("colors", state.colorList);
      return state.colorList;
    },
    getImgsrc: (state: GoodsInfoState) => {
      return state.imgSrc;
    },
    getIndex: (state: GoodsInfoState) => {
      return state.index;
    },
  },
};
