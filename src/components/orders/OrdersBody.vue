<template>
  <div class="g-layout_body">
    <form
      id="myAccountOrdersForm"
      name="myAccountOrdersForm"
      data-validation="data-validation"
      action="/ec/my-account/orders"
      method="get"
      novalidate="true"
    >
      <dl class="p-historyMenu">
        <dt>
          <label for="p-period">注文時期を選択</label>
        </dt>
        <dd>
          <div class="g-select g-select-sm">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select id="orderTime" name="orderTime" @change="filterByDate">
              <option
                v-for="(t, index) in orderTime"
                :key="index"
                :value="t.value"
              >
                {{ t.time }}
              </option>
            </select>
          </div>
        </dd>
        <dt>
          <label for="p-status">注文状況を選択</label>
        </dt>
        <dd>
          <div class="g-select g-select-sm">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select
              id="orderStatus"
              name="orderStatus"
              @change="filterByStatus"
            >
              <option value="ALL">すべて</option>
              <option value="ORDERS">受注済</option>
              <option value="READY">出荷・お渡し準備中</option>
              <option value="SHIPPED">出荷・配送・お渡し済</option>
              <option value="CANCELLED">キャンセル済</option>
            </select>
          </div>
        </dd>
      </dl>
      <input
        id="cancelOrderCode"
        name="cancelOrderCode"
        type="hidden"
        value=""
      />
    </form>
    <div class="g-block-xs" v-if="length === 0">
      <p>注文履歴がありません。</p>
    </div>
    <div v-for="(order, index) in filteredList" :key="index">
      <order-item v-bind="order"></order-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderItem from "./OrderItem.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
const userId = "user01";
const store = useStore();
onMounted(() => {
  store.dispatch("setUserInfo", userId);
});
const thisYear = new Date().getFullYear();
const orderTime = [
  {
    value: "00",
    time: "過去半年分の注文",
  },
  {
    value: "10",
    time: thisYear + "年分の注文",
  },
  {
    value: "11",
    time: thisYear - 1 + "年分の注文",
  },
  {
    value: "12",
    time: thisYear - 2 + "年分の注文",
  },
  {
    value: "13",
    time: thisYear - 3 + "年分の注文",
  },
  {
    value: "14",
    time: thisYear - 4 + "年分の注文",
  },
];
const length = computed(() => store.getters.getFilteredList.length);
// const orderList = computed(() => store.getters.getOrderList);
const filteredList = computed(() => store.getters.getFilteredList);
let date = computed(() => store.getters.getDate);
console.log("date", date);
let status = computed(() => store.getters.getStatus);
console.log("status", status);

const filterByDate = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("setDate", e.target.value);
    store.commit("filterByDate");
  }
};
const filterByStatus = (e: Event) => {
  if (e.target instanceof HTMLSelectElement) {
    store.commit("setStatus", e.target.value);
    store.commit("filterByDate");
  }
};
</script>

<style scoped>
.g-layout_body {
  margin-top: 20px;
}
.g-layout-narrow {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.p-historyMenu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-historyMenu dt {
  font-weight: bold;
  margin-right: 25px;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  font-size: 1rem;
  right: 16px;
}
.g-select-sm .g-i {
  right: 7px;
}
.g-select .g-i {
  font-size: 1rem;
  right: 16px;
}
.g-select .g-i {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  font-size: 1rem;
  right: 14px;
  color: #009e96;
}
.g-i {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  font-size: 1rem;
  right: 14px;
  color: #009e96;
}
.g-i::before {
  float: left;
}
.g-i-dropdown::before {
  content: "\EA0A";
}
.g-select-sm select {
  height: 34px;
  padding-right: 33px;
}
.g-select select {
  width: 100%;
  padding: 0 39px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.g-select option {
  color: #333;
}
option {
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
