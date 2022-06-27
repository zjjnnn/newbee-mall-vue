<template>
  <div class="g-layout_body">
    <ul class="g-lg-grid-3">
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <router-link to="/my-account/orders">
          <div class="flex-body">
            <span class="material-symbols-outlined span-icon"> history </span>
            <span class="g-card_body span-text">注文履歴</span>
          </div>
        </router-link>
      </li>
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <router-link to="/my-account/wishlist">
          <div class="flex-body">
            <span class="material-symbols-outlined span-icon"> favorite </span>
            <span class="g-card_body span-text">お気に入り商品</span>
          </div>
        </router-link>
      </li>
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <a href="#"></a>
        <div class="flex-body">
          <span class="material-symbols-outlined span-icon"> store </span>
          <span class="g-card_body span-text">お気に入り店舗</span>
        </div>
      </li>
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <a href="#"></a>
        <div class="flex-body">
          <span class="material-symbols-outlined span-icon"> person </span>
          <span class="g-card_body span-text">お客様情報の確認・変更</span>
        </div>
      </li>
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <a href="#"></a>
        <div class="flex-body">
          <span class="material-symbols-outlined span-icon"> edit_note </span>
          <span class="g-card_body span-text">配送先住所の変更・登録</span>
        </div>
      </li>
      <li class="change" @mouseover="hover = true" @mouseleave="hover = false">
        <a href="#"></a>
        <div class="flex-body">
          <span class="material-symbols-outlined span-icon"> credit_card </span>
          <span class="g-card_body span-text"
            >クレジットカードの変更・登録</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const hover = false;
</script>

<style scoped>
.change:hover .span-icon {
  color: #6ac8c3;
}
.change:hover .span-text {
  text-decoration: underline;
}
.g-layout_body {
  margin-left: 20px;
}
.g-lg-grid-3 {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
}
li {
  padding: 10px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  width: 200px;
  height: 115px;
  margin: 15px;
  cursor: pointer;
}
ul {
  padding: 0;
  list-style: none;
}
ol {
  padding: 0;
  list-style: none;
}

.material-symbols-outlined {
  font-weight: 500;
  font-size: 3.5rem;
  font-optical-sizing: 48;
  color: #009e96;
  cursor: pointer;
}
.flex-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: #333;
}
.g-card_body {
  font-size: 0.9rem;
  text-align: center;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
