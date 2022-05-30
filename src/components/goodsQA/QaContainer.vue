<template>
  <h2 class="g-h-2 g-h-i p-hd">
    <!-- <i class="g-s g-s-comment" aria-hidden="true"></i> -->
    <span class="material-symbols-outlined"> sms </span>
    <span>商品Q&amp;A</span>
  </h2>
  <qa-list></qa-list>
  <question-post></question-post>
</template>

<script setup>
import QaList from "./QaList.vue";
import QuestionPost from "./QuestionPost.vue";
</script>

<style>
.p-hd {
  font-size: 1.8rem;
  margin-bottom: 13px;
}

.g-h-2,
.g-lg-h-2 {
  font-size: 2.4rem;
  margin-bottom: calc(30px - 0.6rem);
}
.g-h-i,
.g-lg-h-i {
  display: flex;
  align-items: center;
}
.g-s-comment {
  background-position: -13em -13em;
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

* {
  box-sizing: border-box;
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

#ZVCQA {
  font-size: 14px;
  margin-bottom: 30px;
  color: #333;
  padding: 0;
}

#ZVCQA div.zv-cqa-step {
  box-shadow: 0 1px 0 0 #dbdbdb;
}

#ZVCQA .zv-cqa-step-link {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  display: inline-block;
  padding-bottom: 5px;
}

#ZVCQA .zv-select-wrap {
  overflow: hidden;
  position: relative;
  border: 1px solid #bdc3c7;
  border-radius: 3px;
  background: #ffffff;
  width: auto;
  display: inline-block;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 20%);
  box-shadow: inner 0 1px 2px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
}

#ZVCQA .zv-select {
  padding-right: 1em;
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: ellipsis;
  border: none;
  outline: none;
  background: transparent;
  background-image: none;
  box-shadow: none;
  -webkit-appearance: none;
  appearance: none;
  padding: 4px 38px 4px 8px;
  font-size: 13px;
}

.material-symbols-outlined {
  color: #009e96;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}
</style>
