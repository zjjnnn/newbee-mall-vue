<template>
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
            <td>{{ goodsId }}</td>
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
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfomations", goodsId);
});

const color = computed(() => store.getters.getInfomations.color);
const size = computed(() => store.getters.getInfomations.size);
const material = computed(() => store.getters.getInfomations.material);
const weight = computed(() => store.getters.getInfomations.weight);
const warranty = computed(() => store.getters.getInfomations.warranty);
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
</style>
