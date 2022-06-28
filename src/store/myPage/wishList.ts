import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type WishState = {
  wishList: Wish[];
  goodsList: Goods[];
  value: string;
  selectedName: string;
  id: number;
};
type Wish = {
  listName: string;
  id: number;
  goodsList: Goods[];
};
type Goods = {
  id: number;
  userId: string;
  goodsId: number;
  size: string;
  sku: string;
  color: string;
  photo: string;
  price: number;
  title: string;
  shipment: string;
  postage: number;
  link: string;
  quantity: number;
};
export default {
  state: {
    wishList: [],
    goodsList: [],
    value: "",
    id: 1,
    selectedName: "お気に入り商品",
  },

  mutations: {
    setWishList(state: WishState, payload: []) {
      state.wishList = payload;
    },
    setGoodsList(state: WishState, payload: []) {
      state.goodsList = payload;
    },
    updateValue(state: WishState, payload: string) {
      state.value = payload;
    },
    // setSelectedName(state: WishState, payload: string) {
    //   state.selectedName = payload;
    // },
    // updateSelectName(state: WishState, payload: string) {
    //   state.selectedName = payload;
    // },
    filterGoodsList(state: WishState, payload: string) {
      state.selectedName = payload;
      state.goodsList = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].goodsList;
      state.id = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].id;
    },
  },

  actions: {
    //get
    async setWishList(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setWishList", j);
      context.commit("setGoodsList", j[0].goodsList);
      // const defaultName = "お気に入り商品";
      // context.commit("setSelectedName", defaultName);
      console.log("j", j);
    },
    //add listName
    async addWishList(context, userId: string) {
      const wishList = {
        userId: "user01",
        listName: context.state.value,
        goodsList: [],
      };
      await axios.post("http://localhost:3000/wishList", wishList);
      context.dispatch("setWishList", userId);
      context.state.value = "";
    },
    //delete listName
    async deleteWishList(
      context,
      { id, userId }: { id: number; userId: string }
    ) {
      await fetch("http://localhost:3000/wishList/" + id, { method: "DELETE" });
      context.dispatch("setWishList", userId);
    },
    //update listName
  },
  getters: {
    getWishList(state: WishState) {
      return state.wishList;
    },
    getGoodsList(state: WishState) {
      return state.goodsList;
    },
    getValue(state: WishState) {
      return state.value;
    },
    getSelectName(state: WishState) {
      return state.selectedName;
    },
    getId(state: WishState) {
      return state.id;
    },
  },
};
