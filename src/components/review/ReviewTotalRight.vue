<template>
  <div class="p-reviw-graph-area-right">
    <template v-for="(rating, index) in ratingList" :key="index">
      <review-total-right-com v-bind="rating"></review-total-right-com>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";
import ReviewTotalRightCom from "./ReviewTotalRightCom.vue";
// export default {
// props: {
//   rating: Number,
//   percentage: Number,
//   ratingCount: Number,
// },

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setReviewRating", goodsId);
});
let ratingList = computed(() => {
  //console.log("store.getters.getReviewRating", store.getters.getReviewRating);
  return store.getters.getReviewRating;
});

// };
</script>

<style>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
.p-reviw-graph-area-right {
  box-sizing: border-box;
  display: inline-block;
  padding: 2px 2px px 2px 2px;
  vertical-align: top;
  width: 100%;
}
</style>
