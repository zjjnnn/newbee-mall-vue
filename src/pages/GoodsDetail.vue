<template>
  <div>
    <h1>商品详情页面</h1>
    <p>goodsId:{{ goodsId }}</p>
    <router-link to="/">Go to Home</router-link>
    <br />
    <router-link to="/cart">Go to Cart</router-link>
    <br />
    <router-link to="/my-account">Go to myPage</router-link>
    <hr />
    <body-container></body-container>
    <qa-and-review></qa-and-review>
  </div>
</template>

<script setup lang="ts">
import QaAndReview from "../components/QaAndReview.vue";
import { useRoute } from "vue-router";
import BodyContainer from "../components/goodsInfo/BodyContainer.vue";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style scoped></style>
