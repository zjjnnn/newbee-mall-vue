<template>
  <p class="nav">
    <router-link to="/">ホームページ</router-link> |
    <router-link to="/cart">カート</router-link> |
    <router-link to="/my-account">マイページ</router-link> |
    <router-link to="/my-account/orders">注文履歴</router-link> |
    <router-link to="/goods/detail/10195">商品ページ 10195</router-link> |
    <router-link to="/my-account/wishlist">お気に入り</router-link> |
    <router-link to="/my-account/profileEditSelect">情報変更</router-link> |
    <router-link to="/my-account/address-book">配送先住所</router-link> |
    <router-link to="/my-account/payment-details">クレジットカード</router-link>
  </p>
  <router-view></router-view>
</template>

<script lang="ts"></script>

<style>
.nav {
  background-color: #009e96;
  color: white;
}
.nav a {
  color: white;
}
</style>
