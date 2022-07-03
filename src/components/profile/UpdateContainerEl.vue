<template>
  <h1>お客様情報の確認・変更</h1>

  <p class="g-align-tr">
    <b class="g-sm-display-b">最終ログイン：</b>
    2022/07/01 10:38:47
  </p>
  <div class="g-pane g-pane-border g-pane-sm g-unit" style="margin: 0px 20px">
    <dl class="g-flex-h g-flex-wrap">
      <dt class="g-weight-b g-mr-30" id="p-mag">メールマガジン</dt>
      <dd>
        <label class="g-checkable">
          <input
            type="checkbox"
            name="emailMagazineDeliveryPreference"
            :value="p.emailMagazine"
            checked
            aria-labelledby="p-mag"
          />
          <span class="g-checkable_label">配信を希望する</span>
        </label>
      </dd>
      <dd class="g-fw g-unit">
        お得なキャンペーンや新製品情報などをお届けします。
      </dd>
    </dl>
  </div>
  <!-- <div style="display: flex">
    <dt style="width: 120px">
      <label for="p-say">会員種別</label>
    </dt>
    <dd>
      <div class="g-inputGroup g-inputGroup-line">{{ p.userType }}</div>
    </dd>
  </div> -->

  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    :label-position="formPosition"
  >
    <el-form-item label="会員種別" prop="name">
      {{ p.userType }}
    </el-form-item>

    <div class="flexbox">
      <el-form-item label="氏名" prop="name">
        <el-input v-model="p.lastName" style="width: 200px" />
      </el-form-item>
      <div class="g-inputGroup_static" style="margin-bottom: 18px">
        {{ p.firstName }}
      </div>
    </div>
    <div class="flexbox">
      <el-form-item label="氏名（カナ）" prop="name">
        <!-- <span class="g-label-required">必須</span> -->
        <div style="display: flex; flex-direction: column">
          <!-- <p class="g-formGrid_note">カタカナで入力してください。</p> -->
          <el-input v-model="p.lastNameKana" style="width: 200px" />
        </div>
      </el-form-item>
      <div class="g-inputGroup_static" style="margin-bottom: 18px">
        {{ p.firstNameKana }}
      </div>
    </div>
    <el-form-item label="メールアドレス" prop="name">
      {{ p.email }}
    </el-form-item>

    <!-- <div class="flexbox">
      <dt>
        <label for="p-mail">メールアドレス</label>
      </dt>
      <dd>
        <div class="g-inputGroup_static">
          {{ p.email
          }}<input type="hidden" name="emailAddress" :value="p.email" />
        </div>
      </dd>
    </div> -->

    <el-form-item label="電話番号1" prop="name">
      <div class="flexbox">
        <el-input v-model="p.telA" style="width: 100px" placeholder="03" />-
        <el-input v-model="p.telB" style="width: 100px" />-
        <el-input v-model="p.telC" style="width: 100px" />
      </div>
    </el-form-item>

    <el-form-item label="電話番号2" prop="name">
      <div class="flexbox">
        <el-input v-model="p.tel2A" style="width: 100px" placeholder="03" />-
        <el-input v-model="p.tel2B" style="width: 100px" />-
        <el-input v-model="p.tel2C" style="width: 100px" />
      </div>
    </el-form-item>

    <el-form-item label="性別">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="生年月日" prop="name">
      {{ p.birthyear }}年{{ p.birthmonth }}月{{ p.birthday }}日
    </el-form-item>

    <p class="g-formGrid_note">
      ハイフン不要・数字で入力してください。<br />
      事業所の個別郵便番号はご使用いただけません。
    </p>
    <div class="flexbox">
      <el-form-item label="郵便番号" prop="name">
        <el-input v-model="p.postCode" style="width: 200px" />
      </el-form-item>
      <p>
        <a target="_blank" href="http://www.post.japanpost.jp/zipcode"
          ><span>郵便番号を調べる</span></a
        >
      </p>
    </div>
    <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
    <el-form-item label="都道府県" prop="name">
      <el-input v-model="p.addressPref" style="width: 200px" />
    </el-form-item>

    <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
    <el-form-item label="市区町村" prop="name">
      <el-input v-model="p.addressCity" style="width: 200px" />
    </el-form-item>

    <p class="g-formGrid_note">町名を入力してください。</p>
    <el-form-item label="市区町村" prop="name">
      <el-input
        v-model="p.addressArea"
        style="width: 200px"
        placeholder="北区新琴似七条"
      />
    </el-form-item>

    <p class="g-formGrid_note">
      左端のみ必須です。番地がない場合は左端に1を入力してください。
    </p>
    <el-form-item label="丁目番地" prop="name">
      <div class="flexbox">
        <el-input
          v-model="p.streetname1"
          style="width: 100px"
          placeholder="03"
        />- <el-input v-model="p.streetname2" style="width: 100px" />-
        <el-input v-model="p.streetname3" style="width: 100px" />
      </div>
    </el-form-item>

    <el-form-item label="建物名称" prop="name">
      <el-input
        v-model="p.buildingName"
        style="width: 200px"
        placeholder="ニトリビル"
      />
    </el-form-item>

    <p class="g-formGrid_note">
      英数字で入力してください。<br />
      部屋番号に英数字以外が含まれている場合は、建物名称欄に入力してください。
    </p>
    <el-form-item label="部屋番号" prop="name">
      <el-input v-model="p.roomNumber" style="width: 200px" placeholder="101" />
    </el-form-item>

    <el-form-item label="建物種別" prop="resource">
      <el-radio-group v-model="checkedHouse">
        <el-radio label="戸建て" value="0" />
        <el-radio label="集合住宅" value="1" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="エレベータ" prop="resource">
      <el-radio-group v-model="checkedLift">
        <el-radio label="なし" value="0" />
        <el-radio label="あり" value="1" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

import { useStore } from "../../store/index";
import { onMounted, computed } from "vue";
const store = useStore();
onMounted(() => {
  store.dispatch("setProfile");
});
const p = computed(() => store.getters.getProfile);
// const checkedGender = computed(() => store.getters.getProfile.gender);
const checkedHouse = computed(() => store.getters.getProfile.conditionValue);
const checkedLift = computed(() => store.getters.getProfile.liftValue);

const formSize = ref("default");
const formPosition = ref("left");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "Hello",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "男",
  desc: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }));
</script>

<style scoped>
.g-layout-narrow .g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
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
}
</style>
