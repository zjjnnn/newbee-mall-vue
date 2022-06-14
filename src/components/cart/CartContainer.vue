<template>
  <router-link to="/">Go to Home</router-link><br />
  <router-link to="/goods/detail/10195">Go to 10195</router-link>
  <hr />

  <div id="cart">
    <div class="g-layout_head">
      <h1>カート</h1>
    </div>
    <template v-for="item in cartItem" :key="item">
      <cart-item v-bind="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import CartItem from "./CartItem.vue";

import { useStore } from "../../store/index";
import { computed, onMounted } from "vue";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setCartItem", userId);
});
const cartItem = computed(() => store.getters.getCartItem);
</script>

<style scoped>
div #cart {
  width: 721px;
}
</style>
