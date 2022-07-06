<template>
  <div>
    <label>住所</label>
    <div>
      <input type="number" v-model="postCode" />
      <button @click="searchAddress">住所検索</button>
    </div>
  </div>
  <div>
    <label>都道府県</label>
    <input type="text" v-model="prefecture" />
  </div>
  <div>
    <label>市区町村</label>
    <input type="text" v-model="city" />
  </div>
  <div>
    <label>地名・番名</label>
    <input type="text" v-model="town" />
  </div>
  {{ error }}
</template>
<script setup>
import { ref } from "vue";
const headers = { Accept: "application/json" };

const postCode = ref("");
const prefecture = ref("");
const city = ref("");
const town = ref("");
const error = ref("");

const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + postCode.value;

  const info = await fetch(url, { headers });
  const data = await info.json();
  if (data.status === 400) {
    //エラー時
    error.value = data.message;
  } else if (data.results === null) {
    error.value = "郵便番号から住所が見つかりませんでした。";
  } else {
    prefecture.value = data.results[0].address1;
    city.value = data.results[0].address2;
    town.value = data.results[0].address3;
  }
};
</script>
