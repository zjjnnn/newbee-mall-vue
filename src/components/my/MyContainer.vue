<template>
  <div class="my-page">
    <my-left></my-left>
    <my-right></my-right>
  </div>
</template>

<script setup lang="ts">
import MyLeft from "./MyLeft.vue";
import MyRight from "./MyRight.vue";
</script>

<style scoped>
.my-page {
  display: flex;
}
</style>
