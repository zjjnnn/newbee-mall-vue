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
            <div class="g-multiSteps p-shippingStatus">
              <ol>
                <li aria-current="false">受注済</li>
                <li aria-current="false">出荷準備中</li>
                <li aria-current="true">出荷・配送済</li>
              </ol>
            </div>
          </dd>
          <dt>配送予定日</dt>
          <dd>{{ detail.deliverDate }}</dd>
          <dt>伝票No.</dt>
          <dd>160989315</dd>
          <dt>受取方法</dt>
          <dd>{{ detail.deliverytype }}</dd>
          <dt>配送商品</dt>
          <dd>
            <ul class="g-itemList g-itemList-dashed">
              <li class="g-itemList_item g-media g-media-lg g-media-narrow">
                <p class="g-media_head">
                  <img class="g-fw g-rc" :src="detail.photo" />
                </p>
                <div class="g-media_body g-units-sm">
                  <p class="g-lg-font-lg">
                    {{ detail.title }}
                  </p>
                  <p class="g-font-sm">商品コード 7543211</p>
                  <ul class="g-font-sm">
                    <li>カラー:アイボリー/サイズ:シングル</li>
                    <li>組立サービス：なし</li>
                    <li>引取サービス：なし</li>
                    <li>数量：1</li>
                    <li>保証期間：1年</li>
                  </ul>
                  <p class="g-price">4,621<span> 円（税別）</span></p>
                  <ul>
                    <li>
                      送り状No. 佐川急便&nbsp;<a
                        class="g-link g-link-t"
                        href="http://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=512546776556"
                        ><span>512546776556</span
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
            <i class="g-s g-s-calendar" aria-hidden="true"></i> 2018/10/29
          </div>
        </dd>
        <dt>購入店舗</dt>
        <dd>
          <div class="g-lg-butterfly g-align-gt">
            <div class="p-historyIcon">
              <i class="g-s g-s-net" aria-hidden="true"></i>ニトリネット
            </div>
          </div>
        </dd>
        <dt>お支払い情報</dt>
        <dd>クレジットカード &nbsp;一括払い</dd>
        <dt>ポイント利用額</dt>
        <dd>238pt</dd>
        <dt>注文者情報</dt>
        <dd>
          <ul class="g-units-sm">
            <li>
              {{ order.userName }}<br />〒{{ order.postCode }}<br />{{
                order.address
              }}
            </li>
            <li>ouuseix@gmail.com</li>
            <li>
              電話番号1：070-3133-2827<br />
              電話番号2：070-3133-2827
            </li>
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

<style scoped></style>
