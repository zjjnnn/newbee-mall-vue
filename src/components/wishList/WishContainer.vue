<template>
  <div class="g-layout_head">
    <h1>お気に入り商品</h1>
  </div>
  <div class="g-layout_body">
    <div class="g-lg-inputGroup p-createList">
      <div>
        <input
          class="g-input g-input-sm"
          id="createWishlistName"
          type="text"
          name="wishlistName"
          size="30"
          placeholder="新規リスト名を入力"
          @input="updateValue"
          v-model="value"
        />
        <p
          class="g-formGrid_error-alone g-sm-align-tl"
          id="p-list-new_alert"
          role="alert"
        ></p>
      </div>
      <p>
        <a
          class="g-btn g-btn-brand g-sm-btn-func g-lg-btn-sm"
          role="button"
          @click="addWishList"
        >
          <span>リストを作成</span></a
        >
      </p>
      <p v-if="value.length > 20" style="color: #eb6157; font-size: small">
        20文字以内で入力してください。
      </p>
    </div>

    <!-- modal1 リストを作成1-->
    <GDialog v-model="isShow1">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow1 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p id="modalMessage">
              お気に入り商品リストの新規作成は完了しました。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal2 リストを作成2 inputなし-->
    <GDialog v-model="isShow2">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow2 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              お気に入り商品リストの名前を入力してください。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal3 リストを作成3 同じリスト名前-->
    <GDialog v-model="isShow3">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow3 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              入力された名前のお気に入り商品リストは既に存在します。別の名前を入力してください。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal4 リストを作成4 長すぎる-->
    <GDialog v-model="isShow4">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow4 = false"
              class="g-modal_close"
              type="button"
              aria-label="閉じる"
            >
              <span class="material-symbols-outlined" style="cursor: pointer">
                close
              </span>
            </button>
          </header>
          <div class="g-modal_body">
            <p style="color: #eb6157; background-color: #fce7e6">
              お気に入り商品リストの名前が長すぎます。
            </p>
          </div>
        </div>
      </div>
    </GDialog>
    <wish-item></wish-item>
  </div>
</template>

<script setup lang="ts">
import WishItem from "./WishItem.vue";
// import { ref } from "vue";
import { ref, computed } from "vue";
import { useStore } from "../../store/index";
const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);
const store = useStore();

// const value = ref("");
const wishList = computed(() => store.getters.getWishList);
const value = computed(() => store.getters.getValue);

function updateValue(e: Event) {
  if (e.target instanceof HTMLInputElement) {
    store.commit("updateValue", e.target.value);
  }
}

function addWishList() {
  //去掉首尾空格后判断输入的内容是否为空
  if (
    value.value.replace(/(^\s*)|(\s*$)/g, "").length > 0 &&
    value.value.length <= 20
  ) {
    //若不为空
    //继续判断输入的listName是否已经存在
    if (wishList.value.filter((w) => w.listName === value.value).length > 0) {
      //若存在，则显示modal3，提示listName已经存在
      isShow3.value = true;
    } else {
      //若不存在，则显示modal1，提示插入成功，并插入数据
      isShow1.value = true;
      store.dispatch("addWishList", "user01");
    }
  } else if (value.value.length > 20) {
    isShow4.value = true;
  } else {
    //若为空，则显示modal2，提示不能为空
    isShow2.value = true;
  }
}
</script>

<style scoped>
.g-layout-narrow {
  width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-layout_head {
  margin-bottom: 5px;
}
h1 {
  font-size: 2rem;
  margin: 0;
}

.g-lg-inputGroup {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* .g-input-sm {
  padding: 5px 5px 0px;
} */
.g-input {
  min-width: 0;
  padding: 8px 5px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-formGrid_error-alone:empty {
  display: none;
}
.g-lg-inputGroup > *:nth-child(n + 2) {
  margin-left: 10px;
}
.p-createList .g-btn {
  cursor: pointer;
}
.g-btn-brand {
  background-color: #009e96;
  color: #fff;
}
.g-btn > span {
  display: flex;
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  height: 80%;
}
.g-lg-btn > span {
  display: flex;
  padding: 0px 5px;
  align-items: center;
  justify-content: center;
  height: 80%;
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
</style>
