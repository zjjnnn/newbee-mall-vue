<template>
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
        <a class="g-link" href="/ec/userguide/memberscardpoint/">
          <span>ポイントについて</span>
          <i class="g-i g-i-info" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  </div>
  <section class="g-block-sm p-spec" id="js-product-spec">
    <h2 class="g-h-2 g-h-i p-hd">
      <span class="material-symbols-outlined"> straighten </span>
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
            <td>{{ sku }}</td>
          </tr>
          <tr>
            <th>カラー</th>
            <td>{{ color }}</td>
          </tr>
          <tr>
            <th>サイズ</th>
            <td>{{ size }}</td>
          </tr>
          <tr>
            <th>素材</th>
            <td>{{ material }}</td>
          </tr>
          <tr>
            <th>重量</th>
            <td>{{ weight }}</td>
          </tr>
          <tr>
            <th>保証年数</th>
            <td>{{ warranty }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="g-foot-v g-foot-sm" style="display: none">
      <p class="g-align-tc">
        <a
          class="g-btn g-btn-w-md displaymorespec"
          href="#p-specMore"
          role="button"
          aria-expanded="true"
          aria-controls="p-specMore"
          data-label="閉じる"
          data-accordion='{"scroll":false}'
        >
          <span>仕様・サイズをもっと見る</span>
          <i class="g-i g-i-arrow-d" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
// import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
// import { useRoute } from "vue-router";

// const route = useRoute();
// const goodsId = route.params.goodsId;

// const store = useStore();
// onMounted(() => {
//   store.dispatch("setInfo", goodsId);
// });
import { defineProps, toRefs } from "vue";
const props = defineProps({
  sku: String,
  color: String,
  size: String,
  material: String,
  weight: String,
  warranty: String,
  price: Number,
});
const { sku, color, size, material, weight, warranty } = toRefs(props);
let point = Math.round(props.price / 1.1 / 100);
</script>

<style scoped>
section {
  width: 500px;
  margin-bottom: 20px;
}
.g-h-i .g-i:first-child,
.g-h-i .g-s:first-child,
.g-lg-h-i .g-i:first-child,
.g-lg-h-i .g-s:first-child {
  margin-right: 0.5em;
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

*,
*::before,
*::after {
  box-sizing: border-box;
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
}
</style>
