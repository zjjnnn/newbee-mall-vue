<template>
  <div style="width: 800px; margin-left: 5px">
    <h1>クレジットカードの変更・登録</h1>

    <section>
      <h2 v-if="length && length > 0">登録済みのクレジットカード</h2>
      <ul class="g-checkableGird">
        <registered-card></registered-card>
      </ul>
    </section>
    <section>
      <h2>新しいクレジットカードを登録</h2>
      <new-card />
    </section>
  </div>
</template>

<script lang="ts" setup>
import RegisteredCard from "./RegisteredCard.vue";
import NewCard from "./NewCard.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const store = useStore();
onMounted(() => {
  store.dispatch("setPayment");
});
const length = computed(() => store.getters.getPaymentList.length);
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
h2 {
  margin: 20px 0;
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
