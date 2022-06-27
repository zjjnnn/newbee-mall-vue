<template>
  <div class="g-layout_head">
    <div class="g-lg-butterfly g-align-gt">
      <h1>注文履歴</h1>
      <div class="g-sm-unit-lg">
        <p>
          <router-link
            class="g-btn g-btn-sm g-btn-em"
            to="/my-account/orders"
            @click="isShow = true"
            ><span id="ajax">店舗購入履歴を取得する</span></router-link
          >
        </p>
        <ul class="g-list g-list-note g-unit-sm">
          <li>※上記ボタンで最新の「店舗」購入履歴を取得できます。</li>
          <li>※約15分程度で履歴が反映されます。※メンテナンス時を除く</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- modal -->
  <GDialog v-model="isShow">
    <div class="modal">
      <div class="g-modal_el">
        <header class="g-modal_head">
          <p class="g-modal_h" id="p-messageModal_h">店舗購入履歴を取得する</p>
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
            店舗購入履歴の取得リクエストを受付けました。マイページにて約15分程度で履歴が反映されます。※メンテナンス時を除く
          </p>
        </div>
      </div>
    </div>
  </GDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isShow = ref(false);
</script>

<style scoped>
.g-lg-butterfly {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.g-align-gt {
  align-items: start;
}
.g-btn {
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  padding: 5px 10px;
}
.g-btn-sm {
  font-size: 0.8rem;
  color: #009e96;
}
a {
  text-decoration: none;
  color: #333;
}
.g-unit-sm {
  margin-top: 10px;
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
