<template>
  <el-form
    ref="ruleFormRef"
    :model="p"
    label-width="0px"
    class="demo-dynamic"
    :rules="rules"
    :size="formSize"
    :label-position="formPosition"
  >
    <div class="main__inner-wrapper">
      <div class="g-bodyArea g-inner">
        <div class="g-main">
          <h1 v-if="sameEmailError">メール送信が出来ませんでした</h1>
          <div class="g-layout_head">
            <h1>変更後メールアドレス入力</h1>
            <p class="g-lead">
              変更したいメールアドレスを入力のうえ、送信してください。
            </p>
            <p class="g-lead">
              ご入力いただいたメールアドレス宛にニトリネットから送信される確認メールをご確認ください。
            </p>
            <div class="g-error g-error_efo" v-if="sameEmailError">
              <p class="g-error_h">入力内容をご確認ください。</p>
              <p style="color: #4d4c4c; font-size: 0.8rem">
                ・現在ログインしている会員のメールアドレスと同じメールアドレスが入力されています。ご確認ください。
              </p>
            </div>
            <!-- <div class="g-error g-error_efo">
                <p class="g-error_h">入力内容をご確認ください。</p>
                <p style="color: #4d4c4c; font-size: 0.8rem">
                  ・現在ログインしている会員のメールアドレスと同じメールアドレスが入力されています。ご確認ください。
                </p>
              </div> -->
          </div>

          <div class="g-layout_body">
            <dl class="g-sm-formGrid-v g-lg-formGrid-h g-block-xs">
              <dt></dt>
              <dd>
                <el-form-item prop="newEmail" label="" type="email">
                  <div class="flexbox" style="width: 800px">
                    <label for="p-mail" style="width: 250px"
                      >メールアドレス
                      <span class="g-label-required"> 必須</span></label
                    >
                    <el-input
                      v-model="p.newEmail"
                      placeholder="nitoritarou@nitori.jp"
                      style="width: 500px; margin-left: 10px"
                    />
                  </div>
                </el-form-item>
                <!-- <input
                  id="p-mail"
                  name="email"
                  class="g-input g-input-sm g-fw"
                  inputmode="email"
                  data-validation-rules='[{"action":"hankaku"},"mail",{"rule":"length","max":100},{"action":"validate","subjects":["#p-mail-re"]}]'
                  aria-describedby="p-mail_alert"
                  aria-required="true"
                  placeholder="nitoritarou@nitori.jp"
                  type="text"
                  autocapitalize="off"
                  required
                  value=""
                /> -->
                <div
                  class="g-formGrid_error"
                  id="p-mail_alert"
                  role="alert"
                ></div>
              </dd>
              <dt></dt>
              <dd>
                <p class="g-formGrid_note">
                  コピー・貼り付けはせずに入力してください。
                </p>
                <el-form-item prop="checkEmail" label="" type="email">
                  <div class="flexbox" style="width: 800px">
                    <label for="p-mail-re" style="width: 250px"
                      ><span>メールアドレス<small>（確認用）</small></span
                      ><span class="g-label-required">必須</span></label
                    ><el-input
                      v-model="p.checkEmail"
                      placeholder="nitoritarou@nitori.jp"
                      style="width: 500px; margin-left: 10px"
                    />
                  </div>
                </el-form-item>
                <!-- <input
                  id="p-mail-re"
                  name="checkEmail"
                  class="g-input g-input-sm g-fw"
                  inputmode="email"
                  data-validation-rules='[{"action":"hankaku"},"mail",{"rule":"length","max":100},{"rule":"match","name":"メールアドレス","subject":"#p-mail"},{"action":"validate","subjects":["#p-mail"]}]'
                  aria-describedby="p-mail-re_alert"
                  aria-required="true"
                  placeholder="nitoritarou@nitori.jp"
                  type="text"
                  autocapitalize="off"
                  required
                  value=""
                /> -->
              </dd>
            </dl>

            <section class="g-block">
              <ul class="g-list g-list-note g-unit">
                <li>
                  ※ご利用キャリアのメールソフトによっては、ニトリネットからのメール（info@mail.nitori-net.jp)が、迷惑メールへ分類されている可能性や、受信拒否設定がされている可能性があります。メールが届かない場合は、以下のページの手順にて迷惑メールフォルダおよび設定をご確認ください。
                  <br />メールが受信できない場合：
                  <a
                    class="g-link-u"
                    href="https://www.nitori.co.jp/customersupport/faq/351/"
                    target="_blank"
                    >https://www.nitori.co.jp/customersupport/faq/351/</a
                  >
                </li>
              </ul>
            </section>
          </div>
          <div class="g-layout_foot">
            <div class="g-sm-foot-v g-lg-foot-h g-foot-lg">
              <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                  >更新する
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">戻る</el-button>
              </el-form-item>
              <!-- <div>
                  <input
                    id="sourceId"
                    name="sourceId"
                    value="CR-042"
                    type="hidden"
                  /><input
                    id="buttonName"
                    name="buttonName"
                    type="hidden"
                    value=""
                  /><button
                    id="formSubmitBtn"
                    class="g-btn g-btn-cv g-btn-w-md"
                    type="submit"
                  >
                    <span>送信する</span>
                  </button>
                </div>
                <p>
                  <a class="g-btn g-btn-w-md" href="/ec/login">
                    <i class="g-i g-i-arrow-l" aria-hidden="true"></i>
                    <span>戻る</span>
                  </a>
                </p> -->
            </div>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </el-form>
  <!-- {{ p.email }} <br />
  {{ p.newEmail }} -->
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { onMounted } from "vue";
import { useStore } from "../../store/index";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
onMounted(() => {
  //   await nextTick();
  store.dispatch("setProfile");
});
const p = computed(() => store.getters.getProfile);
const formSize = ref("default");
const formPosition = ref("right");
const ruleFormRef = ref<FormInstance>();
const sameEmailError = ref(false);

const validatePass = (rule: any, value: any, callback: any) => {
  if (p.value.checkEmail !== "") {
    if (!ruleFormRef.value) return;
    ruleFormRef.value.validateField("checkEmail", () => null);
  }
  callback();
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== p.value.newEmail) {
    callback(new Error("入力されたメールアドレスが一致していません。"));
  } else {
    callback();
  }
};

const rules = reactive({
  newEmail: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },
    {
      type: "email",
      message: "メールアドレスの形式が正しくありません。",
      trigger: ["blur", "change"],
    },
    { validator: validatePass, trigger: "blur" },
  ],
  checkEmail: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },

    { validator: validatePass2, trigger: ["blur", "change"] },
  ],
});

//更新する&戻る
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (p.value.newEmail === p.value.email) {
        sameEmailError.value = true;
      } else {
        store.dispatch("updateEmail", p.value);
        router.push({ path: "/my-account/customerInfoCompleted" }); //更新後、新しいページに遷移
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  store.dispatch("setProfile");
};
//----------------------------------------
</script>

<style scoped>
.g-layout_foot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.g-layout_head {
  margin-bottom: 35px;
}
.g-block,
.g-lg-block {
  margin-top: 40px;
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
.g-unit,
.g-lg-unit {
  margin-top: 15px !important;
}
.g-list-note,
.g-lg-list-note {
  font-size: 1.2rem;
  line-height: 1.58333;
  text-indent: -1em;
  color: #808080;
}

.errorMessage {
  font-size: 0.8rem;
  margin-top: -10px;
  color: #eb6157;
  margin-left: 200px;
}
.changePW {
  font-size: 0.9rem;
  color: #009e96;
  margin-left: 200px;
  margin-top: 0px;
  cursor: pointer;
}
.g-formGrid_note {
  margin-left: 260px;
  margin-bottom: 10px;
  color: #4d4c4c;
  font-size: 0.8rem;
}
.g-list-note,
.g-lg-list-note {
  font-size: 0.8rem;
  line-height: 1.5;
  text-indent: -1em;
  color: #808080;
}
.g-layout-narrow .g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-link-u,
.g-lg-link-u,
.g-link-u-kiyaku {
  text-decoration: underline;
  color: #009e96;
}

.g-align-tr {
  text-align: right !important;
}
.g-unit {
  margin-top: 15px !important;
}
.g-pane-sm {
  padding: 20px;
}
.g-pane-border {
  overflow: hidden;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-flex-wrap,
.g-lg-flex-wrap {
  flex-wrap: wrap;
}
.g-flex-h,
.g-lg-flex-h {
  display: flex;
}
.g-weight-b,
.g-lg-weight-b {
  font-weight: bold !important;
}
.g-mr-30,
.g-lg-mr-30 {
  margin-right: 30px !important;
}
.g-unit,
.g-lg-unit {
  margin-top: 15px !important;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
.flexbox {
  display: flex;
  align-items: center;
}
.g-lg-formGrid-h .g-label-required,
.g-lg-formGrid-tr .g-label-required,
.g-lg-formGrid-v .g-label-required {
  margin-left: 10px;
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 0.8rem;
}
.g-label-required {
  color: #eb6157;
  border: 1px solid #eb6157;
  padding: 0px 3px;
}
.g-error {
  padding: 10px;
}
.g-error {
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fcf0f1;
}
.g-error_h {
  font-weight: bold;
  margin-bottom: 10px;
  color: #eb6157;
}
</style>
