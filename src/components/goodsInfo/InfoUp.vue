<template>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations">
      <!-- select size -->
      <dt>
        サイズ：<b>{{ size }}</b>
      </dt>
      <dd>
        <select v-model="size" @change="change">
          <option v-for="(v, index) in variants" :key="index" :value="v.size">
            {{ v.size }}
          </option>
        </select>
      </dd>
      <!-- select color -->
      <dt>
        カラー：<b>{{ color }}</b>
      </dt>
      <dd>
        <select v-model="color" @change="changeColor">
          <option v-for="c in colorList" :key="c">
            {{ c }}
          </option>
        </select>
      </dd>
    </dl>
    <!-- 商品描述 -->
    <div class="js-catch-copy">
      {{ goodsDescribe }}
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
import { useStore } from "../../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfos", goodsId);
});

const variants = computed(() => store.getters.getVariants);
let size = computed(() => store.getters.getSize);
let color = computed(() => store.getters.getColor);
let colorList = computed(() => store.getters.getColorList);

const changeColor = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("setNewList", { size: size.value, color: e.target.value });
  }
};
const change = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.dispatch("setNewListAndColor", {
      size: e.target.value,
      color: color.value,
    });
  }
};
console.log("size", size.value);

const goodsDescribe = computed(() => store.getters.getInfos.goodsDescribe);
</script>

<style scoped></style>
