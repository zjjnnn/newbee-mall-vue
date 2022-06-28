<template>
  <div class="g-layout_head">
    <h1>注文内容詳細</h1>
    <div class="g-lead"></div>
    <div class="g-layout_body" aria-hidden="true" id="cancelErrorArea">
      <div class="g-sm-full g-pane g-align-tc">
        <p class="g-color-alert g-font-lg g-weight-b" id="cancelError">
          <br class="g-only-sm" />
        </p>
      </div>
    </div>
    <p class="g-lead">
      店舗でのご注文の場合は、ご注文当初の明細が表示されます。
    </p>
    <div class="g-sm-full p-orderTitle g-unit-lg">
      <div class="g-lg-butterfly">
        <p class="g-sm-font-lg g-lg-font-xl g-weight-b">
          注文番号：{{ orderId }}
        </p>
        <ul class="g-flow-lg g-align-gm g-sm-mt-10">
          <li>
            <a
              class="g-btn g-btn-sm g-btn-em"
              href="/ec/input-inquiry?orderNumber=EC160114360-20181016&amp;productCode=5608689%2C8987741%2C8542056%2C8070752%2C8890243%2C8987447%2C8500522"
              ><span style="padding: 0px 15px">お問合せ</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div style="display: flex">
    <order-detail-body></order-detail-body>
    <order-detail-sidebar></order-detail-sidebar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import OrderDetailBody from "./OrderDetailBody.vue";
import OrderDetailSidebar from "./OrderDetailSidebar.vue";

const route = useRoute();
const orderId = route.params.orderId;
</script>

<style scoped>
.p-orderTitle {
  padding: 10px 20px;
}
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.p-orderTitle {
  padding: 15px;
  background-color: #e9f5f4;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  /* padding: 5px 10px; */
  transform: none;
}
.g-btn-sm,
.g-lg-btn-sm {
  font-size: 1rem;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}
a {
  text-decoration: none;
}
</style>
