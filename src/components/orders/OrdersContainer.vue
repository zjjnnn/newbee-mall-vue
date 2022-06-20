<template>
  <div class="orders-page">
    <orders-head></orders-head>
    <orders-body></orders-body>
  </div>
</template>

<script setup lang="ts">
import OrdersHead from "./OrdersHead.vue";
import OrdersBody from "./OrdersBody.vue";
</script>

<style scoped>
.orders-page {
  width: 800px;
}
</style>
