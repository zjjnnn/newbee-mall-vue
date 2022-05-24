<template>
  <div id="normal-productreview">
    <p>goodsId:{{ goodsId }}</p>
    <h2 class="g-h-2 g-h-i p-hd">
      <i class="g-s g-s-comment" aria-hidden="true"></i>
      <span class="material-symbols-outlined"> sms </span>
      <span>レビュー</span>
    </h2>
    <review-total></review-total>
    <div id="n-review-btn" class="n-review-btn">
      <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
        <span>商品レビューを書く</span>
        <!-- <i class="g-i g-i-arrow-r" aria-hidden="true"></i> -->
      </button>
    </div>
    <hr />
    <review-list></review-list>
  </div>
</template>

<script setup>
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style>
#normal-productreview {
  width: 721px;
}

.p-hd {
  font-size: 2rem;
}
div {
  display: block;
}
.n-review-btn {
  text-align: center;
  padding-bottom: 20px;
}
.n-review-btn button span {
  padding: 5px 30px;
  color: #009e96;
}
.g-btn {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
