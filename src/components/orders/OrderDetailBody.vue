<template>
  <div class="g-layout_body">
    <div class="g-bundle">
      <div
        class="g-pane g-pane-border g-lg-pane-sm p-historyPane"
        v-for="(detail, index) in detailList"
        :key="index"
      >
        <dl
          class="g-sm-formGrid-v g-sm-formGrid-border g-lg-formGrid-h g-lg-formGrid-sm g-lg-formGrid-loose g-align-ft"
        >
          <dt>現在の状況</dt>
          <dd>
            {{ detail.deliveryStatus }}
            <!-- <div class="g-multiSteps p-shippingStatus">
              <ol>
                <li aria-current="false">受注済</li>
                <li aria-current="false">出荷準備中</li>
                <li aria-current="true">出荷・配送済</li>
              </ol>
            </div> -->
          </dd>
          <dt>配送予定日</dt>
          <dd>{{ detail.deliverDate }}</dd>
          <dt>伝票No.</dt>
          <dd>{{ detail.deliverNum }}</dd>
          <dt>受取方法</dt>
          <dd>{{ detail.deliverytype }}</dd>
          <dt>配送商品</dt>
          <dd>
            <ul class="g-itemList g-itemList-dashed">
              <li class="g-itemList_item g-media g-media-lg g-media-narrow">
                <p class="g-media_head">
                  <img
                    class="g-fw g-rc"
                    :src="detail.photo"
                    style="width: 140px"
                  />
                </p>
                <div class="g-media_body g-units-sm">
                  <p class="g-lg-font-lg">
                    {{ detail.title }}
                  </p>
                  <p class="g-font-sm">商品コード {{ detail.sku }}</p>
                  <ul class="g-font-sm" style="font-size: 0.8rem">
                    <li>カラー:{{ detail.color }}/サイズ:{{ detail.size }}</li>
                    <li>組立サービス：なし</li>
                    <li>引取サービス：なし</li>
                    <li>数量：{{ detail.quantity }}</li>
                    <li>保証期間：1年</li>
                  </ul>
                  <p class="g-price">
                    {{ detail.price }}<span> 円（税別）</span>
                  </p>
                  <ul>
                    <li style="font-size: 0.9rem">
                      送り状No. 佐川急便&nbsp;<a
                        class="g-link g-link-t"
                        href="http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=512546776556"
                        ><span>{{ detail.deliverNum }}</span
                        ><i
                          class="g-i g-i-blank"
                          aria-label="新しいウィンドウで開きます"
                        ></i
                      ></a>
                    </li>
                  </ul>
                  <ul class="g-flow-lg g-flow-half"></ul>
                  <ul class="g-flow-sm">
                    <li>
                      <a
                        class="g-btn g-btn-em g-btn-sm"
                        href="/ec/my-account/inputReview?code=7543211&amp;orderCode=EC160925725-20181029&amp;orderEntryNumber=0&amp;ordersDiv=%E3%83%8B%E3%83%88%E3%83%AA%E3%83%8D%E3%83%83%E3%83%88&amp;getDbFlag=jarnalsub_ec"
                        ><span>商品レビューを書く</span></a
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>

    <div class="g-block-xs">
      <dl
        class="g-sm-formGrid-v g-sm-formGrid-border g-lg-formGrid-h g-lg-formGrid-sm g-lg-formGrid-loose g-align-ft"
      >
        <dt>注文日</dt>
        <dd>
          <div class="p-historyIcon">
            <span class="material-symbols-outlined green-icon">
              calendar_month </span
            >&nbsp; {{ order.orderDate }}
          </div>
        </dd>
        <dt>購入店舗</dt>
        <dd>
          <div class="g-lg-butterfly g-align-gt">
            <div class="p-historyIcon">
              <span class="material-symbols-outlined green-icon"> dvr </span
              >&nbsp; {{ order.store }}
            </div>
          </div>
        </dd>
        <dt>お支払い情報</dt>
        <dd>{{ order.payment }}</dd>
        <dt>ポイント利用額</dt>
        <dd>{{ order.usePoint }}pt</dd>
        <dt>注文者情報</dt>
        <dd>
          <ul class="g-units-sm">
            <li>
              {{ order.userName }}<br />〒{{ order.postCode }}<br />{{
                order.address
              }}
            </li>
            <li>{{ order.email }}</li>
            <li>電話番号1：{{ order.phoneNum }}<br /></li>
          </ul>
        </dd>
        <dt>配送先住所</dt>
        <dd>注文者情報と同じ</dd>
        <dt>領収書</dt>
        <dd>
          <div class="g-lg-butterfly g-align-gt">
            <p>なし<br /></p>
          </div>
        </dd>
      </dl>
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
const order = computed(() => store.getters.getOrder);
console.log("order", order);

const detailList = computed(() => store.getters.getDetailList);
</script>

<style scoped>
.p-historyPane {
  padding: 10px 20px;
}
.g-pane-border {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-lg-formGrid-h {
  display: flex;
  flex-wrap: wrap;
}

.g-lg-formGrid-tr {
  display: flex;
  flex-wrap: wrap;
}
.g-align-ft,
.g-lg-align-ft {
  align-items: flex-start !important;
}
.g-lg-formGrid-h > dt {
  padding-right: 25px;
  padding-left: 20px;
}
.g-lg-formGrid-sm > dt {
  width: 23%;
}
.g-lg-formGrid-h > dt {
  font-weight: bold;
  display: flex;
  width: 34%;
  align-items: center;
}
.g-lg-formGrid-loose > * {
  padding-top: 20px;
  padding-bottom: 20px;
}
.g-lg-formGrid-sm > dd {
  width: 35%;
}
.p-shippingStatus {
  width: 80%;
  margin: 0 0 0 -10%;
}
.g-multiSteps {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 40px;
  text-align: center;
}
.g-multiSteps ol {
  max-width: 630px;
}
.g-multiSteps ol {
  display: inline-flex;
  width: 100%;
  max-width: 345px;
}
ol {
  padding: 0;
  list-style: none;
}
.g-multiSteps li {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #009e96;
  flex: 1 1;
  align-items: center;
}
dd {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
.g-multiSteps li::before {
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
}
.g-multiSteps li::before {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-bottom: 5px;
  content: "";
  border: 2px solid #009e96;
  border-radius: 50%;
  background-color: #e9f5f4;
}
.g-multiSteps li::after {
  top: 8px;
}

.g-multiSteps li::after {
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 50%;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #009e96;
}

.g-lg-formGrid-h > *:nth-of-type(n + 2) {
  border-top: 1px dashed #e6e6e6;
}
.g-lg-formGrid-h > dt {
  padding-right: 25px;
  padding-left: 20px;
}

img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-media-lg {
  grid-template-columns: minmax(160px, 13.33333%) 1fr auto;
}
.g-media {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
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
.g-price {
  font-size: 1.2rem;
  font-weight: bold;
}
.g-price span {
  font-size: 0.8rem;
  font-weight: normal;
}
</style>
