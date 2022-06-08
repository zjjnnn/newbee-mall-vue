<template>
  <div class="g-grid_item js-sku-details" id="p-specGridItem">
    <info-up></info-up>
    <div class="g-block-sm js-sku-cutlock"></div>
    <div v-for="(info, index) in newInfoList" :key="index">
      <info-down v-bind="info"></info-down>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoUp from "./InfoUp.vue";
import InfoDown from "./InfoDown.vue";
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfos", { goodsId });
});

const newInfoList = computed(() => store.getters.getNewInfoList);
//const infoList = computed(() => store.getters.getInfoList);
</script>

<style scoped></style>
