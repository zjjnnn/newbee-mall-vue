<template>
  <div class="g-main">
    <div class="g-layout_lead"></div>
    <div class="g-layout-narrow">
      <div class="g-layout_head" style="margin-bottom: 90px">
        <h1>変更項目選択</h1>
        <p class="g-lead">
          メールアドレス、またはメールアドレス以外のご登録情報から変更したい項目を、以下から選択してください。
        </p>
      </div>
      <div class="g-layout_body g-layout_body-narrow">
        <section class="g-block">
          <div class="g-foot-v g-mt-0">
            <p class="g-align-tc">
              <a class="g-btn g-btn-cv g-btn-w-md" href="#"
                ><span>メールアドレスの変更</span></a
              >
            </p>
          </div>
        </section>
        <section class="g-block">
          <div class="g-foot-v g-mt-0">
            <p class="g-align-tc">
              <router-link
                class="g-btn g-btn-cv g-btn-w-md"
                to="/my-account/update-profile"
                ><span>メールアドレス以外の変更</span></router-link
              >
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.g-inner {
  width: 100%;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout_lead:empty {
  height: 40px;
}
.g-layout_lead {
  margin-bottom: calc(40px - 0.75rem);
}
.g-layout-narrow .g-layout_head {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
p {
  margin: 0;
}
.g-lead {
  margin-top: 13px;
  font-size: 1rem;
}
.g-layout-narrow .g-layout_body-narrow {
  width: 100%;
  max-width: 620px;
  margin: auto;
}
.g-block {
  margin-top: 40px;
}
section {
  display: block;
}
.g-foot-v,
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.g-align-tc {
  text-align: center !important;
}
.g-btn-w-md,
.g-lg-btn-w-md {
  width: auto;
  min-width: 320px;
}

.g-btn-cv {
  color: white;
  font-size: 1rem;
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}
a {
  text-decoration: none;
}
</style>
