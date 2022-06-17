<template>
  <div class="g-layout_sidebar">
    <div data-attr='{"lg":{"data-sticky":true}}' data-sticky="true">
      <section class="g-pane g-pane-gray g-units-lg g-lg-sticky">
        <div class="p-payment">
          <dl class="p-payment_total">
            <dt class="p-paymentAmountLabel">お支払金額</dt>
            <dd class="g-price g-price-lg">
              {{ paymentAmount }}<span>円</span>
            </dd>
          </dl>
          <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized p-shorten-dl" id="p-payment_itemized">
              <a
                href="#p-aboutAcquiredPointModal"
                id="aboutAcquiredPoint"
                aria-expanded="false"
                aria-controls="p-aboutAcquiredPointModal"
                ><dt>
                  獲得予定ポイント<span style="margin-right: 10px"></span
                  ><span class="material-symbols-outlined green-icon">
                    info
                  </span>
                </dt></a
              >
              <dd class="p-pointMerginTop">{{ pointSum }}<span>pt</span></dd>

              <dt class="p-payment_sum p-paymentSumShorten">商品金額合計</dt>
              <dd>{{ paymentSum }}<span>円</span></dd>
              <dt>送料</dt>
              <dd>{{ postageSum }}<span>円</span></dd>
            </dl>
            <ul class="g-list g-list-note">
              <li>
                送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)
              </li>
            </ul>
          </div>
        </div>
        <form
          id="checkoutFlowModeForm"
          action="/ec/cart/checkout"
          method="POST"
        >
          <ul class="g-list">
            <li>
              <label class="g-checkable">
                <input
                  type="radio"
                  name="checkoutFlowMode"
                  value="DELIVERY"
                /><span>
                  <span class="g-checkable_label" style="cursor: pointer"
                    >ご指定の場所に配送する</span
                  ></span
                >
              </label>
            </li>
            <li class="g-mt-10" @click="isShow = true">
              <label class="g-checkable">
                <input
                  type="radio"
                  name="checkoutFlowMode"
                  value="PICKUP"
                /><span>
                  <span class="g-align-vm g-mr-10" style="cursor: pointer">
                    店舗/配送センターで受け取る</span
                  ><br /><span class="g-label-price">送料無料</span></span
                >
              </label>
            </li>
            <!-- modal -->
            <GDialog v-model="isShow">
              <div class="modal">
                <div class="g-modal_el">
                  <header class="g-modal_head">
                    <p class="g-modal_h" id="p-alertModal_h">ご注意ください</p>
                    <button
                      @click="isShow = false"
                      class="g-modal_close modal-close"
                      type="button"
                      aria-label="閉じる"
                      aria-expanded="true"
                      aria-controls="p-alertModal"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="cursor: pointer"
                      >
                        close
                      </span>
                    </button>
                  </header>
                  <div class="g-modal_body">
                    <ul class="g-list g-list-disc">
                      <li>
                        一部商品のみ配送でお受け取りいただく場合、送料が発生する可能性がございます。
                      </li>
                      <li>店舗ではお受け取りいただけない商品もございます。</li>
                      <li>
                        ニトリネットに登録済みのお客様は、店舗で受け取れない商品について、別途購入手続きをお願いいたします。
                      </li>
                      <li>
                        ニトリネットに未登録のお客様は、店舗で受け取れない商品がカートから削除されます。
                        お手数ですが改めてカートへ商品を追加のうえ、購入手続きをお願いいたします。
                      </li>
                    </ul>
                    <div class="g-sm-foot-v g-lg-foot-h g-foot-lg">
                      <p>
                        <button
                          class="g-btn g-btn-cv g-btn-w-md modal-button"
                          onclick="javascript:checkoutFlowModeForm.submit();return false;"
                        >
                          <span>レジへ進む</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GDialog>
            <!-- modal end -->
          </ul>
        </form>
        <div class="g-foot-v">
          <p>
            <button
              class="g-btn g-btn-cv g-fw"
              onclick="javascript:checkoutFlowModeForm.submit();return false;"
            >
              <span>レジへ進む</span>
            </button>
          </p>
          <p>
            <a class="g-btn g-fw" href="/"
              ><span>ショッピングを続ける</span
              ><span class="material-symbols-outlined green-icon">
                chevron_right
              </span></a
            >
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useStore } from "../../store/index";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setCartItem", userId);
});

const isShow = ref(false);

//paymentAmount お支払金額 paymentSum+postageSum
const paymentAmount = computed(() => paymentSum.value + postageSum.value);
//pointSum  獲得予定ポイント paymentSum/1.1/100
const pointSum = computed(() => Math.round(paymentSum.value / 110));
//paymentSum 商品金額合計 sum1+sum2+...
const paymentSum = computed(() => store.getters.getPaymentSum);
//postageSum 送料 >=11000 送料無料、else 550円
const postageSum = computed(() => {
  if (paymentSum.value > 11000) {
    return 0;
  } else {
    return 550;
  }
});
</script>

<style scoped>
.g-layout_sidebar {
  width: 320px;
}
.g-layout-cart {
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 400px;
}
.g-layout-cart .g-layout_sidebar,
.g-layout-purchase .g-layout_sidebar {
  margin-left: 40px;
}
.g-layout_sidebar [data-sticky="true"] {
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
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
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment dt {
  float: left;
  clear: left;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
.p-payment dd {
  overflow: hidden;
  text-align: right;
}
.g-price-lg,
.g-lg-price-lg {
  font-size: 1.3rem;
}
.g-price-lg span {
  font-size: 0.8rem;
}
a {
  text-decoration: none;
  color: #333;
}
.g-list-note {
  font-size: 0.7rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}
.g-list-note > li::before {
  content: "\203B";
}
ul,
ol {
  padding: 0;
  list-style: none;
}
input {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-foot-v {
  display: flex;
  flex-direction: column;
}
.g-btn {
  font-size: 1rem;
  line-height: 1;
}
.g-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
  color: #fff;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.g-modal_head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: sticky;
  z-index: 12;
  top: 0;
  display: flex;
  background-color: #009e96;
  justify-content: space-between;
}

.g-modal_h {
  font-size: 1.2rem;
  padding: 5px;
  color: #fff;
}
.g-modal_close {
  font-size: 1rem;
  padding: 20px;
}

.g-modal_body {
  padding: 30px 30px 40px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #fff;
}

.modal-close {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10;
  color: #ffffff;
}
.modal-button {
  background-color: #eb6157;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 200px;
}
</style>
