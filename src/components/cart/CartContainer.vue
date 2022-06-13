<template>
  <router-link to="/">Go to Home</router-link><br />
  <router-link to="/goods/detail/10195">Go to 10195</router-link>
  <hr />
  <div id="cart">
    <div class="g-layout_head">
      <h1>カート</h1>
    </div>
    <cart-item></cart-item>
  </div>
</template>

<script setup lang="ts">
import CartItem from "./CartItem.vue";
</script>

<style scoped>
div #cart {
  width: 721px;
}
</style>
