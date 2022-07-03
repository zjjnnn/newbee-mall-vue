<template>
  <div class="g-layout_sidebar" style="margin-left: 20px">
    <div data-attr='{"lg":{"data-sticky":true}}' data-sticky="true">
      <section class="g-pane g-pane-gray g-lg-sticky">
        <h2 class="g-h-2">お支払い金額</h2>
        <div class="p-payment">
          <dl class="p-payment_total">
            <dt>注文金額合計</dt>
            <dd class="g-price g-price-lg">
              {{ sum + postage }}<span>円</span>
            </dd>
          </dl>
          <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized">
              <dt>獲得予定ポイント</dt>
              <dd>{{ Math.round(sum / 110) }}<span>pt</span></dd>
              <dt class="p-payment_sum">商品金額合計（税別）</dt>
              <dd>{{ sum }}<span>円</span></dd>
              <dt>送料（税別）</dt>
              <dd>{{ postage }}<span>円</span></dd>
              <dt>消費税</dt>
              <dd>{{ Math.round(sum * 0.1) }}<span>円</span></dd>
              <dt><em class="g-color-em">ポイント利用額</em></dt>
              <dd>
                <em class="g-color-em">-{{ point }}<span>円</span></em>
              </dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const route = useRoute();
const orderId = route.params.orderId;
const store = useStore();
onMounted(() => {
  store.dispatch("setOrder", orderId);
});
// const order = computed(() => store.getters.getOrder);
// console.log("order", order);
const point = computed(() => store.getters.getOrder.usePoint);
const postage = computed(() => store.getters.getOrder.postage);
const sum = computed(() => store.getters.getSum);
</script>

<style scoped>
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
}
.g-pane,
.g-lg-pane {
  padding: 30px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.g-pane,
.g-lg-pane {
  display: block;
}
.g-h-2,
.g-lg-h-2 {
  font-size: 1.4rem;
  margin-bottom: calc(30px - 0.6rem);
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
dl {
  margin: 0;
}
.p-payment_total dt {
  margin-top: 5px;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
.p-payment_total dd {
  line-height: 1;
  white-space: nowrap;
  color: #eb6157;
}
.p-payment dd {
  overflow: hidden;
  text-align: right;
}
.g-price-lg,
.g-lg-price-lg {
  font-size: 1.6rem;
}
</style>
