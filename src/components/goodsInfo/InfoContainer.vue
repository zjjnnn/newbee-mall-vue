<template>
  <div class="g-grid_item js-sku-details right-layout" id="p-specGridItem">
    <info-up></info-up>
    <div class="g-block-sm js-sku-cutlock"></div>
    <div class="g-units-xs js-sku-price">
      <div>
        <div class="g-flow-0 g-align-fbl">
          <dl class="p-price">
            <dd class="g-price g-price-lg price-size-up">
              {{ price }}<span>円</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="g-butterfly">
        <p class="p-point">
          <!-- point = Math.round(price/1.1/100) -->
          獲得ポイント<span class="g-digit">{{ point }}pt</span> 付与
        </p>
        <p class="g-font-sm p-point-link">
          <a
            class="g-link"
            href="https://www.nitori-net.jp/ec/userguide/memberscardpoint/"
          >
            <span
              @mouseover="mouseOver"
              :style="state.underline"
              @mouseleave="mouseLeave"
              >ポイントについて</span
            >
            <span class="material-symbols-outlined green-icon"> info </span>
          </a>
        </p>
      </div>
    </div>
    <section class="g-block-sm p-spec" id="js-product-spec">
      <h2 class="g-h-2 g-h-i p-hd">
        <span class="material-symbols-outlined green-icon"> straighten </span>
        <!-- <span class="g-s g-s-size" aria-hidden="true"></span> -->
        <span>仕様・サイズ</span>
      </h2>
      <div id="p-specMore" aria-hidden="false" data-accordion-more="">
        <ul
          class="g-flow-lg g-flow-half g-unit js-sku-manuals p-sku-manuals"
        ></ul>
        <table class="g-table-a js-sku-specs">
          <tbody>
            <tr>
              <th>商品コード</th>
              <td>{{ newInfoList.sku }}</td>
            </tr>
            <tr>
              <th>カラー</th>
              <td>{{ newInfoList.color }}</td>
            </tr>
            <tr>
              <th>サイズ</th>
              <td>{{ newInfoList.sizeDetail }}</td>
            </tr>
            <tr>
              <th>素材</th>
              <td>{{ newInfoList.material }}</td>
            </tr>
            <tr>
              <th>重量</th>
              <td>{{ newInfoList.weight }}</td>
            </tr>
            <tr>
              <th>保証年数</th>
              <td>{{ newInfoList.warranty }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import InfoUp from "./InfoUp.vue";
import { computed, onMounted, reactive } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfos", goodsId);
});
const newInfoList = computed(() => store.getters.getNewInfoList);
const price = computed(() => store.getters.getNewInfoList.price);
//计算 point
let point = computed(() => Math.round(price.value / 1.1 / 100));

const state = reactive({ underline: "" });

function mouseOver() {
  state.underline = " text-decoration: underline";
}

function mouseLeave() {
  state.underline = "";
}
</script>

<style scoped>
.g-link {
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: small;
}
.right-layout {
  width: 350px;
  margin-left: 30px;
}
.p-hd {
  font-size: 2rem;
}
div {
  display: block;
}
.g-table-a,
.g-lg-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}

table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.g-table-a,
.g-sm-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.g-table-a th,
.g-sm-table-a th {
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  background-color: #f7f7f7;
}
.g-table-a th,
.g-table-a td,
.g-sm-table-a th,
.g-sm-table-a td {
  padding: 12px 15px;
  vertical-align: top;
  border-bottom: 1px solid #dbdbdb;
}
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
}
.g-table-a,
.g-sm-table-a {
  width: 100%;
  border-spacing: 0;
  border-top: 1px solid #dbdbdb;
}
.material-symbols-outlined {
  cursor: default;
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
</style>
