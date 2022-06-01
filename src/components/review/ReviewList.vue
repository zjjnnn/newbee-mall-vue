<template>
  <p class="g-label-brand g-reviewList_label">ピックアップレビュー</p>
  <template v-if="titleCount > 3">
    <div v-if="!state.showTotal">
      <div v-for="(review, index) in show" :key="index">
        <review-com v-bind="review"></review-com>
      </div>
      <div class="g-link">
        <span id="click" @click="state.showTotal = !state.showTotal">
          <span class="material-symbols-outlined">
            {{ icon }}
          </span>
          {{ text }}
        </span>
      </div>
    </div>
    <div v-if="state.showTotal">
      <div v-for="(review, index) in reviews" :key="index">
        <review-com v-bind="review"></review-com>
      </div>
      <div id="click-div">
        <span id="click" @click="state.showTotal = !state.showTotal">
          <span class="material-symbols-outlined">
            {{ icon }}
          </span>
          {{ text }}
        </span>
      </div>
    </div>
  </template>
  <template v-else>
    <div v-for="(review, index) in reviews" :key="index">
      <review-com v-bind="review"></review-com>
    </div>
  </template>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ReviewCom from "./ReviewCom.vue";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setReviews", goodsId);
});
//初始状态：showTotal -> false -> 显示3条数据 -> レビューをもっと見る
let show = computed(() => reviews.value.slice(0, 3));
//按下按钮：showTotal -> true -> 显示所有数据 -> 閉じる
let reviews = computed(() => store.getters.getReviews);
//let title = computed(() => store.getters.getReviews.title);

//let titleCount = computed(() => store.getters.getReviewTotal.titleCount);
let titleCount = computed(() => reviews.value.length);

const state = reactive({
  showTotal: false, // 是否展示所有评价
});

//切换文字text
const text = computed(() => {
  if (!state.showTotal) {
    return "レビューをもっと見る（3/" + titleCount.value + "）";
  } else {
    return "閉じる";
  }
});
const icon = computed(() => {
  if (!state.showTotal) {
    return "expand_more";
  } else {
    return "expand_less";
  }
});
</script>

<style>
.g-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 0.35em;
}

#click {
  cursor: pointer;
  text-align: center;
}

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
