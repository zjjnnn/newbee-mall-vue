<template>
  <div class="p-reviewScore p-reviewScore-sm">
    <review-total-left
      :reviewTotal="reviewTotal"
      class="left"
    ></review-total-left>
    <review-total-right class="right"></review-total-right>
  </div>
  <p class="p-reviw-graph-area-foot">
    {{ reviewTotal.reviewCount }}評価 {{ reviewTotal.titleCount }}商品レビュー
  </p>
</template>

<script setup lang="ts">
import ReviewTotalLeft from "./ReviewTotalLeft.vue";
import ReviewTotalRight from "./ReviewTotalRight.vue";
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
const route = useRoute();
const goodsId = route.params.goodsId;
const store = useStore();
onMounted(() => {
  store.dispatch("setReviewTotal", goodsId);
});
let reviewTotal = computed(() => store.getters.getReviewTotal);
</script>

<style>
.p-reviewScore {
  display: flex;
  margin-bottom: 15px;
  align-items: flex-end;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
</style>
