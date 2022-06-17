<template>
  <router-link to="/">Go to Home</router-link><br />
  <router-link to="/goods/detail/10195">Go to 10195</router-link>
  <hr />

  <div>
    <div class="g-layout_head">
      <h1>カート</h1>
      <div v-if="quantityInCart === 0" class="quantity-error">
        <p class="quantity-error-p">
          入力内容をご確認ください。<br />
          <span class="quantity-error-s">
            ・数量は1以上、999以下で設定してください。</span
          >
        </p>
      </div>
    </div>
    <div class="flex">
      <div v-if="length && length === 0">
        <p>
          ショッピングカートに商品が入っていません。<br />
          ショッピングカート内の商品は自由に出し入れしていただけます。<br />
          また、商品は「あとで買う」に移動していただくこともできます。
        </p>
      </div>

      <div id="cart">
        <cart-item></cart-item>
      </div>

      <div v-if="length !== 0">
        <side-bar></side-bar>
      </div>
      <div style="margin-top: 50px; width: 700px" v-if="buyLaterLength !== 0">
        <buy-later-item></buy-later-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from "./CartItem.vue";
import SideBar from "./SideBar.vue";
import BuyLaterItem from "./BuyLaterItem.vue";

import { useStore } from "../../store/index";
import { computed, onMounted } from "vue";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setCartItem", userId);
  store.dispatch("setBuyLaterItem", userId);
});
const length = computed(() => store.getters.getCartItem.length);
const buyLaterLength = computed(() => store.getters.getBuyLaterItem.length);
console.log("length", length);
const quantityInCart = computed(() => store.getters.getQuantityInCart);
</script>

<style scoped>
div #cart {
  width: 700px;
}
.g-layout-cart,
.g-layout-purchase {
  -ms-grid-rows: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  -ms-grid-columns: 1fr 400px;
  grid-template-columns: 1fr 400px;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.quantity-error {
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fcf0f1;
}
.quantity-error-p {
  font-weight: bold;
  font-size: 0.9rem;

  color: #eb6157;
}
.quantity-error-s {
  font-size: 0.8rem;
  font-weight: normal;
  color: black;
}
</style>
