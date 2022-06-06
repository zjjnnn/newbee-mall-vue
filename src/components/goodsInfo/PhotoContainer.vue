<template>
  <div class="swiper-container">
    <div class="inner-swiper">
      <div class="swiper-slide" v-for="(imgs, index) in imgList" :key="index">
        <div
          class="silde-image-div"
          v-for="(img, idx2) in imgs"
          :key="idx2"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;

const store = useStore();
onMounted(() => {
  store.dispatch("setInfos", { goodsId });
});
let imgList = computed(() => store.getters.getImgList);
</script>

<style scoped>
.swiper-slide {
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: flex-start;
}
.silde-image-div {
  width: 80px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
}
/* .g-layout-detail .g-layout_body {
  -ms-grid-row: 3;
  grid-row: 3;
  -ms-grid-column: 1;
  grid-column: 1;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.p-gallery_top,
.p-galleryReview_top {
  position: relative;
  margin: auto;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.p-gallery_photo,
.p-galleryReview_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.p-gallery_photo_el,
.p-galleryReview_photo_el {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
}
.p-gallery-static .p-gallery_fraction {
  display: none;
}
.p-gallery_fraction {
  line-height: 1;
  position: relative;
  z-index: 1;
  display: table;
  margin: 10px auto;
  padding: 7px 10px;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
.p-gallery-static .p-gallery_caption {
  margin-bottom: 5px;
}
.p-gallery-static .p-gallery_caption {
  margin-top: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
[aria-hidden="true"]:not([data-breakpoints]):not([data-accordion-more]):not(.g-i):not(.g-s) {
  display: none;
}
.p-gallery-static .p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.p-gallery-static .p-gallery_thumbs_item-active {
  box-shadow: 0 0 0 2px #009e96 inset;
}
.p-gallery-static .p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
} */
</style>
