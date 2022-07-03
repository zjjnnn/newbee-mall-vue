import axios from "axios";

const url = "http://localhost:3000/wish/list/";
const headers = { Accept: "application/json" };

type WishState = {
  wishList: Wish[];
  goodsList: Goods[];
  value: string;
  selectedName: string;
  id: number;
  canMoveList: Wish[];
  allGoodsList: Goods[];
  selectableList: string;
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
  photo: string[];
  price: number;
  title: string;
  shipment: string;
  postage: number;
  link: string;
  quantity: number;
  listName: string;
};
export default {
  state: {
    wishList: [],
    goodsList: [],
    value: "",
    id: 1,
    selectedName: "お気に入り商品",
    canMoveList: [],
    allGoodsList: [],
    selectableList: "",
  },

  mutations: {
    setWishList(state: WishState, payload: []) {
      state.wishList = payload;
      //console.log("wishList in store", state.wishList);
    },
    setGoodsList(state: WishState, payload: []) {
      state.goodsList = payload;
    },
    setALLGoodsList(state: WishState, payload: []) {
      state.allGoodsList = payload;
    },
    updateValue(state: WishState, payload: string) {
      state.value = payload;
    },
    setCanMoveList(state: WishState, payload: []) {
      state.canMoveList = payload;
      state.selectableList = state.canMoveList[0].listName;
      //console.log("canMoveList in store", state.canMoveList);
    },

    // filterGoodsList(state: WishState, payload: string) {
    //   state.selectedName = payload;
    //   state.goodsList = state.wishList.filter(
    //     (w: Wish) => w.listName === payload
    //   )[0].goodsList;
    //   state.id = state.wishList.filter(
    //     (w: Wish) => w.listName === payload
    //   )[0].id;
    // },
    filterGoodsList(state: WishState, payload: string) {
      state.selectedName = payload;
      state.goodsList = state.allGoodsList.filter(
        (w: Goods) => w.listName === payload
      );
      state.id = state.wishList.filter(
        (w: Wish) => w.listName === payload
      )[0].id;
    },
    filterWishList(state: WishState, payload: string) {
      state.canMoveList = state.wishList.filter(
        (w: Wish) => w.listName !== payload
      );
      state.selectableList = state.canMoveList[0].listName;
    },
    updateSelectList(state: WishState, payload: string) {
      state.selectableList = payload;
    },
  },

  actions: {
    //get
    async setWishList(context, payload: string) {
      const info = await fetch(url + payload, { headers });
      const j = await info.json();
      context.commit("setWishList", j);
      const filtered = j.filter((w: Wish) => w.listName !== "お気に入り商品");
      console.log("filtered", filtered);
      context.commit("setCanMoveList", filtered);
      // context.commit("setGoodsList", j[0].goodsList);
      // const defaultName = "お気に入り商品";
      // context.commit("setSelectedName", defaultName);
      console.log("j", j);
    },
    async setWishGoodsList(context, payload: string) {
      const info = await fetch(
        "http://localhost:3000/wish/goods/List/" + payload,
        { headers }
      );
      const j = await info.json();
      context.commit("setALLGoodsList", j);
      const filtered = j.filter((w: Wish) => w.listName === "お気に入り商品");
      context.commit("setGoodsList", filtered);
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
      context.state.selectedName = "お気に入り商品";
    },
    //update listName
    async updateListName(
      context,
      { newName, id, userId }: { newName: string; id: number; userId: string }
    ) {
      await axios.patch("http://localhost:3000/wishList/" + id, {
        listName: newName,
      });
      //console.log("newName", newName);
      context.dispatch("setWishList", userId);
      context.state.selectedName = "お気に入り商品";
    },
    //add goods into [お気に入り商品] list
    async intoWish(context, newInfoList: {}) {
      const obj = {
        listName: "お気に入り商品",
        userId: "user01",
        quantity: 1,
      };
      const item = {
        ...newInfoList,
        ...obj,
      };
      // const key = "listName";
      // const value = "お気に入り商品";
      // const key2 = "userId";
      // const value2 = "user01";
      // newInfoList[key] = value;
      // newInfoList[key2] = value2;
      await axios.post("http://localhost:3000/wishgoodsList", item);

      const userId = "user01";
      context.dispatch("setWishList", userId);
    },

    //delete goods in [お気に入り商品] list
    async deleteGoods(context, { id, userId }: { id: number; userId: string }) {
      await fetch("http://localhost:3000/wishgoodsList/" + id, {
        method: "DELETE",
      });
      context.dispatch("setWishGoodsList", userId);
    },
    //move goods from  [お気に入り商品] list to [好きな商品] list
    async moveGoods(
      context,
      {
        selectableList,
        id,
        userId,
      }: { selectableList: string; id: number; userId: string }
    ) {
      await axios.patch("http://localhost:3000/wishgoodsList/" + id, {
        listName: selectableList,
      });
      //console.log("anotherName", anotherName);
      context.dispatch("setWishGoodsList", userId);
      context.dispatch("setWishList", userId);
      context.state.selectedName = "お気に入り商品";
    },

    // async moveGoods(
    //   context,
    //   { id, userId, item }: { id: number; userId: string; item: {} }
    // ) {
    //   //delect
    //   await fetch("http://localhost:3000/defaultList/" + id, {
    //     method: "DELETE",
    //   });
    //   //add
    //   await axios.post("http://localhost:3000/likeList", item);
    //   //get again
    //   context.dispatch("setWishList", userId);
    // },
  },
  getters: {
    getWishList(state: WishState) {
      console.log("wishList in getters", state.wishList);
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
    getCanMoveList(state: WishState) {
      //console.log("canMoveList in getters", state.canMoveList);
      return state.canMoveList;
    },
    getAllGoodsList(state: WishState) {
      console.log("allGoodsList", state.allGoodsList);
      return state.allGoodsList;
    },
    getSelectableList(state: WishState) {
      return state.selectableList;
    },
  },
};
