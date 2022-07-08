<template>
  <el-form
    ref="ruleFormRef"
    :model="p"
    :rules="rules"
    label-width="150px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    :label-position="formPosition"
  >
    <div>
      <p class="g-formGrid_note">
        「転居先（地名）」、「勤務先」など認識しやすい名称を入力してください。
        「自宅」は会員情報で設定済みのため、入力できません。
      </p>
      <el-form-item label="名称" prop="addressName">
        <el-input v-model="p.addressName" placeholder="転居先" />
      </el-form-item>
    </div>

    <!-- 氏名 -->
    <div>
      <div class="flexbox">
        <el-form-item label="氏名" prop="lastName">
          <el-input
            name="lastName"
            id="lastName"
            v-model="p.lastName"
            style="width: 100px"
            @input="handleNameInput"
            placeholder="姓"
          />
        </el-form-item>
        <el-form-item label="" label-width="0px" prop="firstName">
          <el-input
            name="firstName"
            id="firstName"
            v-model="p.firstName"
            style="width: 100px; margin-left: 10px"
            placeholder="名"
            @input="handleNameInput2"
          />
        </el-form-item>
      </div>

      <div class="flexbox">
        <el-form-item label="氏名（カナ）" prop="lastNameKana">
          <el-input
            name="furigana1"
            id="furiganaLast"
            v-model="p.lastNameKana"
            style="width: 150px"
            @input="checkKana"
            placeholder="セイ"
          />
        </el-form-item>
        <el-form-item label="" label-width="0px" prop="firstNameKana">
          <el-input
            name="furigana2"
            id="furiganaFirst"
            v-model="p.firstNameKana"
            style="width: 150px; margin-left: 10px"
            @input="checkKana"
            placeholder="メイ"
          />
        </el-form-item>
      </div>
      <p v-if="kanaError === true" class="errorMessage">
        20文字以内の全角カタカナで入力してください。
      </p>
      <p
        v-if="kanaReError === true"
        style="
          font-size: 0.8rem;
          margin-top: -10px;
          color: #eb6157;
          margin-left: 200px;
        "
      >
        入力必須項目です。
      </p>
    </div>

    <!-- 電話番号 -->
    <div id="tel">
      <div class="flexbox" style="margin-bottom: 30px">
        <el-form-item label="電話番号1" prop="telA">
          <el-input
            v-model="p.telA"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="03"
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px">-</span>
        <el-form-item label="" prop="telB" label-width="10px">
          <el-input
            v-model="p.telB"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="0000"
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="telC" label-width="10px">
          <el-input
            v-model="p.telC"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="0000"
          />
        </el-form-item>
      </div>
      <div class="flexbox" style="margin-bottom: 30px">
        <el-form-item label="電話番号2" prop="tel2A">
          <el-input
            v-model="p.tel2A"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="03"
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="tel2B" label-width="10px">
          <el-input
            v-model="p.tel2B"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="0000"
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="tel2C" label-width="10px">
          <el-input
            v-model="p.tel2C"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="0000"
          />
        </el-form-item>
      </div>
    </div>

    <!-- 住所 -->
    <div id="address">
      <p class="g-formGrid_note">
        ハイフン不要・数字で入力してください。<br />
        事業所の個別郵便番号はご使用いただけません。
      </p>
      <div class="flexbox">
        <el-form-item label="郵便番号" prop="postCode">
          <el-input
            v-model="p.postCode"
            style="width: 120px"
            oninput="value=value.replace(/\D/g, '')"
            placeholder="1234567"
          />
        </el-form-item>
        <el-button
          @click="searchAddress"
          style="margin-bottom: 18px; margin-left: 10px"
          >住所検索
        </el-button>
        <p style="margin-bottom: 18px; margin-left: 10px">
          <a target="_blank" href="http://www.post.japanpost.jp/zipcode"
            ><span>郵便番号を調べる</span></a
          >
        </p>
      </div>
      <p
        v-if="postError === true"
        style="
          font-size: 0.8rem;
          margin-left: 200px;
          margin-top: -10px;
          color: #eb6157;
        "
      >
        正しい郵便番号を入力して下さい。<br />
        ※事業所固有の郵便番号はご利用できません。<br />
        ※郵便番号が不明でしたら、【郵便番号を調べる】よりご確認ください。<br />
      </p>
      <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
      <el-form-item label="都道府県" prop="addressPref">
        <el-input
          v-model="p.addressPref"
          :disabled="true"
          style="width: 120px"
        />
      </el-form-item>

      <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
      <el-form-item label="市区町村" prop="addressCity">
        <el-input v-model="p.addressCity" :disabled="true" />
      </el-form-item>

      <p class="g-formGrid_note">町名を入力してください。</p>
      <el-form-item label="町名" prop="addressArea">
        <el-input v-model="p.addressArea" placeholder="北区新琴似七条" />
      </el-form-item>

      <p class="g-formGrid_note">
        左端のみ必須です。番地がない場合は左端に1を入力してください。
      </p>
      <div class="flexbox">
        <el-form-item label="丁目番地" prop="streetname1">
          <el-input
            v-model="p.streetname1"
            style="width: 100px"
            placeholder="1"
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="streetname2" label-width="10px">
          <el-input v-model="p.streetname2" style="width: 100px" />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="streetname3" label-width="10px">
          <el-input v-model="p.streetname3" style="width: 100px" />
        </el-form-item>
      </div>

      <el-form-item label="建物名称" prop="buildingName">
        <el-input v-model="p.buildingName" placeholder="ニトリビル" />
      </el-form-item>

      <p class="g-formGrid_note">
        英数字で入力してください。<br />
        部屋番号に英数字以外が含まれている場合は、建物名称欄に入力してください。
      </p>
      <el-form-item label="部屋番号" prop="roomNumber">
        <el-input
          v-model="p.roomNumber"
          style="width: 120px"
          placeholder="101"
        />
      </el-form-item>

      <el-form-item label="建物種別">
        <el-radio-group v-model="p.conditionValue" prop="conditionValue">
          <el-radio label="戸建て" />
          <el-radio label="集合住宅" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="エレベータ">
        <el-radio-group v-model="p.liftValue" prop="liftValue">
          <el-radio label="なし" />
          <el-radio label="あり" />
        </el-radio-group>
      </el-form-item>
    </div>
    <!-- 既定の配送先に設定する-->
    <div class="g-align-tc g-unit-xl">
      <p>
        <label class="g-checkable">
          <input type="checkbox" name="defaultAddress" value="true" />
          <span
            ><span class="g-checkable_label">
              既定の配送先に設定する</span
            ></span
          >
        </label>
      </p>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, defineExpose } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { onMounted, nextTick } from "vue";
import * as AutoKana from "vanilla-autokana";
import { useStore } from "../../store/index";
onMounted(async () => {
  await nextTick();
  autokana1 = AutoKana.bind("#lastName");
  autokana2 = AutoKana.bind("#firstName");
});
const store = useStore();
const p = reactive({
  id: Number,
  userId: "",
  addressName: "",
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  telA: "",
  telB: "",
  telC: "",
  tel2A: "",
  tel2B: "",
  tel2C: "",
  postCode: "",
  addressPref: "",
  addressCity: "",
  addressArea: "",
  streetname1: "",
  streetname2: "",
  streetname3: "",
  buildingName: "",
  roomNumber: "",
  conditionValue: "",
  liftValue: "",
});
// const password = computed(() => store.getters.getProfile.password);

const formSize = ref("default");
const formPosition = ref("left");

const ruleFormRef = ref<FormInstance>();
//  ruleFormRef
//----------------------------------------

//フォームのふりがなを自動入力する
let autokana1;
let autokana2;

//「ひらがな → カタカナ」の変換function
function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}
//input事件
const handleNameInput = () => {
  p.lastNameKana = autokana1.getFurigana(); //ふりがなを自動入力
  p.lastNameKana = hiraToKata(p.lastNameKana); //ふりがな⇒カタカナ
};

const handleNameInput2 = () => {
  p.firstNameKana = autokana2.getFurigana(); //ふりがなを自動入力
  p.firstNameKana = hiraToKata(p.firstNameKana); //ふりがな⇒カタカナ
};
//-----------------------------------------------------

//氏名（カナ） カタカタ入力チェック と 半角 → 全角の変換
function isKataKana(s) {
  return !!s.match(/^[ァ-ヶー ｦ-ﾟ]*$/); // 「 」は全角スペースです.
}
// console.log(isKataKana("シブヤｼﾌﾞﾔ"));// true

//          半角 → 全角（カタカナ） 対応表（マッピング）
function hankana2Zenkana(str) {
  const kanaMap = {
    ｶﾞ: "ガ",
    ｷﾞ: "ギ",
    ｸﾞ: "グ",
    ｹﾞ: "ゲ",
    ｺﾞ: "ゴ",
    ｻﾞ: "ザ",
    ｼﾞ: "ジ",
    ｽﾞ: "ズ",
    ｾﾞ: "ゼ",
    ｿﾞ: "ゾ",
    ﾀﾞ: "ダ",
    ﾁﾞ: "ヂ",
    ﾂﾞ: "ヅ",
    ﾃﾞ: "デ",
    ﾄﾞ: "ド",
    ﾊﾞ: "バ",
    ﾋﾞ: "ビ",
    ﾌﾞ: "ブ",
    ﾍﾞ: "ベ",
    ﾎﾞ: "ボ",
    ﾊﾟ: "パ",
    ﾋﾟ: "ピ",
    ﾌﾟ: "プ",
    ﾍﾟ: "ペ",
    ﾎﾟ: "ポ",
    ｳﾞ: "ヴ",
    ﾜﾞ: "ヷ",
    ｦﾞ: "ヺ",
    ｱ: "ア",
    ｲ: "イ",
    ｳ: "ウ",
    ｴ: "エ",
    ｵ: "オ",
    ｶ: "カ",
    ｷ: "キ",
    ｸ: "ク",
    ｹ: "ケ",
    ｺ: "コ",
    ｻ: "サ",
    ｼ: "シ",
    ｽ: "ス",
    ｾ: "セ",
    ｿ: "ソ",
    ﾀ: "タ",
    ﾁ: "チ",
    ﾂ: "ツ",
    ﾃ: "テ",
    ﾄ: "ト",
    ﾅ: "ナ",
    ﾆ: "ニ",
    ﾇ: "ヌ",
    ﾈ: "ネ",
    ﾉ: "ノ",
    ﾊ: "ハ",
    ﾋ: "ヒ",
    ﾌ: "フ",
    ﾍ: "ヘ",
    ﾎ: "ホ",
    ﾏ: "マ",
    ﾐ: "ミ",
    ﾑ: "ム",
    ﾒ: "メ",
    ﾓ: "モ",
    ﾔ: "ヤ",
    ﾕ: "ユ",
    ﾖ: "ヨ",
    ﾗ: "ラ",
    ﾘ: "リ",
    ﾙ: "ル",
    ﾚ: "レ",
    ﾛ: "ロ",
    ﾜ: "ワ",
    ｦ: "ヲ",
    ﾝ: "ン",
    ｧ: "ァ",
    ｨ: "ィ",
    ｩ: "ゥ",
    ｪ: "ェ",
    ｫ: "ォ",
    ｯ: "ッ",
    ｬ: "ャ",
    ｭ: "ュ",
    ｮ: "ョ",
    "｡": "。",
    "､": "、",
    ｰ: "ー",
    "｢": "「",
    "｣": "」",
    "･": "・",
  };

  let reg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g");
  return str
    .replace(reg, function (match) {
      return kanaMap[match];
    })
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜");
}

const kanaError = ref(false);
const kanaReError = ref(false);
const checkKana = () => {
  p.lastNameKana = hankana2Zenkana(p.lastNameKana);
  if (isKataKana(p.lastNameKana)) {
    if (p.lastNameKana.length <= 20 && p.lastNameKana.length > 0) {
      kanaError.value = false;
      kanaReError.value = false;
    } else if (p.lastNameKana.length > 20) {
      kanaError.value = true;
      kanaReError.value = false;
    } else if (p.lastNameKana.length === 0) {
      kanaReError.value = true;
      kanaError.value = false;
    }
  } else {
    kanaError.value = true;
    kanaReError.value = false;
  }
};
//----------------------------------------

const rules = reactive<FormRules>({
  addressName: [{ required: true }],
  lastName: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "change",
    },
    {
      max: 10,
      message: "10文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  firstName: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "change",
    },
    {
      max: 10,
      message: "10文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  lastNameKana: [
    { required: true, message: "", trigger: ["blur", "change"] },
    {
      max: 20,
      // message: "20文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  firstNameKana: [
    { required: true, message: "", trigger: ["blur", "change"] },
    {
      max: 20,
      // message: "20文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  telA: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      min: 2,
      max: 5,
      message: "2桁以上5桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  telB: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      min: 1,
      max: 4,
      message: "1桁以上4桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  telC: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      min: 3,
      max: 4,
      message: "3桁以上4桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  tel2A: [
    {
      min: 2,
      max: 5,
      message: "2桁以上5桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  tel2B: [
    {
      min: 1,
      max: 4,
      message: "1桁以上4桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  tel2C: [
    {
      min: 3,
      max: 4,
      message: "3桁以上4桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  postCode: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      min: 7,
      max: 7,
      message: "郵便番号は半角数字7文字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  addressArea: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      max: 40,
      message: "40文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  streetname1: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: ["blur", "change"],
    },
    {
      max: 5,
      message: "5桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  buildingName: [
    {
      max: 50,
      message: "50文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  roomNumber: [
    {
      max: 5,
      message: "5桁以内の数字で入力してください。",
      trigger: ["blur", "change"],
    },
  ],
  conditionValue: [
    {
      required: true,
    },
  ],
  liftValue: [
    {
      required: true,
    },
  ],
});
//登録する

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      store.dispatch("addAddress", p);
    } else {
      console.log("error submit!", fields);
    }
  });
};
defineExpose({
  submitForm,
  ruleFormRef,
});
//----------------------------------------

//.郵便番号検索から住所を表示 API
const headers = { Accept: "application/json" };
const error = ref("");
const postError = ref(false);

const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + p.postCode;
  const info = await fetch(url, { headers });
  const data = await info.json();

  if (data.status === 400) {
    //エラー時
    error.value = data.message;
  } else if (data.results === null) {
    // error.value = "郵便番号から住所が見つかりませんでした。";
    postError.value = true;
  } else {
    p.addressPref = data.results[0].address1;
    p.addressCity = data.results[0].address2;
    p.addressArea = data.results[0].address3;
    postError.value = false;
  }
};
//----------------------------------------------
</script>

<style scoped>
ul,
ol {
  padding: 0;
  list-style: none;
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
  margin-bottom: 5px;
  color: #808080;
  font-size: 0.8rem;
  margin-left: 150px;
}
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
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
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
.g-checkableGrid_item-active {
  background-color: #e9f5f4;
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
.g-layout_foot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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
