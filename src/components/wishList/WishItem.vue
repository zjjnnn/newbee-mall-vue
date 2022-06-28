<template>
  <section class="g-block-sm">
    <h2 class="g-h-2"><span id="wishlistHeadLabel">お気に入り商品</span></h2>
    <div class="g-lg-inputGroup p-favoriteList">
      <div class="g-select g-select-sm">
        <i class="g-i g-i-dropdown" aria-hidden="true"></i>
        <select
          id="wishlistDropDown"
          name=""
          aria-label="お気に入り商品リストの選択"
        >
          <option defaultwishlist="true" v-for="wish in wishList" :key="wish">
            {{ wish.listName }}
          </option>
        </select>
      </div>
      <p class="wishlist-controls" style="display: none">
        <a
          class="g-btn g-btn-em g-btn-sm g-lg-fh"
          id="changepopupbutton"
          href="#p-changeModal"
          role="button"
          aria-expanded="false"
          aria-controls="p-changeModal"
          ><span>リスト名を変更</span></a
        >
      </p>
      <p class="g-inputGroup_static wishlist-controls" style="display: none">
        <a
          class="g-link g-link-gray"
          href="#p-listDeleteModal"
          id="deleteInitial"
          role="button"
          aria-expanded="false"
          aria-controls="p-listDeleteModal"
          ><i class="g-i g-i-close" aria-hidden="true"></i
          ><span>リストを削除</span></a
        >
      </p>
    </div>

    <div id="entryList">
      <div id="wishlistEntryList" class="g-block-sm">
        <div class="p-listControl">
          <label class="g-checkable">
            <input
              type="checkbox"
              data-checkall="favorite"
              v-model="state.checked"
              @change="selectAll"
            /><span class="g-checkable_label">すべて選択</span>
          </label>
          <div class="p-listControl_edit">
            <div>チェックしたものを</div>
            <ul class="g-linkList g-linkList-lg">
              <li>
                <a class="g-link g-link-gray" href="#" role="button">
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #dbdbdb"
                  >
                    close
                  </span>
                  <span>移動 </span><span style="color: #dbdbdb"> |</span></a
                >
              </li>

              <li>
                <a
                  id="linkReal"
                  class="g-link g-link-gray"
                  href="#p-deleteModal"
                  role="button"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #dbdbdb"
                  >
                    swap_vert
                  </span>
                  <span>削除 </span><span style="color: #dbdbdb"> |</span></a
                >
              </li>
            </ul>
          </div>
        </div>

        <ul
          id="p-ProductList"
          class="g-itemList g-itemList-border g-mt-20 g-mb-20"
        >
          <li
            class="g-itemList_item"
            v-for="goods in goodsList"
            :key="goods.id"
          >
            <div
              class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem"
            >
              <div class="g-media_lead g-align-im">
                <div class="g-checkable">
                  <input
                    type="checkbox"
                    name="productCheckBox"
                    :value="goods.id"
                    v-model="state.checkList"
                  />
                </div>
              </div>
              <div class="g-media_head">
                <router-link class="g-hover" :to="goods.link">
                  <img class="g-fw g-rc" :src="goods.photo"
                /></router-link>
              </div>
              <div class="g-media_body g-sm-units-xs g-lg-units-sm">
                <p class="g-media_h">
                  <a href="/ec/product/7030893">{{ goods.title }}</a>
                </p>
                <p class="g-price">{{ goods.price }}<span>円（税込）</span></p>
                <dl class="g-flow g-align-gm">
                  <dt>数量</dt>
                  <dd>
                    <input
                      class="g-input g-input-sm addToCartQty7030893"
                      type="text"
                      inputmode="numeric"
                      name="quantity"
                      :value="goods.quantity"
                      size="5"
                      maxlength="3"
                      id="p-pieces"
                      style="margin-left: 10px"
                    />
                  </dd>
                </dl>
              </div>
              <div class="g-media_tail g-units g-sm-align-tc">
                <div class="g-position-r">
                  <div class="cartBtnArea">
                    <button
                      class="g-btn g-btn-cv g-btn-c g-sm-fw g-lg-btn-func addToCartBtn p-addItem"
                      id="p-addItem7030893"
                      type="button"
                      data-sku-code="7030893"
                      data-price-without-tax="818.0"
                      data-category="ジョイントマット・コルクマット"
                      data-category-id="11480"
                      data-product-id="7030841s"
                      data-bundle="false"
                    >
                      <span class="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                      <span>カートに入れる</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="p-listControl">
          <label class="g-checkable">
            <input type="checkbox" data-checkall="favorite" /><span
              class="g-checkable_label"
              >すべて選択</span
            >
          </label>
          <div class="p-listControl_edit">
            <div>チェックしたものを</div>
            <ul class="g-linkList g-linkList-lg">
              <li>
                <a class="g-link g-link-gray" href="#" role="button">
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #dbdbdb"
                  >
                    close
                  </span>
                  <span>移動 </span><span style="color: #dbdbdb"> |</span></a
                >
              </li>

              <li>
                <a
                  id="linkReal"
                  class="g-link g-link-gray"
                  href="#p-deleteModal"
                  role="button"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #dbdbdb"
                  >
                    swap_vert
                  </span>
                  <span>削除 </span><span style="color: #dbdbdb"> |</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useStore } from "../../store/index";

const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setWishList", userId);
});
const wishList = computed(() => store.getters.getWishList);
const goodsList = computed(() => store.getters.getGoodsList);

const state = reactive({
  checked: false,
  checkList: [],
});
// const checked = ref(false);
// const checkList = ref();
// let { checked, checkList } = toRefs(state);
// const selectAll = async () => {
//   if (checked.value) {
//     const checkList1 = goodsList.value.map((goods) => goods.title);
//     console.log("checkList1", checkList1);
//     checkList.value = checkList1;
//     console.log("checkList", checkList.value);
//   } else {
//     checkList.value = [];
//   }
// };
const selectAll = async () => {
  if (state.checked) {
    const checkList1 = goodsList.value.map((goods) => goods.id);
    console.log("checkList1", checkList1);
    state.checkList = checkList1;
    console.log("checkList", state.checkList);
  } else {
    state.checkList = [];
  }
};
</script>

<style scoped>
.g-block-sm,
.g-lg-block-sm {
  margin-top: 20px;
}
.g-h-2 {
  font-size: 1.4rem;
}
/* .g-checkable input {
  position: absolute;
  top: 0;
  left: 0;
} */
.p-listControl {
  display: flex;
}
.g-checkable {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-lg-checkable {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;

  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
}

input {
  cursor: pointer;
}
.g-checkable > span,
.g-lg-checkable > span {
  line-height: normal;
  display: inline-flex;
  vertical-align: bottom;
  align-items: center;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  width: 140px;
}
a {
  text-decoration: none;
  color: #333;
}
.p-listControl_edit {
  margin-left: 25px;
}
.g-checkable {
  margin-left: 10px;
}
.p-listControl_edit {
  line-height: 1;
  display: flex;
  align-items: center;
  margin-left: 25px;
}
.p-listControl_edit > div {
  margin-right: 20px;
}
.g-linkList,
.g-lg-linkList {
  display: inline-flex;
  flex-wrap: wrap;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
.g-itemList-border {
  padding-top: 20px;
  padding-bottom: 20px;
}
.g-lg-itemList-border {
  padding-top: 20px;
  padding-bottom: 20px;
}
.g-itemList-border {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.g-lg-itemList-border {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.g-media-lg.g-media-lead.g-media-tail {
  grid-template-columns: auto minmax(160px, 13.33333%) 1fr auto;
}
.g-media-tail,
.g-lg-media-tail {
  -ms-grid-rows: 1fr auto;
  grid-template-rows: 1fr auto;
}
.g-media,
.g-lg-media {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}
.g-media-tail.g-media-lead .g-media_lead {
  grid-row: 1;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-media .g-media_lead,
.g-lg-media .g-media_lead {
  display: block;
  margin-right: 20px;
}
.g-align-im,
.g-lg-align-im {
  -ms-grid-row-align: center !important;
  align-self: center !important;
}

.g-checkable > span,
.g-lg-checkable > span {
  line-height: normal;
  display: inline-flex;
  vertical-align: bottom;
  align-items: center;
}
.g-media-tail.g-media-lead .g-media_body {
  grid-row: 1;
  -ms-grid-column: 3;
  grid-column: 3;
}
.g-media {
  font-size: 1rem;
  line-height: 1;
}
.g-price {
  font-size: 1rem;
  font-weight: bold;
}
.g-price span {
  font-size: 0.8rem;
  font-weight: normal;
}
.g-flow {
  display: flex;
  flex-wrap: wrap;
}
.g-align-gm {
  align-items: center;
}
.g-input[size="5"] {
  max-width: calc(0.65em * 5 + 10px);
}
.g-position-r,
.g-lg-position-r {
  position: relative;
}
.cartBtnArea {
  position: relative;
}
.p-addItem {
  width: 200px;
}
.g-lg-btn-func {
  font-size: 1rem;
  line-height: 1;
  color: white;
}
.g-btn-cv,
.g-lg-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-itemList .g-itemList_item:nth-child(n + 2),
.g-lg-itemList .g-itemList_item:nth-child(n + 2) {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
}
.g-itemList .g-itemList_item:nth-child(n + 2),
.g-lg-itemList .g-itemList_item:nth-child(n + 2) {
  margin-top: 20px;
  padding-top: 20px;
}

.g-media-tail.g-media-lead .g-media_tail {
  grid-row: 2;
  -ms-grid-column: 3;
  grid-column: 3;
}
.g-mb-20 {
  margin-bottom: 20px;
}
</style>
