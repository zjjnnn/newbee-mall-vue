<template>
  <div class="p-grid_gallery g-grid_item g-sm-full">
    <div
      class="p-gallery p-gallery-static"
      aria-hidden="true"
      data-breakpoints=""
      captionlength="0"
    >
      <!-- big -->
      <div class="p-gallery_top">
        <div
          class="p-gallery_photo"
          role="button"
          aria-expanded="false"
          aria-controls="p-galleryModal"
          tabindex="0"
        >
          <div
            class="swiper-container p-gallery_photo_el swiper-container-fade swiper-container-horizontal"
          >
            <div class="swiper-wrapper js-gallery-images">
              <div
                class="swiper-slide p-gallery_item"
                data-caption=""
                style="
                  width: 395px;
                  opacity: 1;
                  transform: translate3d(0px, 0px, 0px);
                "
              >
                <img
                  class="swiper-lazy swiper-lazy-loaded"
                  :src="imgSrc"
                  :style="{
                    width: '395px',
                    height: '395px',
                  }"
                />
              </div>
              <!-- </template> -->
            </div>
          </div>
        </div>
      </div>
      <!-- small部分 -->
      <div class="p-gallery_thumbs">
        <!-- 小图 -->
        <div class="swiper-container">
          <div
            class="swiper-wrapper js-gallery-thumbnails"
            :style="{
              width: '395px',
              height: '100px',
              transform: 'translate3d(' + x + 'px, 0px, 0px)',
            }"
          >
            <div
              class="swiper-slide swiper-slide-active"
              :style="{
                width: '395px',
                height: '100px',
              }"
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
                :style="{
                  backgroundImage: 'url(' + img + ')',
                }"
                @click="changeUrl(img)"
              ></div>
            </div>
          </div>
        </div>
        <!-- 图片下方箭头和圆点 -->
        <div class="p-gallery_controls">
          <!-- 左箭头 -->
          <div class="p-gallery_btn p-gallery_prev swiper-button-disabled">
            <i
              ><span
                @click="previousDiv"
                class="material-symbols-outlined"
                :class="x === 0 ? 'gray' : 'green'"
              >
                arrow_back_ios
              </span></i
            >
          </div>
          <!-- 圆点 -->
          <div
            class="p-gallery_pagination swiper-pagination-clickable swiper-pagination-bullets"
          >
            <span
              class="material-symbols-outlined"
              v-for="n in imgList.length"
              :key="n"
              style="color: rgb(201, 197, 197)"
            >
              fiber_manual_record
            </span>
            <!-- <span
              class="swiper-pagination-bullet"
              :class="index === 0 ? 'green-round' : '.black-round'"
            ></span
            ><span
              class="swiper-pagination-bullet"
              :class="index === -1 ? 'green-round' : '.black-round'"
            ></span
            ><span
              class="swiper-pagination-bullet"
              :class="index === -2 ? 'green-round' : '.black-round'"
            ></span> -->
          </div>
          <!-- 右箭头 -->
          <div class="p-gallery_btn p-gallery_next">
            <i
              ><span
                @click="nextDiv"
                class="material-symbols-outlined"
                :class="x === max ? 'gray' : 'green'"
              >
                arrow_forward_ios
              </span></i
            >
          </div>
        </div>
      </div>
    </div>
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
  store.dispatch("setInfos", { goodsId });
});
let imgList = computed(() => store.getters.getImgList);

//默认大图为第一张
let imgSrc = computed(() => store.getters.getImgsrc);
//console.log("imgSrc1", imgSrc.value);

//click事件 changeUrl
let changeUrl = (img: string) => {
  store.commit("changeUrl", img);
};
// const changeUrl = (e: Event) => {
//   if (e.target instanceof HTMLImageElement) {
//     store.commit("changeUrl", e.target.src);
//   }
// };
let index = computed(() => store.getters.getIndex);
const max = computed(() => -(imgList.value.length - 1) * 395);
console.log("max", max.value);

let x = computed(() => index.value * 395);
function nextDiv() {
  store.commit("nextDiv");
}
function previousDiv() {
  store.commit("previousDiv");
}
</script>

<style scoped>
.green {
  color: #009e96;
}
.gray {
  color: #686868;
  pointer-events: none;
}
.green-round {
  background: #009e96;
}
.black-round {
  background: black;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 20;
}

.p-gallery_thumbs_item {
  cursor: pointer;
  box-shadow: 0 0 0 2px #009e96 inset;
}
/* .image_item {
  text-align: center;
  border-color: #009e96;
} */
.swiper-slide {
  width: 380px;
  height: 380px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
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
.p-gallery_thumbs {
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
.p-gallery_thumbs {
  display: flex;
  flex-wrap: wrap;
}

.p-gallery_thumbs_item:nth-child(-n + 4) {
  margin-top: 0;
}
/* .p-gallery_thumbs_item-active {
  box-shadow: 0 0 0 2px #009e96 inset;
} */
.p-gallery_thumbs_item {
  width: calc((100% - 30px) / 4 - 0.1px);
  margin: 10px 10px 0 0;
  padding-bottom: calc((100% - 30px) / 4);
  transition: opacity 0.2s;
  background-repeat: no-repeat;
  background-size: contain;
}
.p-gallery_thumbs_item {
  background-position: center;
}
.p-galleryReview_thumbs_item {
  background-position: center;
}
/* .p-gallery_thumbs_item:not(.p-gallery_thumbs_item-active) {
  cursor: pointer;
} */
.p-gallery_thumbs_item:nth-child(4n) {
  margin-right: 0;
}
.p-gallery_controls {
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.p-gallery_prev {
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
.p-gallery_next {
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
  -webkit-font-smoothing: antialiased;
}
.p-gallery_btn.swiper-button-disabled .g-i {
  color: #808080;
}
.p-gallery_pagination {
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
.swiper-pagination-clickable {
  cursor: pointer;
}
.swiper-pagination-bullet {
  display: inline-block;
  border-radius: 100%;
}
.p-gallery_next {
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
.g-grid_item {
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

.p-gallery_photo[role="button"] {
  transition: opacity 0.2s;
}
.p-gallery_photo {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
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
.p-gallery_fraction {
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
.p-gallery_caption {
  margin-bottom: 5px;
}

.p-gallery_caption {
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
