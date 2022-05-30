<template>
  <p class="zv-heading">カスタマーQ&amp;A</p>
  <div id="ZVCQA">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>
        <!-- click "<" -> go back to a previous page -->
        <span
          class="material-symbols-outlined"
          @click="previousPage"
          v-if="state.showLeft"
        >
          chevron_left
        </span>
        <span>ページ{{ state.pageNo }}/{{ state.totalPage }}</span>
        <!-- click ">" -> go back to a next page -->
        <span
          class="material-symbols-outlined"
          @click="nextPage"
          v-if="state.showRight"
        >
          chevron_right
        </span>
      </div>
      <div class="zv-select-wrap">
        <select id="zv-cqa-select-sort" class="zv-select" name="sort">
          <option value="total_yes">トップ評価</option>
          <option value="created_at" selected="">新しい順</option>
        </select>
      </div>
    </div>
    <!-- QA内容 -->
    <div v-for="(qa, index) in qaList" :key="index">
      <qa-com v-bind="qa"></qa-com>
    </div>
    <!-- 全x件 ページa/b -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>
        <span>ページ{{ state.pageNo }}/{{ state.totalPage }}</span>
      </div>
    </div>
    <question-post></question-post>
  </div>
</template>

<script setup>
import QaCom from "./QaCom.vue";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQA", goodsId);
});

let qaList = computed(() => store.getters.getGoodsQA);
//let qaCount = computed(() => store.getters.getGoodsQA.getTotalCount);

onMounted(() => {
  store.dispatch("setGoodsQA", goodsId);
});

let totalCount = computed(() => store.getters.getGoodsQA.length);
//console.log("TotalCount", TotalCount);

const state = reactive({
  pageNo: 1, // 初始页数为1
  totalPage: 1,
  start: 0,
  finish: 0,
  number: 3, //一页3个qa
  sort: "新しい順",
  showLeft: false, // 当pageNo=1时，隐藏跳转上一页的 < 符号
  showRight: true, //当pageNo=totalPage时，隐藏跳转下一页的 > 符号
});

//计算页数totalPage
if (totalCount.value % state.number != 0) {
  state.totalPage = Math.floor(totalCount.value / state.number) + 1; //Math.floor(x) 向下舍入，如Math.floor(0.60)结果均为0；
} else if (totalCount.value % state.number === 0) {
  state.totalPage = totalCount.value / state.number;
}
//计算每一页的开始下标和结束下标  slice(start,finish)
state.start = (state.pageNo - 1) * state.number;
state.finish = state.start + state.number - 1;

const nextPage = () => {
  state.pageNo++;
};

const previousPage = () => {
  state.pageNo--;
};

// if (state.pageNo === 1) {
//   store.showLeft = false;
// } else {
//   store.showLeft = true;
// }

// if (state.pageNo === state.totalPage) {
//   store.showLeft = false;
// }
</script>

<style>
p.zv-heading,
pan.zv-cqa-q-reviewer,
span.zv-cqa-a-reviewer,
div.zv-popupModal1,
span.zv-separator {
  display: none;
}

p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}

#ZVCQA p.zv-heading {
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
