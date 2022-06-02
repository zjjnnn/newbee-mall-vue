<!-- <template>
 
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfo", goodsId);
});


</script>

<style scoped></style> -->
