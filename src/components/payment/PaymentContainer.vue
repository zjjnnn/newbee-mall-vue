<template>
  <div style="width: 800px">
    <h1>クレジットカードの変更・登録</h1>
  </div>

  <!-- modal -->
  <GDialog v-model="isShow">
    <div class="modal">
      <div class="g-modal_el">
        <header class="g-modal_head">
          <p class="g-modal_h" id="p-messageModal_h">
            クレジットカード情報の登録
          </p>
          <button
            @click="isShow = false"
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
          <p id="modalMessage">クレジットカード情報の登録が完了しました。</p>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isShow = ref(false);
</script>
<style scoped>
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
h1 {
  margin-top: 20px;
  margin-bottom: 30px;
}
.selected {
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  padding: 20px;
  background-color: #e9f5f4;
}
.notSelected {
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  padding: 20px;
  background-color: #fff;
}
.checkable-label {
  font-size: 1rem;
  font-weight: bold;
}
ul,
ol {
  padding: 0;
  list-style: none;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.g-layout-narrow .g-layout_head,
.g-layout-narrow .g-layout_body {
  width: 800px;
}
.g-checkableGrid_item-accordion,
.g-checkableGrid_item,
.g-lg-checkableGrid_item {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
}
.g-checkableGrid .g-checkableGrid_control,
.g-lg-checkableGrid .g-checkableGrid_control {
  padding: 25px 20px;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.form-container {
  margin: 25px 20px;
}
.g-layout_foot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.g-btn-cv {
  color: white;
  font-size: 1rem;
  border-color: #eb6157;
  background-color: #eb6157;
  padding: 5px 10px;
  height: 50px;
  width: 320px;
}

.g-btn-cv:hover {
  opacity: 0.8;
  color: white;
  font-size: 1rem;
  border-color: #eb6157;
  background-color: #eb6157;
  padding: 5px 10px;
}
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
  padding: 15px;
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
