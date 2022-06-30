<template>
  <div class="g-layout_sidebar">
    <div class="g-sm-full p-sm-full-cls">
      <div class="g-lg-sticky">
        <div class="g-pane g-pane-gray">
          <div class="g-position-r g-units-lg js-sku-sidebar">
            <dl class="p-order">
              <dt>納品方法</dt>
              <dd><span>玄関先迄納品（店舗受取可能商品）</span></dd>
              <dt>配送目安</dt>
              <dd>2～6日で出荷</dd>
              <dt>返品・交換</dt>
              <dd>
                14日間返品可能
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/cancel/">
                    <span
                      >返品・交換について<span
                        class="material-symbols-outlined green-icon"
                      >
                        info
                      </span></span
                    ><i class="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
              <dt>送料</dt>
              <dd>
                <span class="g-label-price">有料</span>
                <p class="p-order_help">
                  <a class="g-link" href="/ec/userguide/delivery/"
                    ><span
                      >送料について<span
                        class="material-symbols-outlined green-icon"
                      >
                        info
                      </span></span
                    ><i class="g-i g-i-info" aria-hidden="true"></i
                  ></a>
                </p>
              </dd>
            </dl>

            <p>
              <img
                src="http://localhost:8080/assets/images/free_shipping2.webp"
                alt=""
              />
            </p>
            <dl class="p-pcs">
              <dt>
                <label for="p-pieces">数量</label>
              </dt>
              <dd>
                <input
                  value="1"
                  @input="updateQuantity"
                  class="g-input g-input-sm addToCartQty"
                  id="p-pieces"
                  type="text"
                  name="quantity"
                  maxlength="3"
                  oninput="value=value.replace(/\D/g, '')"
                />
              </dd>
            </dl>

            <div>
              <div class="g-flow-0 g-align-fbl">
                <dl class="p-price p-price-area">
                  <dd class="g-price g-price-lg g-price-ra price-size-up">
                    {{ price }}<span>円</span>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="g-foot-v">
              <div class="cartBtnArea disp">
                <!--inset sussessful modal -->
                <GDialog v-model="isShow">
                  <div class="modal">
                    <button
                      @click="isShow = false"
                      type="button"
                      aria-label="閉じる"
                      class="modal-close"
                    >
                      <span
                        class="material-symbols-outlined"
                        style="cursor: pointer"
                      >
                        close
                      </span>
                    </button>

                    <p>カートに追加しました</p>
                    <button @click="isShow = false" class="modal-button">
                      <router-link to="/cart">カートを見る</router-link>
                    </button>
                  </div>
                </GDialog>

                <!-- error modal -->
                <div
                  v-if="showError"
                  class="p-itemAdded g-item-add-error"
                  style="
                    bottom: 70.2083px;
                    animation: 1.8s ease 0s 1 normal both running p-itemAddedIn;
                  "
                >
                  <button
                    @click="showError = false"
                    class="g-modal_close p-modal_button"
                    type="button"
                    aria-label="閉じる"
                  >
                    <span
                      class="material-symbols-outlined"
                      style="cursor: pointer"
                    >
                      close
                    </span>
                  </button>
                  <div>数量は1以上、999以下で設定してください。</div>
                </div>
                <button
                  @click="addItem(sku)"
                  class="g-btn g-btn-cv g-btn-c g-fw addToCartBtn"
                  id="p-addItem"
                  type="button"
                  :sku="sku"
                >
                  <span class="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                  <span>カートに入れる</span>
                </button>
              </div>
            </div>
            <ul class="g-grid-2 g-grid-xs p-misc" style="margin-top: 10px">
              <li class="g-grid_item p-misc_item">
                <a style="cursor: pointer">
                  <div class="p-misc_i g-hover_img">
                    <span
                      class="material-symbols-outlined g-s g-s-stock-g"
                      style="color: #333"
                    >
                      inventory_2
                    </span>
                  </div>
                  <span class="p-misc_label" style="color: #333"
                    >店舗在庫を確認</span
                  >
                </a>
              </li>
              <li class="g-grid_item p-misc_item" style="margin-left: 50px">
                <a
                  :class="skuExisted ? 'canNotClick' : 'canClick'"
                  @click="intoWish"
                >
                  <div class="p-misc_i g-hover_img">
                    <span class="material-symbols-outlined g-s g-s-favorite-g">
                      favorite
                    </span>
                  </div>
                  <span class="p-misc_label">お気に入り</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 3个超链接 -->
        <!-- <ul class="p-sns">
          <li>
            <div
              class="fb-like fb_iframe_widget"
              data-href="https://www.nitori-net.jp/ec/product/7565685/"
              data-layout="button_count"
              data-action="like"
              data-size="small"
              data-show-faces="false"
              data-share="false"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=like&amp;app_id=&amp;container_width=0&amp;href=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F&amp;layout=button_count&amp;locale=ja_JP&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small"
            >
              <span style="vertical-align: bottom; width: 130px; height: 28px"
                ><iframe
                  name="f2b025c1bb9f4dc"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameborder="0"
                  allowtransparency="true"
                  allowfullscreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/v3.2/plugins/like.php?action=like&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df138226dbb7408c%26domain%3Dwww.nitori-net.jp%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.nitori-net.jp%252Ffb050a79078dd%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F&amp;layout=button_count&amp;locale=ja_JP&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small"
                  style="
                    border: none;
                    visibility: visible;
                    width: 130px;
                    height: 28px;
                  "
                  class=""
                ></iframe
              ></span>
            </div>
          </li>

          <li>
            <iframe
              id="twitter-widget-0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
              class="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
              style="
                position: static;
                visibility: visible;
                width: 89px;
                height: 20px;
              "
              title="Twitter Tweet Button"
              src="https://platform.twitter.com/widgets/tweet_button.d7fc2fc075c61f6fa34d79a0cbbf1e34.ja.html#dnt=false&amp;id=twitter-widget-0&amp;lang=ja&amp;original_referer=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F&amp;size=m&amp;text=%E4%B8%A1%E9%9D%A2%E4%BD%BF%E3%81%88%E3%82%8B%E6%95%B7%E3%81%8D%E3%83%91%E3%83%83%E3%83%89%E3%80%80%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB(N%E3%82%AF%E3%83%BC%E3%83%ABWSP%20n-s%20GY%20S)%E9%80%9A%E8%B2%A9%20%7C%20%E3%83%8B%E3%83%88%E3%83%AA%E3%83%8D%E3%83%83%E3%83%88%E3%80%90%E5%85%AC%E5%BC%8F%E3%80%91%E3%80%80%E5%AE%B6%E5%85%B7%E3%83%BB%E3%82%A4%E3%83%B3%E3%83%86%E3%83%AA%E3%82%A2%E9%80%9A%E8%B2%A9&amp;time=1655168606580&amp;type=share&amp;url=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F"
              data-url="https://www.nitori-net.jp/ec/product/7565685/"
            ></iframe>
          </li>

          <li>
            <iframe
              data-lang="ja"
              data-type="share-a"
              data-ver="3"
              data-url="https://www.nitori-net.jp/ec/product/7565685/"
              data-color="default"
              data-size="small"
              data-count="false"
              data-line-it-id="0"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              style="
                width: 87px;
                height: 20px;
                visibility: visible;
                position: static !important;
                opacity: 1 !important;
              "
              class="line-it-button"
              src="https://social-plugins.line.me/widget/share?url=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F&amp;buttonType=share-a&amp;size=small&amp;count=false&amp;color=default&amp;lang=ja&amp;type=share&amp;ver=3&amp;id=0&amp;origin=https%3A%2F%2Fwww.nitori-net.jp%2Fec%2Fproduct%2F7565685%2F&amp;title=%E4%B8%A1%E9%9D%A2%E4%BD%BF%E3%81%88%E3%82%8B%E6%95%B7%E3%81%8D%E3%83%91%E3%83%83%E3%83%89%E3%80%80%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB(N%E3%82%AF%E3%83%BC%E3%83%ABWSP%20n-s%20GY%20S)%E9%80%9A%E8%B2%A9%20%7C%20%E3%83%8B%E3%83%88%E3%83%AA%E3%83%8D%E3%83%83%E3%83%88%E3%80%90%E5%85%AC%E5%BC%8F%E3%80%91%E3%80%80%E5%AE%B6%E5%85%B7%E3%83%BB%E3%82%A4%E3%83%B3%E3%83%86%E3%83%AA%E3%82%A2%E9%80%9A%E8%B2%A9&amp;env=REAL"
              title="Share this page on LINE."
            ></iframe>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();
const goodsId = route.params.goodsId;
const userId = "user01";
console.log("goodsId", goodsId);
onMounted(async () => {
  store.dispatch("setInfos", goodsId);
  await store.dispatch("setWishGoodsList", userId);
  //判断当前sku的商品是否在【お気に入り】列表（wishgoodsList）中
  if (allGoodsList.value.filter((a) => a.sku === sku.value).length > 0) {
    skuExisted.value = true;
  }
});
const quantity = computed(() => store.getters.getQuantity);
const price = computed(() => store.getters.getNewInfoList.price);
const sku = computed(() => store.getters.getNewInfoList.sku);
const newInfoList = computed(() => store.getters.getNewInfoList);

const isShow = ref(false);
const showError = ref(false);

const updateQuantity = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateQuantity", e.target.value);
  }
};

//判断当前sku的商品是否在【お気に入り】列表（wishgoodsList）中，若存在（true），则不能再点击
const allGoodsList = computed(() => store.getters.getAllGoodsList);
let skuExisted = ref(false);
// if (allGoodsList.value.filter((a) => a.sku === sku.value).length > 0) {
//   skuExisted.value = true;
// }

// add into cart 把当前sku的商品加到购物车
const addItem = (sku: string) => {
  if (quantity.value < 1 || quantity.value > 999) {
    showError.value = true;
  } else {
    store.dispatch("addCart", sku);
    isShow.value = true;
  }
};
// 把当前sku的商品加到【お気に入り】
const intoWish = () => {
  store.dispatch("intoWish", newInfoList.value);
  skuExisted.value = true;
};
</script>

<style scoped>
.canClick {
  cursor: pointer;
  color: #333;
}

.canNotClick {
  pointer-events: none;
  color: #009e96;
}
.modal {
  width: 300px;
  height: 500px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}
.modal-button {
  background-color: #eb6157;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 200px;
}
a {
  color: #fff;
}
.modal-close {
  border: none;
  background: none;
  position: absolute;
  top: 223px;
  right: 39px;
  cursor: pointer;
  padding: 0;
  color: #808080;
}
.g-layout-detail {
  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  grid-row: 3/5;
  -ms-grid-column: 2;
  grid-column: 2;
  margin-left: 40px;
}

.g-layout_sidebar {
  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  grid-row: 3/5;
  -ms-grid-column: 2;
  grid-column: 2;
  margin-left: 40px;
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
}
.g-pane {
  padding: 30px;
}
.g-pane-gray {
  background-color: #f7f7f7;
  display: block;
}

.g-position-r,
.g-lg-position-r {
  position: relative;
}

.p-order {
  border-bottom: 1px solid #dbdbdb;
}

.p-order dt {
  float: left;
  clear: left;
  padding: 10px 0;
}

.p-order dd {
  font-weight: bold;
  overflow: hidden;
  text-align: right;
  padding: 10px 0;
}
.p-order_help {
  margin-top: 2px;
  font-size: 1rem;
  line-height: 1.2;
}
.p-order_help a {
  color: #808080;
}
.g-link {
  display: inline-flex;
  align-items: center;
}
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
a {
  text-decoration: none;
}
.g-link .g-i-info,
.g-lg-link .g-i-info {
  font-size: 1em;
  margin-top: 0.15em;
}
.p-pcs {
  display: flex;
  align-items: center;
}
.g-flow-0 {
  margin-bottom: 0;
  margin-left: 0;
  display: flex;
  flex-wrap: wrap;
}
.g-align-fbl {
  align-items: baseline !important;
}
.p-price-area {
  display: inline;
  flex-wrap: wrap;
  align-items: baseline;
}
.g-foot-v {
  display: flex;
  flex-direction: column;
}
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.cartBtnArea {
  position: relative;
}
.g-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
  color: #fff;
}

.g-btn {
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  appearance: none;
}
.g-btn-c > .g-i + span {
  padding: 5px 10px;
  transform: none;
}

.g-btn > span,
.g-lg-btn > span {
  min-height: 48px;
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.p-misc {
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
}
.p-sns {
  line-height: 1;
  display: flex;
  height: 20px;
  margin-top: 20px;
  justify-content: center;
}
.p-misc a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  align-items: center;
  font-size: 0.8rem;
}
.p-misc_i {
  font-size: 2.4rem;
  display: flex;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
  border: 2px solid #dbdbdb;
  border-radius: 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
}
hover .g-hover_img,
.g-lg-hover img,
.g-lg-hover .g-hover_img {
  transition: opacity 0.2s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.g-grid-2 {
  display: flex;
  flex-wrap: wrap;
}
.cartBtnArea .p-itemAdded {
  margin-top: 0;
  bottom: calc(100% + 20px);
}

.p-itemAdded {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  position: absolute;
  right: 0;
  left: 0;
  width: 75%;
  margin: -85px auto 0;
  padding: 10px 10px;
  text-align: center;
  border: 2px solid #eb6157;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 0 0 rgb(0 0 0 / 15%);
}
.g-modal_close {
  border: none;
  background: none;
  position: absolute;
  top: 3px;
  right: 5px;
  cursor: pointer;
  padding: 0;
  color: #808080;
}
.p-itemAdded.g-item-add-error > div {
  text-align: left;
}
.p-itemAdded > div {
  margin-top: 5px;
  margin-right: 16px;
}
.p-itemAdded::after {
  position: absolute;
  right: 0;
  bottom: -11px;
  left: 0;
  width: 20px;
  height: 20px;
  margin: auto;
  content: "";
  transform: rotate(45deg);
  border: 2px solid #eb6157;
  border-top-width: 0;
  border-left-width: 0;
  background-image: linear-gradient(135deg, transparent 50%, #fff 50%);
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 15%);
}

button {
  cursor: pointer;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
</style>
