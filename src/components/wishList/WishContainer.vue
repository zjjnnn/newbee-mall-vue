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
          aria-describedby="p-list-new_alert"
          data-validation-rules='[{"rule":"length","max":20}]'
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
          @click="isShow = true"
        >
          <span>リストを作成</span></a
        >
      </p>
    </div>
    <!-- modal -->
    <GDialog v-model="isShow">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="isShow = false"
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
    <wish-item></wish-item>
  </div>
</template>

<script setup lang="ts">
import WishItem from "./WishItem.vue";
import { ref } from "vue";
const isShow = ref(false);
</script>

<style scoped>
.g-layout-narrow {
  width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-layout_head {
  margin-bottom: 20px;
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
