<template>
  <div class="g-layout-narrow">
    <div class="g-layout_head">
      <h1>会員情報変更完了</h1>
    </div>
    <div class="g-layout_body">
      <div class="g-minContent">
        <span class="material-symbols-outlined bigIcon greenIcon">
          check_circle
        </span>

        <p class="g-h-2">会員情報の変更が完了しました。</p>
        <p class="g-font-lg g-sm-align-tl">
          ニトリネット、ニトリアプリへログインの上お買い物をお楽しみください。
        </p>
      </div>
    </div>
    <div class="g-layout_foot">
      <div class="g-sm-foot-v g-lg-foot-h g-foot-lg">
        <ul class="g-list">
          <li>
            <router-link
              class="g-btn g-btn-w-md router-link"
              to="/my-account"
              style="cursor: pointer"
              @mouseover="hover = true"
              @mouseleave="hover = false"
              ><span>ニトリネットにログイン</span
              ><span
                class="material-symbols-outlined g-i g-i-arrow-r greenIcon"
              >
                navigate_next
              </span>
            </router-link>
          </li>
          <li style="margin-top: 10px">
            <a class="g-link" href="/ec/characteristic/App/"
              ><span
                class="material-symbols-outlined g-i g-i-arrow-r greenIcon"
              >
                navigate_next </span
              ><span>アプリについて</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hover = false;
</script>

<style scoped>
.router-link {
  border: 1px solid #dbdbdb;
}

.router-link:hover {
  border: 1px solid #009e96;
}
.g-layout_head {
  font-size: 1rem;
  margin-top: 50px;
  margin-bottom: 30px;
}

.g-layout_lead {
  margin-bottom: calc(40px - 0.75rem);
}
.g-layout-narrow .g-layout_head,
.g-layout-narrow .g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-minContent {
  margin-bottom: 20px;
  padding: 40px 20px;
}
.g-h-2,
.g-lg-h-2 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: calc(30px - 0.6rem);
  margin-bottom: calc(30px - 0.6rem);
}

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
.g-minContent {
  padding: 25px 15px;
  text-align: center;
  background-color: #e9f5f4;
}

.bigIcon {
  font-size: 6rem;
}
.greenIcon {
  color: #009e96;
  cursor: pointer;
  font-weight: bold;
}

.g-foot-lg,
.g-lg-foot-lg {
  margin-top: 40px;
}
.g-foot-h,
.g-lg-foot-h {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
.g-foot-h > *,
.g-lg-foot-h > * {
  margin-right: 10px;
  margin-left: 10px;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
.g-btn-w-md,
.g-lg-btn-w-md {
  width: auto;
  min-width: 320px;
}
.g-btn,
.g-lg-btn {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;

  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
a {
  text-decoration: none;
  color: #333;
}

.g-btn > span,
.g-lg-btn > span {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
