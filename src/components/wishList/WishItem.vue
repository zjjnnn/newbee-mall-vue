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
            /><span
              ><i
                class="g-s g-s-checkbox-on g-checkable_on"
                aria-hidden="true"
              ></i
              ><i
                class="g-s g-s-checkbox-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">すべて選択</span></span
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

        <ul
          id="p-ProductList"
          class="g-itemList g-itemList-border g-mt-20 g-mb-20"
        >
          <li
            class="g-itemList_item"
            v-for="goods in goodsList"
            :key="goods.title"
          >
            <div
              class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem"
            >
              <div class="g-media_lead g-align-im">
                <div class="g-checkable">
                  <input
                    type="checkbox"
                    name="productCheckBox"
                    :value="goods.title"
                    data-checkall-children="favorite"
                    v-model="state.checkList"
                  />
                  <!-- <span><i
                      class="g-s g-s-checkbox-on g-checkable_on"
                      aria-hidden="true"
                    >
                    </i>
                    <i
                      class="g-s g-s-checkbox-off g-checkable_off"
                      aria-hidden="true"
                    >
                    </i>
                    </span> -->
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
                      <i class="g-i g-i-add-cart" aria-hidden="true"></i>
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
              ><i
                class="g-s g-s-checkbox-on g-checkable_on"
                aria-hidden="true"
              ></i
              ><i
                class="g-s g-s-checkbox-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">すべて選択</span></span
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
    const checkList1 = goodsList.value.map((goods) => goods.title);
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
.g-checkable input {
  position: absolute;
  top: 0;
  left: 0;
}
.p-listControl {
  display: flex;
}
.g-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
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
</style>
