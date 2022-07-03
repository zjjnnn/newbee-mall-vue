<template>
  <section class="g-block-sm">
    <h2 class="g-h-2">
      <span id="wishlistHeadLabel">{{ selectedName }}</span>
    </h2>
    <div class="g-lg-inputGroup p-favoriteList">
      <div class="g-select g-select-sm">
        <i class="g-i g-i-dropdown" aria-hidden="true"></i>
        <select
          id="wishlistDropDown"
          name=""
          aria-label="お気に入り商品リストの選択"
          @change="filterList"
          style="border: none"
          v-model="selectedName"
        >
          <option
            defaultwishlist="true"
            v-for="(wish, index) in wishList"
            :value="wish.listName"
            :key="index"
          >
            {{ wish.listName }}
          </option>
        </select>
      </div>
      <!-- 选择【お気に入り商品】以外时 start -->
      <p
        class="wishlist-controls"
        v-if="selectedName !== 'お気に入り商品'"
        @click="
          isShow03 = true;
          state.newName = selectedName;
        "
      >
        <a
          class="g-btn g-btn-em g-btn-sm g-lg-fh"
          id="changepopupbutton"
          role="button"
          style="cursor: pointer"
          ><span>リスト名を変更</span></a
        >
      </p>
      <p
        class="g-inputGroup_static wishlist-controls"
        v-if="selectedName !== 'お気に入り商品'"
        @click="isShow01 = true"
      >
        <a class="g-link g-link-gray" id="deleteInitial" role="button">
          <span
            class="material-symbols-outlined"
            style="cursor: pointer; color: #dbdbdb"
          >
            close </span
          ><span>リストを削除</span></a
        >
      </p>
      <!-- 选择【お気に入り商品】以外时 end -->
    </div>
    <!-- modal01 リストを削除?-->
    <GDialog v-model="isShow01">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow01 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span
                class="material-symbols-outlined"
                style="cursor: pointer; color: #ffffff"
              >
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">"{{ selectedName }}"を削除しますか？</p>
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="id"
                @click="
                  deleteWishList(id);
                  isShow01 = false;
                "
              >
                <span>削除する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal02 リストを削除した-->
    <GDialog v-model="isShow02">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow02 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span
                class="material-symbols-outlined"
                style="cursor: pointer; color: #ffffff"
              >
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">お気に入り商品リストの削除は成功しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal03 リスト名を変更?-->
    <GDialog v-model="isShow03">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リスト名を変更</p>
            <button
              @click="isShow03 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span
                class="material-symbols-outlined"
                style="cursor: pointer; color: #ffffff"
              >
                close
              </span>
            </button>
          </header>

          <!-- <p style="color: #eb6157; background-color: #fce7e6">
            お気に入り商品リストの名前を入力してください。
          </p> -->

          <div class="g-modal_body">
            <p id="modalMessage">リスト名を変更してください。</p>
            <div class="button-delete-div">
              <input type="text" v-model="state.newName" />
              <button
                :newName="state.newName"
                class="button-delete"
                :id="id"
                @click="
                  updateListName(state.newName, id);
                  isShow03 = false;
                "
                style="margin-left: 10px"
              >
                <span>変更する</span>
              </button>
            </div>
            <div
              v-if="state.newName.length === 0"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <p style="color: #eb6157; font-size: 0.8rem">
                入力必須項目です。
              </p>
            </div>
            <div
              v-if="state.newName.length > 20"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <p style="color: #eb6157; font-size: 0.8rem">
                20文字以内で入力してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal04 リストを変更した-->
    <GDialog v-model="isShow04">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リスト名を変更</p>
            <button
              @click="isShow04 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span
                class="material-symbols-outlined"
                style="cursor: pointer; color: #ffffff"
              >
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">お気に入り商品リストの名前を変更しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- リストに商品なし -->
    <div v-if="goodsList.length === 0">
      お気に入り商品が登録されていません。<br />
      各商品の紹介ページで「お気に入り」を押すと追加できます。
    </div>
    <!-- リストに商品あり -->
    <div id="entryList" v-if="goodsList.length && goodsList.length > 0">
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
              <li v-if="wishList.length > 1">
                <a
                  class="g-link g-link-gray"
                  @click="if (state.checkList.length > 0) isShow07 = true;"
                  role="button"
                >
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
                  class="g-link g-link-gray"
                  role="button"
                  @click="if (state.checkList.length > 0) isShow05 = true;"
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
        <!-- modal05 チェックした商品を削除?-->
        <GDialog v-model="isShow05">
          <div class="modal">
            <div class="g-modal_el">
              <header class="g-modal_head">
                <p class="g-modal_h" id="p-messageModal_h">商品を削除</p>
                <button
                  @click="isShow05 = false"
                  class="g-modal_close"
                  type="button"
                  aria-label="閉じる"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #ffffff"
                  >
                    close
                  </span>
                </button>
              </header>
              <div class="g-modal_body">
                <p id="modalMessage">
                  チェックした商品{{ state.checkList.length }}つを削除しますか？
                </p>
                <div class="button-delete-div">
                  <button class="button-delete" @click="deleteGoods()">
                    <span>削除する</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </GDialog>
        <!-- modal06 チェックした商品を削除した-->
        <GDialog v-model="isShow06">
          <div class="modal">
            <div class="g-modal_el">
              <header class="g-modal_head">
                <p class="g-modal_h" id="p-messageModal_h">商品を削除</p>
                <button
                  @click="isShow06 = false"
                  class="g-modal_close"
                  type="button"
                  aria-label="閉じる"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #ffffff"
                  >
                    close
                  </span>
                </button>
              </header>
              <div class="g-modal_body">
                <p id="modalMessage">お気に入り商品から削除しました。</p>
              </div>
            </div>
          </div>
        </GDialog>
        <!-- modal07 商品を別のリストへ移動?-->
        <GDialog v-model="isShow07">
          <div class="modal">
            <div class="g-modal_el">
              <header class="g-modal_head">
                <p class="g-modal_h" id="p-messageModal_h">
                  商品を別のリストへ移動
                </p>
                <button
                  @click="isShow07 = false"
                  class="g-modal_close"
                  type="button"
                  aria-label="閉じる"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #ffffff"
                  >
                    close
                  </span>
                </button>
              </header>
              <div class="g-modal_body">
                <p id="modalMessage">
                  商品を移動させるリストを選択してください。
                </p>
                <div class="button-delete-div">
                  <select v-model="selectableList" @change="updatetList">
                    <option
                      v-for="(c, index) in canMoveList"
                      :key="index"
                      :value="c.listName"
                    >
                      {{ c.listName }}
                    </option>
                  </select>

                  <button
                    :anotherName="selectableList"
                    class="button-delete"
                    @click="
                      moveGoods(selectableList);
                      isShow07 = false;
                    "
                    style="margin-left: 10px"
                  >
                    <span>変更する</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </GDialog>
        <!-- modal08 商品を別のリストへ移動した-->
        <GDialog v-model="isShow08">
          <div class="modal">
            <div class="g-modal_el">
              <header class="g-modal_head">
                <p class="g-modal_h" id="p-messageModal_h">
                  商品を別のリストへ移動
                </p>
                <button
                  @click="isShow08 = false"
                  class="g-modal_close"
                  type="button"
                  aria-label="閉じる"
                >
                  <span
                    class="material-symbols-outlined"
                    style="cursor: pointer; color: #ffffff"
                  >
                    close
                  </span>
                </button>
              </header>
              <div class="g-modal_body">
                <p id="modalMessage">お気に入り商品の移動が完了しました。</p>
              </div>
            </div>
          </div>
        </GDialog>

        <!-- 循环得到list内的商品信息 -->
        <ul
          id="p-ProductList"
          class="g-itemList g-itemList-border g-mt-20 g-mb-20"
        >
          <li
            class="g-itemList_item"
            v-for="(goods, index) in goodsList"
            :key="index"
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
                <router-link
                  class="g-hover"
                  :to="goods.link"
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                >
                  <img class="g-fw g-rc" :src="goods.photo[0]"
                /></router-link>
              </div>
              <div class="g-media_body g-sm-units-xs g-lg-units-sm">
                <p class="g-media_h">
                  <router-link
                    :to="goods.link"
                    class="router-link"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    >{{ goods.title }}
                  </router-link>
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
                      size="5"
                      maxlength="3"
                      id="p-pieces"
                      style="margin-left: 10px"
                      oninput="value=value.replace(/\D/g, '')"
                      :value="goods.quantity"
                      @input="updateQuantity"
                    />
                  </dd>
                </dl>
              </div>
              <div class="g-media_tail g-units g-sm-align-tc">
                <div class="g-position-r">
                  <div class="cartBtnArea">
                    <!-- error modal -->
                    <div
                      v-if="e === index"
                      class="p-itemAdded g-item-add-error"
                      style="
                        bottom: 60px;
                        animation: 1.8s ease 0s 1 normal both running
                          p-itemAddedIn;
                      "
                    >
                      <button
                        @click="e = -1"
                        class="g-modal_close p-modal_button"
                        type="button"
                        aria-label="閉じる"
                      >
                        <span
                          class="material-symbols-outlined"
                          style="cursor: pointer"
                        >
                          close
                        </span>
                      </button>
                      <div>数量は1以上、999以下で設定してください。</div>
                    </div>
                    <!-- added modal -->
                    <div
                      v-if="i === index"
                      class="p-itemAdded g-item-add-error"
                      style="
                        bottom: 60px;
                        animation: 1.8s ease 0s 1 normal both running
                          p-itemAddedIn;
                      "
                    >
                      <button
                        @click="i = -1"
                        class="g-modal_close p-modal_button"
                        type="button"
                        aria-label="閉じる"
                      >
                        <span
                          class="material-symbols-outlined"
                          style="cursor: pointer"
                        >
                          close
                        </span>
                      </button>
                      <div>カートに追加しました</div>
                      <button @click="i = -1" class="modal-button">
                        <router-link to="/cart" style="color: white"
                          >カートを見る</router-link
                        >
                      </button>
                    </div>
                    <button
                      class="g-btn g-btn-cv g-btn-c g-sm-fw g-lg-btn-func addToCartBtn p-addItem"
                      :index="index"
                      @click="addItem(goods.sku, index)"
                      :sku="goods.sku"
                      style="cursor: pointer"
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
              <li v-if="wishList.length > 1">
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
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "../../store/index";

const userId = "user01";
const store = useStore();
onMounted(async () => {
  await store.dispatch("setWishList", userId);
  store.dispatch("setWishGoodsList", userId);
});
const wishList = computed(() => store.getters.getWishList);
const id = computed(() => store.getters.getId);
const goodsList = computed(() => store.getters.getGoodsList);
const selectedName = computed(() => store.getters.getSelectName);
const canMoveList = computed(() => store.getters.getCanMoveList);
const selectableList = computed(() => store.getters.getSelectableList);

//modal
const isShow01 = ref(false);
const isShow02 = ref(false);
const isShow03 = ref(false);
const isShow04 = ref(false);
const isShow05 = ref(false);
const isShow06 = ref(false);
const isShow07 = ref(false);
const isShow08 = ref(false);
// const anotherName = ref("");
const i = ref(-1);
const e = ref(-1);

//mouseover event, change style
const hover = false;

const state = reactive({
  checked: false,
  checkList: [],
  newName: "",
  // anotherName: "",
});
//------------------すべて選択-----------------------
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
//------------------すべて選択-----------------------

//change goodsList
const filterList = (e) => {
  store.commit("filterGoodsList", e.target.value);
  store.commit("filterWishList", e.target.value);
};

//delect listName
const deleteWishList = (id: number) => {
  store.dispatch("deleteWishList", { id, userId });
  isShow02.value = true;
};

//update listName
const updateListName = (newName: string, id: number) => {
  store.dispatch("updateListName", { newName, id, userId });
  state.newName = ""; //清空modal4中的输入框
  isShow04.value = true;
};

const updatetList = (e) => {
  store.commit("updateSelectList", e.target.value);
};

//------------------商品をカートに入れる-----------------------
//store goods quantity
const quantity = computed(() => store.getters.getQuantity);
const updateQuantity = (e: Event) => {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateQuantity", e.target.value);
  }
};

//add goods into cart.
//商品数量在加入购物车后会回到数量1
const addItem = (sku: string, index: number) => {
  if (quantity.value < 1 || quantity.value > 999) {
    // showError.value = true;
    e.value = index;
    store.commit("updateQuantity", 1);
  } else {
    store.dispatch("addCart", sku);
    i.value = index;
    // showAdded.value = true;
    store.commit("updateQuantity", 1);
  }
};
//------------------商品をカートに入れる-----------------------

const deleteGoods = () => {
  let id = -1;
  for (let i = 0; i < state.checkList.length; i++) {
    id = state.checkList[i];
    console.log("id", id);
    store.dispatch("deleteGoods", { id, userId });
  }
  isShow05.value = false;
  isShow06.value = true;
  state.checked = false;
};

const moveGoods = (anotherName: string) => {
  let id = -1;
  for (let i = 0; i < state.checkList.length; i++) {
    id = state.checkList[i];
    console.log("id", id);
    store.dispatch("moveGoods", { anotherName, id, userId });
    isShow08.value = true;
    state.checkList = [];
    state.checked = false;
  }
};
</script>

<style scoped>
.modal-close {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10;
  color: #ffffff;
}
.button-delete-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-delete {
  border: none;
  background-color: #009e96;
  color: white;
  cursor: pointer;
  padding: 10px 15px;
}
.g-modal_head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: sticky;
  z-index: 12;
  top: 0;
  display: flex;
  background-color: #009e96;
  justify-content: space-between;
}
.g-modal_h {
  font-size: 1.2rem;
  padding: 5px;
  color: #fff;
}

.g-list-note {
  font-size: 0.8rem;
  color: #808080;
}
.g-modal_close {
  font-size: 1rem;
  padding: 20px;
  background-color: #009e96;
  border: none;
  color: #fff;
}

.g-modal_body {
  padding: 30px 30px 40px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #fff;
}

.modal-close {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10;
  color: #ffffff;
}
.modal-button {
  background-color: #eb6157;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  width: 200px;
}
.g-hover:hover {
  opacity: 0.8;
}
.router-link {
  text-decoration: none;
}
.router-link:hover {
  text-decoration: underline;
}

.g-block-sm,
.g-lg-block-sm {
  margin-top: 5px;
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
.g-link {
  display: flex;
  align-items: center;
}
.g-itemList-border {
  padding-top: 15px;
  padding-bottom: 15px;
}
.g-lg-itemList-border {
  padding-top: 15px;
  padding-bottom: 15px;
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
.g-lg-inputGroup {
  display: flex;
  align-items: center;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-lg-inputGroup > *:nth-child(n + 2) {
  margin-left: 10px;
}

.g-lg-fh {
  height: 100%;
}
.g-btn-em {
  color: #009e96;
}
.g-btn > span {
  display: flex;
  min-height: 10px;
  padding: 2px 5px 2px 5px;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.g-btn {
  display: flex;
  min-height: 20px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.cartBtnArea .p-itemAdded {
  margin-top: 0;
  bottom: calc(100% + 20px);
}

.p-itemAdded {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  position: absolute;
  right: 0;
  left: 0;
  width: 230px;
  font-weight: normal;
  padding: 10px 10px;
  text-align: center;
  border: 2px solid #eb6157;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 3px 0 0 rgb(0 0 0 / 15%);
}
.g-modal_close {
  border: none;
  background: none;
  position: absolute;
  top: 3px;
  right: 5px;
  cursor: pointer;
  padding: 0;
  color: #808080;
}
.p-itemAdded.g-item-add-error > div {
  text-align: left;
}
.p-itemAdded > div {
  margin-top: 5px;
  margin-right: 16px;
}
.p-itemAdded::after {
  position: absolute;
  right: 0;
  bottom: -11px;
  left: 0;
  width: 20px;
  height: 20px;
  margin: auto;
  content: "";
  transform: rotate(45deg);
  border: 2px solid #eb6157;
  border-top-width: 0;
  border-left-width: 0;
  background-image: linear-gradient(135deg, transparent 50%, #fff 50%);
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 15%);
}

button {
  cursor: pointer;
}
</style>
