<template>
  <!-- <div class="swiper-container">
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
  </div> -->

  <div class="p-gallery_thumbs">
    <div
      class="swiper-container p-gallery_thumbs_el swiper-container-horizontal"
    >
      <div class="swiper-wrapper js-gallery-thumbnails">
        <div
          class="swiper-slide swiper-slide-active"
          style="width: 395px,height:395px"
          v-for="(imgs, index) in imgList"
          :key="index"
        >
          <div
            class="p-gallery_thumbs_item p-gallery_thumbs_item-active"
            role="button"
            tabindex="0"
            data-index="0"
            v-for="(img, idx2) in imgs"
            :key="idx2"
            :style="{ backgroundImage: 'url(' + img + ')' }"
          ></div>
        </div>
      </div>
    </div>
    <div class="p-gallery_controls">
      <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
        <i class="g-i g-i-arrow-l" aria-hidden="true"
          ><span class="material-symbols-outlined"> arrow_back_ios </span></i
        >
      </div>
      <div
        class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets"
      >
        <span
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
        ></span
        ><span class="swiper-pagination-bullet"></span
        ><span class="swiper-pagination-bullet"></span>
      </div>
      <div class="p-gallery_btn p-gallery_next">
        <i class="g-i g-i-arrow-r" aria-hidden="true"
          ><span class="material-symbols-outlined"> arrow_forward_ios </span></i
        >
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
.p-grid_gallery {
  margin: auto !important;
}
.p-gallery-static .p-gallery_thumbs {
  position: relative;
  margin-top: 15px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
}
.p-gallery-static .p-gallery_thumbs .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(-n + 4) {
  margin-top: 0;
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
}
.p-gallery_thumbs_item,
.p-galleryReview_thumbs_item {
  background-position: center;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_thumbs_item:nth-child(4n) {
  margin-right: 0;
}
.p-gallery-static .p-gallery_controls {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.p-gallery-static .p-gallery_prev {
  transform: translateX(-10px);
}
.p-gallery_btn {
  font-size: 2.4rem;
  display: flex;
  width: 100px;
  height: 80px;
  align-items: center;
  justify-content: center;
}
.p-gallery-static .p-gallery_next {
  transform: translateX(10px);
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}
.p-gallery_btn.swiper-button-disabled .g-i {
  color: #808080;
}
.g-i-arrow-r,
.g-i-arrow-l,
.g-i-arrow-u,
.g-i-arrow-d,
.g-i-arrow-d2 {
  transition: transform 0.3s;
}
.p-gallery-static .p-gallery_pagination {
  flex-grow: 1;
  text-align: center;
}
.p-gallery .swiper-pagination-bullet-active {
  background: #009e96;
}
.p-gallery .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  opacity: 1;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet {
  display: inline-block;
  border-radius: 100%;
}
.p-gallery-static .p-gallery_next {
  transform: translateX(10px);
}
.g-i-arrow-r {
  transition: transform 0.3s;
  color: #009e96;
}
.g-i-arrow-l {
  transition: transform 0.3s;
  color: #009e96;
}
.p-grid .g-grid_item {
  max-width: 395px;
  width: 100% !important;
  margin-top: 40px;
  padding: 0 !important;
}
* {
  box-sizing: border-box;
}
.p-gallery_top {
  position: relative;
  margin: auto;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_photo[role="button"] {
  transition: opacity 0.2s;
}
.p-gallery_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-fade .swiper-slide {
  transition-property: opacity;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
}
.p-gallery_item img {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100%;
  margin: auto;
  width: 100%;
}
.img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.p-gallery-static .p-gallery_fraction {
  display: none;
}
.p-gallery_fraction {
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 10px auto;
  padding: 7px 10px;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.6);
}
.captionArea-static.fixed {
  min-height: 45px !important;
}
.p-gallery-static .p-gallery_caption {
  margin-bottom: 5px;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.p-gallery-static .p-gallery_caption {
  margin-top: 10px;
  overflow-wrap: break-word;
}
.g-align-tc {
  text-align: center !important;
}
.displayMoreGalleryCaption {
  cursor: pointer;
}
.g-link .g-i:first-child {
  margin-right: 0.35em;
}
.p-gallery-static .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}
.g-i-arrow-d {
  transition: transform 0.3s;
  color: #009e96;
}
.g-link [class*="g-i-arrow-"] {
  margin-top: -0.2em;
}
.g-link .g-i:first-child {
  margin-right: 0.35em;
}
</style>
