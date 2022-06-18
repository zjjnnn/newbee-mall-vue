<template>
  <div class="g-layout_body">
    <ul class="g-sm-lineGrid-1 g-sm-lineGrid-rc g-lg-grid-3">
      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/orders"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-history g-hover_img"></i>
            </div>
            <span class="g-card_body">注文履歴</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="#"></a>
        <div>
          <span class="material-symbols-outlined"> history </span>
          <span class="g-card_body">注文履歴</span>
        </div>
      </li>
      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/wishlist"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-favorite g-hover_img"></i>
            </div>
            <span class="g-card_body">お気に入り商品</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>
      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/mystore"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-shop g-hover_img"></i>
            </div>
            <span class="g-card_body">お気に入り店舗</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>
      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/profileEditSelect"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-person g-hover_img"></i>
            </div>
            <span class="g-card_body">お客様情報の確認・変更</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>
      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/address-book"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-address g-hover_img"></i>
            </div>
            <span class="g-card_body">配送先住所の変更・登録</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>

      <li class="g-lineGrid_item g-grid_item">
        <a
          class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
          href="/ec/my-account/payment-details"
        >
          <div
            class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
          >
            <div class="g-card_head">
              <i class="g-s g-s-payment g-hover_img"></i>
            </div>
            <span class="g-card_body">クレジットカードの変更・登録</span
            ><i class="g-i g-i-arrow-r g-only-sm" aria-hidden="true"></i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.g-lg-grid-3 {
  display: flex;
  flex-wrap: wrap;
}
ul {
  padding: 0;
  list-style: none;
}
ol {
  padding: 0;
  list-style: none;
}
.g-lg-grid-3 > .g-grid_item:nth-child(-n + 3) {
  padding-top: 0;
  padding-left: 0;
}
.g-lg-grid-3 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item {
  width: calc((100% - 50px) / 3 - 0.1px);
  padding: 12.5px 12.5px;
  box-sizing: content-box;
}
.p-mypagePane {
  padding: 15px;
}
.g-lg-pane-border {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-lg-grid-3 > .g-grid_item,
.g-lg-grid-3 > .g-grid_item {
  width: calc((100% - 50px) / 3 - 0.1px);
  padding: 12.5px 12.5px;
}
.g-fh,
.g-lg-fh {
  height: 100%;
}
a {
  text-decoration: none;
  color: #333;
}
.g-lg-pane {
  display: block;
}
.g-fh,
.g-lg-fh {
  height: 100%;
}
.g-lg-align-tc {
  text-align: center !important;
}
.g-lg-card {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  -ms-grid-columns: 100%;
  grid-template-columns: 100%;
}
.p-iconText {
  height: 47px;
}
.g-card_head {
  height: 47px;
}
</style>
