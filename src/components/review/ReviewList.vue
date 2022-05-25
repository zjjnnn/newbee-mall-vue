<template>
  <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p>

  <div v-for="(review, index) in reviews" :key="index">
    <review-com v-bind="review"></review-com>
  </div>
  <template v-if="reviews.length > 3">
    <p class="g-align-tc">
      <a
        class="g-link displaymorereview"
        href="#p-reviewMore"
        role="button"
        aria-expanded="false"
        aria-controls="p-reviewMore"
        data-label="閉じる"
        data-accordion='{"scroll":false}'
      >
        <i class="g-i g-i-arrow-d"></i
        ><span
          >レビューをもっと見る（3/<span id="js-reviews-more">
            {{ titleCount }}</span
          >）</span
        ></a
      >
    </p>
  </template>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewCom from "./ReviewCom.vue";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setReviews", goodsId);
});
let reviews = computed(() => store.getters.getReviews);

let titleCount = computed(() => store.getters.getReviewTotal.titleCount);
</script>

<style>
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_label {
  margin-bottom: 15px;
}

.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
}
.g-label-brand {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 5px 5px;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #fff;
}

.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
