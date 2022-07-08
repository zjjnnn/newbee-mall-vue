<template>
  <div style="width: 800px">
    <h1>配送先住所の変更・登録</h1>
    <section>
      <ul class="g-checkableGrid p-shipping">
        <li
          class="g-checkableGrid_item g-checkableGrid_item-accordion"
          style="margin-bottom: 10px"
        >
          <div
            :class="addAddress === 'new' ? 'selected' : 'notSelected'"
            @click="
              open = !open;
              addAddress = 'new';
            "
          >
            <input
              type="radio"
              name="address"
              v-model="addAddress"
              value="new"
              style="margin: 0 5px"
            />
            <label class="checkable-label"> 新しい配送先住所を登録</label>
          </div>
          <div class="form-container" v-show="open === true">
            <address-new-form ref="addRef"></address-new-form>
          </div>
        </li>

        <li
          v-if="alLength && alLength > 0"
          class="g-checkableGrid_item g-checkableGrid_item-accordion"
        >
          <div
            :class="addAddress === 'old' ? 'selected' : 'notSelected'"
            @click="
              open1 = !open1;
              addAddress = 'old';
            "
          >
            <input
              type="radio"
              name="address"
              v-model="addAddress"
              value="old"
              style="margin: 0 5px"
            />
            <label class="checkable-label"> 登録済みの配送先住所を変更</label>
          </div>
          <div class="form-container" v-show="open1 === true">
            <address-form ref="updateRef"></address-form>
          </div>
        </li>
      </ul>
    </section>

    <div class="g-layout_foot">
      <el-form ref="ruleFormRef" class="demo-ruleForm" status-icon>
        <el-form-item>
          <el-button
            @mouseover="hover = true"
            @mouseleave="hover = false"
            class="g-btn-cv"
            type="primary"
            @click="submitForms()"
            >登録する
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- modal -->
    <GDialog v-model="isShow">
      <div class="modal">
        <div class="g-modal_el">
          <header class="g-modal_head">
            <p class="g-modal_h" id="p-messageModal_h">配送先を登録</p>
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
            <p id="modalMessage">配送先の登録が完了しました。</p>
          </div>
        </div>
      </div>
    </GDialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import AddressNewForm from "./AddressNewForm.vue";
import AddressForm from "./AddressForm.vue";
import { useStore } from "../../store/index";

import type { FormInstance } from "element-plus";
const ruleFormRef = ref<FormInstance>();

onMounted(async () => {
  await store.dispatch("setAddressList");
  if (alLength.value === 0) {
    addAddress.value = "new";
    open.value = true;
    open1.value = false;
  }
});
const alLength = computed(() => store.getters.getAddressList.length);
const open = ref(false);
const open1 = ref(true);
const addAddress = ref("old");
const store = useStore();
const hover = false;
const isShow = ref(false);
//更新する

const addRef = ref();
const updateRef = ref();
const submitForms = () => {
  if (addAddress.value === "new") {
    addRef.value.submitForm(addRef.value.ruleFormRef);
  } else {
    updateRef.value.submitForm(updateRef.value.ruleFormRef);
  }
  isShow.value = true;
  open.value = false;
  open1.value = true;
};

if (alLength.value > 0) {
  addAddress.value = "old";
}
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
