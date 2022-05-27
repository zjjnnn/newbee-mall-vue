<template>
  <div>
    <h1>商品详情页面</h1>
    <p>goodsId:{{ goodsId }}</p>
    <router-link to="/">Go to Home</router-link>
    <hr />
    <qa-and-review></qa-and-review>
  </div>
</template>

<script setup>
import QaAndReview from "../components/QaAndReview.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style scoped></style>
