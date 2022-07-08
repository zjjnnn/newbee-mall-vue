import axios from "axios";

const url = "http://localhost:3000/addressBook";
const headers = { Accept: "application/json" };

export type AddressBook = {
  addressList: Address[];
  filtered: Address;
  selectedList: string;
};

type Address = {
  id: number;
  userId: string;
  addressName: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  telA: string;
  telB: string;
  telC: string;
  tel2A: string;
  tel2B: string;
  tel2C: string;
  postCode: string;
  addressPref: string;
  addressCity: string;
  addressArea: string;
  streetname1: string;
  streetname2: string;
  streetname3: string;
  buildingName: string;
  roomNumber: string;
  conditionValue: string;
  liftValue: string;
};

export default {
  state: {
    addressList: [],
    filtered: {},
    selectedList: "",
  },
  mutations: {
    setAddressList(state: AddressBook, payload: Address[]) {
      state.addressList = payload;
    },
    setFiltered(state: AddressBook, payload: Address) {
      state.filtered = payload;
      state.selectedList = payload.addressName;
    },
    filterAddressList(state: AddressBook, payload: string) {
      state.selectedList = payload;
      state.filtered = state.addressList.filter(
        (a) => a.addressName === payload
      )[0];
    },
  },
  actions: {
    async setAddressList(context) {
      const info = await fetch(url, { headers });
      const j = await info.json();
      let filtered = {};
      if (j.length > 0) {
        filtered = j[0];
      }
      context.commit("setAddressList", j);
      context.commit("setFiltered", filtered);
    },
    async addAddress(context, item) {
      await axios.post("http://localhost:3000/addressBook", item);
      context.dispatch("setAddressList");
    },
    async updateAddress(context) {
      const id = context.state.filtered.id;
      const a = context.state.filtered;
      await axios.patch("http://localhost:3000/addressBook/" + id, a);
      context.dispatch("setAddressList");
    },
    async deleteAddress(context, a: Address) {
      const id = a.id;
      await fetch("http://localhost:3000/addressBook/" + id, {
        method: "DELETE",
      });
      context.dispatch("setAddressList");
    },
  },
  getters: {
    getAddressList: (state: AddressBook) => {
      return state.addressList;
    },
    getFiltered: (state: AddressBook) => {
      return state.filtered;
    },
    getSelectedList: (state: AddressBook) => {
      return state.selectedList;
    },
  },
};
