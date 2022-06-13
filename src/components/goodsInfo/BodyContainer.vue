<template>
  <div class="g-layout_body">
    <div class="p-grid g-lg-grid-2 g-grid-lg">
      <photo-container />
      <info-container />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoContainer from "./InfoContainer.vue";
import PhotoContainer from "./PhotoContainer.vue";
</script>

<style scoped>
.g-lg-grid-2 {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin-bottom: 20px;
}

.g-layout-detail .g-layout_body {
  grid-row: 3;
  grid-column: 1;
}
</style>
