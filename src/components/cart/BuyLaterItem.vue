<template>
  <h2 style="font-size: 1.5rem">「あとで買う」に入っている商品</h2>
  <template v-for="item in buyLaterItems" :key="item">
    <div class="g-layout_body">
      <ul class="g-itemList">
        <li class="g-itemList_item g-media g-media-lg p-cartItem">
          <!-- photo -->
          <p class="g-media_head">
            <router-link class="g-hover" :to="item.link"
              ><img class="g-fw g-rc" :src="item.photo" :alt="item.title"
            /></router-link>
          </p>
          <!-- goods info -->
          <div class="g-media_body g-units-sm">
            <p class="g-media_h">
              <router-link
                :to="item.link"
                class="router-link"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                >{{ item.title }}</router-link
              >
            </p>
            <p class="g-font-sm">商品コード {{ item.sku }}</p>
            <ul class="g-font-sm">
              <li>カラー：{{ item.color }}</li>
              <li>サイズ：{{ item.size }}</li>
              <li></li>
            </ul>
            <p class="g-price">{{ item.price }}<span>円 （税込）</span></p>
            <div class="g-butterfly g-font-sm">
              <p>{{ item.shipment }}日で出荷</p>
            </div>
          </div>
          <!-- input and price -->
          <div class="g-media_foot">
            <div class="g-hr-sm g-hr-dark g-only-sm"></div>
            <div class="p-cartItem_controls">
              <p
                class="p-cartItem_btn"
                :id="item.id"
                :item="item"
                @click="backtoCartList(item.id, item)"
              >
                <a class="g-btn g-btn-sm g-btn-em g-fw"
                  ><span>カートに戻す</span>
                </a>
              </p>
              <p
                :id="item.id"
                class="p-cartItem_del"
                @click="deleteByLater(item.id)"
                style="cursor: pointer"
              >
                <span style="color: gray">x</span><span> 削除</span>
              </p>
            </div>
          </div>
          <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
            <ul class="g-flow-xs g-item_label">
              <li class="g-label-brand">店舗受取可能商品</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setBuyLaterItem", userId);
});
const buyLaterItems = computed(() => store.getters.getBuyLaterItem);

//delect cart item, then set item
const deleteByLater = (id: number) => {
  store.dispatch("deleteByLater", { id, userId });
};

const backtoCartList = (id, item) => {
  store.dispatch("backtoCartList", { id, item, userId });
};
//mouse event: change style, add underline
const hover = false;
</script>

<style scoped>
.router-link {
  text-decoration: none;
}
.router-link:hover {
  text-decoration: underline;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-media-lg {
  margin-right: 12.5%;
}
.g-media_head {
  margin-right: 12.5%;
}
a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
/* .g-media {
  font-size: 1.6rem;
  line-height: 1.5;
} */

.g-price {
  font-size: 1.1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  color: #000;
}
.g-price span,
.g-lg-price span {
  font-size: 1.1rem;
}
* {
  box-sizing: border-box;
}
.p-cartItem .g-media_foot {
  margin-left: 20px;
}
.g-layout-cart .g-layout_body {
  -ms-grid-row: 3;
  grid-row: 3;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-media,
.g-lg-media {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.p-cartItem {
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
}

.g-layout-cart .g-layout_body {
  -ms-grid-row: 3;
  grid-row: 3;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-btn,
.g-lg-btn {
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: normal;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 34px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-btn-em {
  color: #009e96;
}
.p-cartItem_sum {
  width: 150px;
  margin: 6px 0 0 10px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 3;
  grid-row: 1/4;
  -ms-grid-column: 2;
  grid-column: 2;
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
.g-media-lg,
.g-lg-media-lg {
  -ms-grid-columns: minmax(160px, 13.33333%) 1fr auto;
  grid-template-columns: minmax(160px, 13.33333%) 1fr auto;
}

.p-cartItem_addon {
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 2;
  -ms-grid-column-span: 2;
  grid-column: 2/4;
  margin-top: 10px;
}
.p-cartItem .g-media_foot {
  margin-left: 20px;
}
.p-cartItem_controls {
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  -ms-grid-columns: auto auto;
  grid-template-columns: auto auto;
  display: grid;
}
.g-fw {
  width: 100%;
}
.p-cartItem_pcs .g-input {
  text-align: right;
}
.g-input-sm {
  padding: 8px 11px 7px;
}
.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
.g-media .g-media_body,
.g-lg-media .g-media_body {
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 2;
  grid-column: 2;
  display: block;
}
.g-font-sm {
  font-size: 0.8rem;
}
.p-cartItem_pcs {
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 1;
  grid-column: 1;
  max-width: 92px;
}
.g-btn-sm > span,
.g-lg-btn-sm > span {
  min-height: 34px;
}
.p-cartItem_btn {
  margin-top: 10px;
  -ms-grid-row: 2;
  grid-row: 2;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
}
.p-cartItem_sum span {
  font-size: 0.8rem;
}
.g-price span,
.g-lg-price span {
  margin-right: 0.2em;
  margin-left: 0.2em;
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
}
</style>
