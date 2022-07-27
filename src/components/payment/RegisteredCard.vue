<template>
  <template v-for="pay in p" :key="pay">
    <li
      class="g-checkableGrid_item g-lg-checkableGrid_item-inside"
      style="margin-bottom: 5px"
    >
      <div class="g-checkableGrid_label" style="padding: 25px 20px">
        <dl class="g-sm-formGrid-tr g-lg-formGrid-h">
          <dt>カード番号</dt>
          <dd>{{ pay.cardNoCopy }}</dd>
          <dt>有効期限</dt>
          <dd>{{ pay.expirationMonth }}月{{ pay.expirationYear }}年</dd>
        </dl>
      </div>

      <div class="g-checkableGrid_tail g-sm-flow">
        <p>
          <a
            class="g-btn g-btn-em g-btn-sm g-btn-w-sm"
            @click="deletedModal = true"
            role="button"
            aria-expanded="false"
            aria-controls="p-editModal"
            ><span name="updateList" id="0">変更</span></a
          >
        </p>
        <p class="g-unit-sm">
          <a
            class="g-link g-link-gray"
            role="button"
            @click="deleteModal = true"
          >
            <span
              class="material-symbols-outlined"
              style="color: #b3b3b3; cursor: pointer"
            >
              close
            </span>
            <span name="deleteList" id="0">削除</span></a
          >
        </p>
      </div>
    </li>
    <!-- modal01 リストを削除?-->
    <GDialog v-model="deleteModal">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="deleteModal = false"
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
              {{ pay.cardNoCopy }}のクレジットカード情報を削除します。<br />
              よろしいですか？
            </p>
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="pay.id"
                @click="
                  deleteList(pay.id);
                  deletedModal = true;
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
    <GDialog v-model="deletedModal">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">
              クレジットカード情報の削除
            </p>
            <button
              @click="deletedModal = false"
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
            <p id="modalMessage">クレジットカード情報を削除しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal03 情報の変更?-->
    <GDialog v-model="deleteModal">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">リストを作成</p>
            <button
              @click="deleteModal = false"
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
            <select
              id="p-expire-new-a"
              name=""
              required
              aria-required="true"
              aria-describedby="p-expire-new-a_alert"
              aria-label="カード有効期限の月"
              data-validation-rules='[{"action":"merge","subjects":["#p-expire-new-b"],"dest":"#p-expire-new-a-expire-new-b_alert"}]'
            >
              <!-- <option v-for="m in monthList" value="" selected></option> -->
            </select>
            <div class="button-delete-div">
              <button
                class="button-delete"
                :id="pay.id"
                @click="
                  deleteList(pay.id);
                  deletedModal = true;
                "
              >
                <span>削除する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </GDialog>
    <!-- modal04 情報の変更した-->
    <GDialog v-model="deletedModal">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">
              クレジットカード情報の削除
            </p>
            <button
              @click="deletedModal = false"
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
            <p id="modalMessage">クレジットカード情報を削除しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
  </template>
</template>

<script setup lang="ts">
import { useStore } from "../../store/index";
import { onMounted, computed, ref } from "vue";

const store = useStore();
onMounted(() => {
  store.dispatch("setPayment");
});
const p = computed(() => store.getters.getPaymentList);

const deleteModal = ref(false);
const deletedModal = ref(false);

const deleteList = (id: number) => {
  store.dispatch("deletePayment", id);
  deleteModal.value = false;
};
let monthList: string[] = [];
for (let i = 1; i < 13; i++) {
  if (i < 10) {
    monthList[i - 1] = "0" + i;
  } else {
    monthList[i - 1] = i + "";
  }
}
</script>

<style>
.g-lg-checkableGrid_item-inside {
  -ms-grid-rows: auto 1fr;
  grid-template-rows: auto 1fr;
  -ms-grid-columns: auto 1fr auto;
  grid-template-columns: auto 1fr auto;
}
.g-checkableGrid_item {
  display: -ms-grid;
  display: grid;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-checkableGrid .g-checkableGrid_control:empty,
.g-lg-checkableGrid .g-checkableGrid_control:empty {
  padding-left: 0;
}
.g-checkableGrid .g-checkableGrid_control,
.g-lg-checkableGrid .g-checkableGrid_control {
  padding: 25px 20px;
}

.g-lg-checkableGrid_item-inside .g-checkableGrid_control {
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1/3;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-checkableGrid .g-checkableGrid_control,
.g-lg-checkableGrid .g-checkableGrid_control {
  display: flex;
  align-items: center;
  padding: 15px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 3;
  grid-row: 1/4;
  -ms-grid-column: 1;
  grid-column: 1;
}
.g-checkableGrid .g-checkableGrid_label {
  padding: 25px 20px 25px 0;
}
.g-lg-checkableGrid_item-inside .g-checkableGrid_label {
  -ms-grid-row: 1;
  grid-row: 1;
  -ms-grid-column: 2;
  grid-column: 2;
}
.g-lg-formGrid-h {
  display: flex;
  flex-wrap: wrap;
}
.g-formGrid-h > dt,
.g-lg-formGrid-h > dt {
  padding-right: 25px;
  padding-left: 20px;
}
.g-formGrid-h > dt,
.g-formGrid-tr > dt,
.g-lg-formGrid-h > dt,
.g-lg-formGrid-tr > dt {
  font-weight: bold;
  display: flex;
  width: 34%;
  align-items: center;
}
.g-formGrid-h > *,
.g-lg-formGrid-h > * {
  padding-top: 10px;
  padding-bottom: 10px;
}
.g-lg-checkableGrid_item-inside .g-checkableGrid_tail {
  padding: 25px 20px 25px 0;
}
.g-lg-checkableGrid_item-inside .g-checkableGrid_tail {
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1/3;
  -ms-grid-column: 3;
  grid-column: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 15px 15px 0;
}
.g-btn-w-sm {
  width: auto;
  min-width: 106px;
  font-size: 1rem;
  line-height: 1;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}

.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 30px;
  padding: 3px 18px 3px 14px;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
}
.g-unit-sm,
.g-lg-unit-sm {
  margin-top: 0px !important;
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
.g-formGrid-h > *:nth-of-type(n + 2),
.g-lg-formGrid-h > *:nth-of-type(n + 2) {
  border-top: 1px dashed #e6e6e6;
}
.g-lg-formGrid-h > *:nth-of-type(n + 2) {
  border-top: 1px dashed #e6e6e6;
}
.g-lg-formGrid-h > dd {
  width: 66%;
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
