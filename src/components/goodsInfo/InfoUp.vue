<template>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations">
      <!-- select size -->
      <dt>
        サイズ：<b>{{ size }}</b>
      </dt>
      <dd>
        <select v-model="size" @change="change">
          <option v-for="(v, index) in variants" :key="index">
            {{ v.size }}
          </option>
        </select>
      </dd>
      <!-- select color -->
      <dt>
        カラー：<b>{{ color }}</b>
      </dt>
      <dd>
        <select v-model="color" @change="changeColor">
          <option v-for="c in defaultColor" :key="c">
            {{ c }}
          </option>
        </select>
      </dd>
    </dl>
    <!-- 商品描述 -->
    <div class="js-catch-copy">
      {{ goodsDescribe }}
    </div>

    <div class="g-units-xs js-sku-price">
      <div>
        <div class="g-flow-0 g-align-fbl">
          <dl class="p-price">
            <dd class="g-price g-price-lg price-size-up">
              {{ price }}
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>

<script setup>
// import InfoSize from "./InfoSize.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfos", goodsId);
});
const variants = computed(() => store.getters.getVariants);
//console.log("variantsaaaaaaa", variants);
const defaultColor = computed(() => {
  if (store.getters.getVariants[0]) {
    return store.getters.getVariants[0].color;
  } else {
    return [];
  }
});
let size = computed(() => store.getters.getSize);
let color = computed(() => store.getters.getColor);
// const change = (e) => {
//   size.value = e.target.value;
// };
const changeColor = (e) => {
  store.commit("setNewList", { size: size.value, color: e.target.value });
};
const change = (e) => {
  store.commit("setNewList", { size: e.target.value, color });
};
const goodsDescribe = computed(() => store.getters.getInfos.goodsDescribe);
const price = computed(() => store.getters.getNewInfoList.price);
</script>

<style scoped>
/* *,
*::before,
*::after {
  box-sizing: border-box;
}
dl {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
b {
  font-weight: bold;
}
body {
  font-size: 1.4rem;
  line-height: 1.42857;
}
dd {
  display: block;
  margin-inline-start: 40px;
  margin-left: 0;
  margin-bottom: 10px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select-sm .g-i {
  right: 7px;
}
.g-select option {
  color: #333;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 40px;
  height: 40px;
}
.g-checkable-circle,
.g-lg-checkable-circle {
  border-radius: 50%;
}
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}

.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable input[type="radio"],
.g-checkable input[type="checkbox"],
.g-lg-checkable input[type="radio"],
.g-lg-checkable input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-color: transparent;
  border-radius: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.g-checkable-circle .g-checkable_checked,
.g-lg-checkable-circle .g-checkable_checked {
  border-radius: 50%;
}
.g-checkable .g-checkable_checked,
.g-lg-checkable .g-checkable_checked {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 0 2px #009e96 inset;
}
.g-checkable-img,
.g-checkable-circle,
.g-checkable-square,
.g-lg-checkable-img,
.g-lg-checkable-circle,
.g-lg-checkable-square {
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dbdbdb inset;
}
.g-checkable-circle img,
.g-sm-checkable-circle img {
  overflow: hidden;
  border-radius: 50%;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 20px;
}
.g-flow-0 {
  margin-bottom: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
}
.p-price {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.g-price-lg,
.g-lg-price-lg {
  font-size: 2.6rem;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
.g-price span,
.g-lg-price span {
  font-size: 1.1rem;
  font-weight: normal;
  margin-right: 0.2em;
  margin-left: 0.2em;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
dd.price-size-up > span {
  font-size: 1.6rem;
}
.p-point .g-digit {
  font-size: larger;
  margin: 0 5px 0 1em;
  color: #eb6157;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.g-butterfly,
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.js-sku-price .p-point-link,
.bundle-js-price .p-point-link {
  width: auto;
}
.js-sku-price .p-point-link,
.bundle-js-price .p-point-link {
  text-align: right;
  flex-grow: 1;
}
.g-font-sm,
.g-lg-font-sm {
  font-size: 1.2rem !important;
  line-height: 1.5 !important;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
}
.js-sku-price .p-point-link,
.bundle-js-price .p-point-link {
  text-align: right;
  flex-grow: 1;
} */
</style>
