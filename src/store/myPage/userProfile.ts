import axios from "axios";

const url = "http://localhost:3000/userProfile";
const headers = { Accept: "application/json" };

export type UserProfile = {
  profile: Profile;
};

type Profile = {
  id: number;
  userId: string;
  emailMagazine: number;
  userType: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  telA: string;
  telB: string;
  telC: string;
  tel2A: string;
  tel2B: string;
  tel2C: string;
  gender: string;
  birthyear: string;
  birthmonth: string;
  birthday: string;
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
  password: string;
  newPassword: string;
  checkPassword: string;
};

export default {
  state: {
    profile: {},
  },
  mutations: {
    setProfile(state: UserProfile, payload: Profile) {
      state.profile = payload;
    },
  },
  actions: {
    async setProfile(context) {
      const info = await fetch(url, { headers });
      const j = await info.json();
      context.commit("setProfile", j[0]);
    },
    async updateList(context, p: Profile) {
      const id = p.id;
      p.password = p.newPassword;
      p.newPassword = "";
      p.checkPassword = "";
      await axios.patch("http://localhost:3000/userProfile/" + id, p);
      context.dispatch("setProfile");
    },
  },
  getters: {
    getProfile: (state: UserProfile) => {
      return state.profile;
    },
  },
};
