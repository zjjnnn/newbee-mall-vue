<template>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations" data-index="0">
      <!-- select size -->
      <dt>
        サイズ：<b id="p-customize0サイズ">{{ state.val }}</b>
      </dt>
      <dd>
        <div class="g-select g-select-sm js-sku-variations-dropdown">
          <i class="g-i g-i-dropdown" aria-hidden="true"></i>
          <select
            name=""
            required=""
            aria-required="true"
            aria-label="サイズの選択"
            data-control="#p-eo-label-"
            @change="changeSize"
          >
            <template v-for="size in sizeList" :key="size">
              <option :data-label="size" data-parent="">
                {{ size }}
              </option>
            </template>
          </select>
        </div>
      </dd>
      <!-- select color -->
      <dt>カラー：<b id="p-customize1カラー">ダークブルー</b></dt>
      <dd>
        <ul class="g-flow-sm">
          <li v-for="(color, index) in colorList1" :key="index">
            <label class="g-checkable g-checkable-circle">
              <input
                type="radio"
                name="1カラー"
                :value="color.color"
                :data-parent="color.colorDataParent"
                :data-index="index"
                :data-label="color.color"
                data-control="#p-customize1カラー"
              />
              <span
                ><span class="g-checkable_checked"></span
                ><img :src="colorSrc" :alt="color"
              /></span>
            </label>
          </li>
        </ul>
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
              {{ price }} 5,990<span>円</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="g-butterfly">
        <p class="p-point">
          <!-- point = Math.round(price/1.1/100) -->
          獲得ポイント<span class="g-digit">54 pt {{ point }}</span> 付与
        </p>
        <p class="g-font-sm p-point-link">
          <a class="g-link" href="/ec/userguide/memberscardpoint/">
            <span>ポイントについて</span>
            <i class="g-i g-i-info" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>

<script setup>
// import InfoSize from "./InfoSize.vue";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfo", goodsId);
});
const state = reactive({
  val: "シングル",
});

const sizeList = computed(() => store.getters.getInfo.sizeList);
const colorList1 = computed(() => store.getters.getSizeType1.color);

//const infoList =
function changeSize(e) {
  state.val = e.target.value;
}
const goodsDescribe = computed(() => store.getters.getInfo.goodsDescribe);
</script>

<style scoped>
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.g-select-sm .g-i {
  right: 7px;
}
b {
  font-weight: bold;
}
.p-customize dt {
  margin-bottom: 7px;
}

.g-select-sm select {
  height: 34px;
  padding-right: 33px;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}

.p-customize dd + dt {
  margin-top: 15px;
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
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
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
input[type="checkbox"] {
  cursor: pointer;
}
.g-checkable input:checked + span .g-checkable_off,
.g-checkable input:not(:checked) + span .g-checkable_on,
.g-checkable input:not(:checked) + span .g-checkable_checked,
.g-checkable
  input[type="checkbox"][aria-invalid="true"]
  + span
  .g-checkable_off,
.g-checkable
  input[type="checkbox"]:not([aria-invalid="true"])
  + span
  .g-checkable_invalid,
.g-lg-checkable input:checked + span .g-checkable_off,
.g-lg-checkable input:not(:checked) + span .g-checkable_on,
.g-lg-checkable input:not(:checked) + span .g-checkable_checked,
.g-lg-checkable
  input[type="checkbox"][aria-invalid="true"]
  + span
  .g-checkable_off,
.g-lg-checkable
  input[type="checkbox"]:not([aria-invalid="true"])
  + span
  .g-checkable_invalid {
  display: none;
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
.g-checkable-circle img,
.g-lg-checkable-circle img {
  overflow: hidden;
  border-radius: 50%;
}
.g-checkable-circle img,
.g-checkable-square img,
.g-lg-checkable-circle img,
.g-lg-checkable-square img {
  max-height: 100%;
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
dd.price-size-up {
  font-size: 2.5rem;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
}
dd.price-size-up > span {
  font-size: 1.2rem;
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
.g-units-xs > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-xs > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 5px;
}
.g-butterfly,
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}

.g-i-info,
.g-i-blank,
.g-i-plus {
  color: #009e96;
}
</style>
