<template>
  <p class="zv-heading">カスタマーQ&amp;A</p>
  <div id="ZVCQA">
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件&nbsp;</span>
        <!-- click "<" -> go back to a previous page -->
        <span
          class="material-symbols-outlined"
          @click="previousPage"
          v-if="pageNo != 1"
          >chevron_left
        </span>
        <span>ページ{{ pageNo }}/{{ totalPage }}</span>
        <!-- click ">" -> go back to a next page -->
        <span
          class="material-symbols-outlined"
          @click="nextPage"
          v-if="pageNo != totalPage"
          >chevron_right
        </span>
      </div>
      <div class="zv-select-wrap">
        <select
          id="zv-cqa-select-sort"
          class="zv-select"
          name="sort"
          @change="sortList"
        >
          <option value="created_at">新しい順</option>
          <option value="total_yes">トップ評価</option>
        </select>
      </div>
    </div>
    <!-- QA内容 -->
    <div v-for="(qa, index) in qaPerPage" :key="index">
      <qa-com v-bind="qa"></qa-com>
    </div>
    <!-- 全x件 ページa/b -->
    <div class="zv-cqa-step">
      <div class="zv-cqa-step-link">
        <span>全{{ totalCount }}件</span>
        <span>ページ{{ pageNo }}/{{ totalPage }}</span>
      </div>
    </div>
    <question-post></question-post>
  </div>
</template>

<script setup lang="ts">
import QaCom from "./QaCom.vue";
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setGoodsQA", goodsId);
});

//计算每一页的开始下标和结束下标  slice(start,finish)
let start = computed(() => (pageNo.value - 1) * 3);
let end = computed(() => start.value + 3);

let qaList = computed(() => store.getters.getGoodsQA.qaList);
let qaPerPage = computed(() => qaList.value.slice(start.value, end.value));
// console.log("qaPerPage", qaPerPage);

//全xx件
const totalCount = computed(() => store.getters.getGoodsQA.totalCount);

//pageNo
let pageNo = computed(() => store.getters.getPageNo);
console.log("TotalCount", totalCount);
function nextPage() {
  store.commit("nextPage");
}
function previousPage() {
  store.commit("previousPage");
}

//计算页数totalPage，方法1比较复杂，用下面方法2
// const totalPage = computed(() => {
//   if (totalCount.value % 3 != 0) {
//     return Math.floor(totalCount.value / 3) + 1; //Math.floor(x) 向下舍入，如Math.floor(0.60)结果为0；
//   } else {
//     return totalCount.value / 3;
//   }
// });
//计算页数totalPage，方法2
const totalPage = computed(() => {
  return Math.ceil(totalCount.value / 3); //Math.ceil(x) 向上舍入，如Math.floor(0.60)结果为1；
});
//@change事件，选择sort方式  e=event
const sortList = (e: Event): void => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("sortList", e.target.value);
  }
};
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

.material-symbols-outlined {
  cursor: pointer;
  color: #009e96;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}

#ZVCQA .zv-select-wrap::before {
  position: absolute;
  top: 0.9em;
  right: 0.9em;
  width: 0;
  height: 0;
  padding: 0;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #bdc3c7;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

#ZVCQA .zv-select-wrap {
  overflow: hidden;
  position: relative;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  background: #ffffff;
  width: auto;
  display: inline-block;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 20%);
  box-shadow: inner 0 1px 2px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
}

#ZVCQA .zv-select {
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 4px 38px 4px 8px;
  font-size: 13px;
}
</style>
