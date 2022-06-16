<template>
  <router-link to="/">Go to Home</router-link><br />
  <router-link to="/goods/detail/10195">Go to 10195</router-link>
  <hr />

  <div>
    <div class="g-layout_head">
      <h1>カート</h1>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from "./CartItem.vue";
import SideBar from "./SideBar.vue";

import { useStore } from "../../store/index";
import { computed, onMounted } from "vue";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setCartItem", userId);
});
const length = computed(() => store.getters.getCartItem.length);
console.log("length", length);
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
</style>
