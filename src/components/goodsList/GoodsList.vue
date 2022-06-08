<template>
  <ul class="flex-ul">
    <template v-for="(goods, index) in goodsList" :key="index">
      <goods-li :goods="goods"></goods-li>
    </template>
  </ul>
</template>

<script lang="ts">
import GoodsLi from "./GoodsLi.vue";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: {
    GoodsLi,
  },
  methods: {
    ...mapActions({ fetchNewGoodses: "setNewGoodses" }),
  },
  computed: {
    ...mapGetters({ goodsList: "getNewGoodses" }),
  },
  mounted() {
    this.fetchNewGoodses();
  },
});
</script>
<style>
.flex-ul {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  flex-wrap: wrap;
}
</style>
