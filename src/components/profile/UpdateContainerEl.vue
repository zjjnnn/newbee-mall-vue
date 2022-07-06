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
            v-model="p.emailMagazine"
            aria-labelledby="p-mag"
          />
          <span class="g-checkable_label" style="margin-left: 5px"
            >配信を希望する</span
          >
        </label>
      </dd>
      <dd class="g-fw g-unit">
        お得なキャンペーンや新製品情報などをお届けします。
      </dd>
    </dl>
  </div>

  <el-form
    ref="ruleFormRef"
    :model="p"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
    :label-position="formPosition"
  >
    <!-- <el-checkbox-group label="メールマガジン" v-model="p.">
      <el-checkbox label="配信を希望する" />
    </el-checkbox-group> -->

    <el-form-item label="会員種別" prop="type">
      {{ p.userType }}
    </el-form-item>

    <!-- 氏名 -->
    <div>
      <div class="flexbox">
        <el-form-item label="氏名" prop="lastName">
          <el-input
            name="name1"
            id="name1"
            v-model="p.lastName"
            style="width: 200px"
            @input="handleNameInput"
          />
        </el-form-item>
        <div class="g-inputGroup_static" style="margin-bottom: 18px">
          {{ p.firstName }}
        </div>
      </div>

      <div class="flexbox">
        <el-form-item label="氏名（カナ）" prop="lastNameKana">
          <el-input
            name="furigana"
            id="furigana"
            v-model="p.lastNameKana"
            style="width: 200px"
            @input="checkKana"
          />
        </el-form-item>
        <div class="g-inputGroup_static" style="margin-bottom: 18px">
          {{ p.firstNameKana }}
        </div>
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

    <el-form-item label="メールアドレス" prop="email">
      {{ p.email }}
    </el-form-item>

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
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="telC" label-width="10px">
          <el-input
            v-model="p.telC"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
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
          />
        </el-form-item>
        <span style="margin-bottom: 18px; margin-left: 10px"> -</span>
        <el-form-item label="" prop="tel2C" label-width="10px">
          <el-input
            v-model="p.tel2C"
            style="width: 100px"
            oninput="value=value.replace(/\D/g, '')"
          />
        </el-form-item>
      </div>
    </div>

    <el-form-item label="性別" prop="gender">
      <el-radio-group v-model="p.gender">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="生年月日" prop="birth">
      {{ p.birthyear }}年{{ p.birthmonth }}月{{ p.birthday }}日
    </el-form-item>

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
            style="width: 200px"
            oninput="value=value.replace(/\D/g, '')"
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
        <el-input v-model="p.addressPref" :disabled="true" />
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
            placeholder="03"
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
          style="width: 200px"
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
    <!-- パスワード -->
    <section class="g-block" style="margin-top: 50px">
      <h2>パスワード変更</h2>
      <p class="g-formGrid_note">
        半角英数字組合せ8～20文字で入力してください。
      </p>
      <el-form-item label="新しいパスワード" prop="newPassword">
        <el-input v-model="p.newPassword" :type="type1" autocomplete="off" />
      </el-form-item>
      <p @click="change1 = !change1" class="changePW">
        {{ text1 }}
      </p>

      <p class="g-formGrid_note">コピー・貼り付けはせずに入力してください。</p>
      <el-form-item label="新しいパスワード（確認用）" prop="checkPassword">
        <el-input :type="type2" v-model="p.checkPassword" autocomplete="off" />
      </el-form-item>
      <p @click="change2 = !change2" class="changePW">
        {{ text2 }}
      </p>
    </section>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >更新する
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">戻る</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "../../store/index";
import { onMounted } from "vue";
import * as AutoKana from "vanilla-autokana";

const store = useStore();
onMounted(async () => {
  await store.dispatch("setProfile");
  autokana = AutoKana.bind("#name1");
});
const p = computed(() => store.getters.getProfile);
// const password = computed(() => store.getters.getProfile.password);

const formSize = ref("default");
const formPosition = ref("right");
const ruleFormRef = ref<FormInstance>();

//パスワードを表示する パスワード表示の切り替え
const change1 = ref(false);
const change2 = ref(false);

const type1 = computed(() => {
  return change1.value ? "text" : "password";
});
// console.log("change1", change1);

const type2 = computed(() => {
  return change2.value ? "text" : "password";
});

const text1 = computed(() => {
  return change1.value ? "パスワードを隠す" : "パスワードを表示する";
});
const text2 = computed(() => {
  return change2.value ? "パスワードを隠す" : "パスワードを表示する";
});

//半角英数字組合せ8～20文字
function numAndLetter(s) {
  return !!s.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/);
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value.length > 0) {
    if (numAndLetter(value) === false) {
      //半角英数字以外
      callback(new Error("半角英数字組合せ8～20文字で入力してください。"));
    } else {
      if (p.value.checkPassword !== "") {
        if (!ruleFormRef.value) return;
        ruleFormRef.value.validateField("checkPassword", () => null);
      }
      callback();
    }
  } else {
    return;
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value !== p.value.newPassword) {
    callback(new Error("入力されたパスワードが一致していません。"));
  } else {
    callback();
  }
};

//----------------------------------------

//フォームのふりがなを自動入力する
let autokana;
//上のonMountedに書く
// onMounted(() => {
//   autokana = AutoKana.bind("#name");
// });

//「ひらがな → カタカナ」の変換function
function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}
//input事件
const handleNameInput = () => {
  p.value.lastNameKana = autokana.getFurigana(); //ふりがなを自動入力
  p.value.lastNameKana = hiraToKata(p.value.lastNameKana); //ふりがな⇒カタカナ
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
  p.value.lastNameKana = hankana2Zenkana(p.value.lastNameKana);
  if (isKataKana(p.value.lastNameKana)) {
    if (p.value.lastNameKana.length <= 20 && p.value.lastNameKana.length > 0) {
      kanaError.value = false;
      kanaReError.value = false;
    } else if (p.value.lastNameKana.length > 20) {
      kanaError.value = true;
      kanaReError.value = false;
    } else if (p.value.lastNameKana.length === 0) {
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
  type: [{ required: false }],
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
  lastNameKana: [
    { required: true, message: "", trigger: ["blur", "change"] },
    {
      max: 20,
      // message: "20文字以内で入力してください。",
      trigger: ["blur", "change"],
    },
  ],

  email: [
    {
      required: true,
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
  gender: [{ required: true }],
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
  newPassword: [{ validator: validatePass, trigger: ["blur", "change"] }],
  checkPassword: [{ validator: validatePass2, trigger: ["blur", "change"] }],
});
//更新する&戻る
const router = useRouter();
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      store.dispatch("updateList", p.value);
      router.push({ path: "/my-account/customerInfoCompleted" }); //更新後、新しいページに遷移
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

//.郵便番号検索から住所を表示 API
const headers = { Accept: "application/json" };
const error = ref("");
const postError = ref(false);

const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + p.value.postCode;
  const info = await fetch(url, { headers });
  const data = await info.json();
  //   const data = j.results;

  if (data.status === 400) {
    //エラー時
    error.value = data.message;
  } else if (data.results === null) {
    // error.value = "郵便番号から住所が見つかりませんでした。";
    postError.value = true;
  } else {
    p.value.addressPref = data.results[0].address1;
    p.value.addressCity = data.results[0].address2;
    p.value.addressArea = data.results[0].address3;
    postError.value = false;
  }
};
//----------------------------------------------
</script>

<style scoped>
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
  margin-bottom: 10px;
  color: #808080;
  font-size: 0.8rem;
  margin-left: 200px;
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
</style>
