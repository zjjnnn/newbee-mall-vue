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
  <dl
    class="g-sm-formGrid-v g-lg-formGrid-h g-block-xs"
    style="margin: 0px 20px"
  >
    <dt>
      <label for="p-say">会員種別</label>
    </dt>
    <dd>
      <div class="g-inputGroup g-inputGroup-line">{{ p.userType }}</div>
    </dd>
    <dt>
      <label for="p-say">氏名<span class="g-label-required">必須</span></label>
    </dt>
    <dd>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-say"
          type="text"
          name="lastName"
          :value="p.lastName"
          size="10"
          required
          aria-required="true"
          aria-describedby="p-say_alert"
          data-validation-rules='[{"rule":"length","max":10},{"action":"validate","subjects":["#p-saykana"]}]'
          data-furigana="#p-saykana"
        />
        <div class="g-inputGroup_static">{{ p.firstName }}</div>
      </div>
      <div class="g-formGrid_error" id="p-say_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-saykana"
        >氏名（カナ）<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">カタカナで入力してください。</p>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-saykana"
          type="text"
          name="lastNameKana"
          :value="p.lastNameKana"
          size="13"
          required
          aria-required="true"
          aria-describedby="p-saykana_alert"
          data-validation-rules='[{"action":"zenkaku"},{"rule":"length","max":20,"type":"katakana"}]'
        />
        <div class="g-inputGroup_static">{{ p.firstNameKana }}</div>
      </div>
      <div class="g-formGrid_error" id="p-saykana_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-mail"
        >メールアドレス<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <div class="g-inputGroup_static">
        {{ p.email
        }}<input type="hidden" name="emailAddress" :value="p.email" />
      </div>
    </dd>
    <dt>
      <label for="p-tel-a"
        >電話番号1<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">数字で入力してください。</p>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-tel-a"
          type="text"
          inputmode="numeric"
          name="telephone11"
          :value="p.telA"
          placeholder="03"
          size="4"
          required
          aria-required="true"
          aria-describedby="p-tel-a_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":2,"max":5,"type":"number"},{"action":"merge","subjects":[".","#p-tel-b","#p-tel-c"],"dest":"#p-tel-a-tel-b-tel-c_alert"}]'
        /><span class="g-inputGroup_static">-</span>
        <input
          class="g-input g-input-sm"
          id="p-tel-b"
          type="text"
          inputmode="numeric"
          name="telephone12"
          :value="p.telB"
          size="4"
          required
          aria-required="true"
          aria-describedby="p-tel-b_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":1,"max":4,"type":"number"},{"action":"merge","subjects":["#p-tel-a",".","#p-tel-c"],"dest":"#p-tel-a-tel-b-tel-c_alert"}]'
        /><span class="g-inputGroup_static">-</span>
        <input
          class="g-input g-input-sm"
          id="p-tel-c"
          type="text"
          inputmode="numeric"
          name="telephone13"
          :value="p.telC"
          size="4"
          required
          aria-required="true"
          aria-describedby="p-tel-c_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":3,"max":4,"type":"number"},{"action":"merge","subjects":["#p-tel-a","#p-tel-b","."],"dest":"#p-tel-a-tel-b-tel-c_alert"}]'
        />
      </div>
      <div
        class="g-formGrid_error g-display-b"
        id="p-tel-a-tel-b-tel-c_alert"
        aria-hidden="true"
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel-a_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel-b_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel-c_alert"
        role="alert"
        hidden
      ></div>
    </dd>
    <dt>
      <label for="p-tel2-a">電話番号2</label>
    </dt>
    <dd>
      <p class="g-formGrid_note">数字で入力してください。</p>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-tel2-a"
          type="text"
          inputmode="numeric"
          name="telephone21"
          :value="p.tel2A"
          placeholder="03"
          size="4"
          aria-describedby="p-tel2-a_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":2,"max":5,"type":"number"},{"action":"merge","subjects":[".","#p-tel2-b","#p-tel2-c"],"dest":"#p-tel2-a-tel2-b-tel2-c_alert"}]'
        /><span class="g-inputGroup_static">-</span>
        <input
          class="g-input g-input-sm"
          id="p-tel2-b"
          type="text"
          inputmode="numeric"
          name="telephone22"
          :value="p.tel2B"
          size="4"
          placeholder="0000"
          aria-describedby="p-tel2-b_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":1,"max":4,"type":"number"},{"action":"merge","subjects":["#p-tel2-a",".","#p-tel2-c"],"dest":"#p-tel2-a-tel2-b-tel2-c_alert"}]'
        /><span class="g-inputGroup_static">-</span>
        <input
          class="g-input g-input-sm"
          id="p-tel2-c"
          type="text"
          inputmode="numeric"
          name="telephone23"
          :value="p.tel2C"
          size="4"
          placeholder="0000"
          aria-describedby="p-tel2-c_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":3,"max":4,"type":"number"},{"action":"merge","subjects":["#p-tel2-a","#p-tel2-b","."],"dest":"#p-tel2-a-tel2-b-tel2-c_alert"}]'
        />
      </div>
      <div
        class="g-formGrid_error g-display-b"
        id="p-tel2-a-tel2-b-tel2-c_alert"
        aria-hidden="true"
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel2-a_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel2-b_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-tel2-c_alert"
        role="alert"
        hidden
      ></div>
    </dd>
    <dt id="p-sex">性別<span class="g-label-required">必須</span></dt>
    <dd>
      <ul class="g-flow-xl">
        <!-- 男 -->
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="gender"
              value="0"
              aria-labelledby="p-sex"
              required
              aria-required="true"
              aria-describedby="p-sex_alert"
              v-model="checkedGender"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">男</span></span
            >
          </label>
        </li>
        <!-- 女 -->
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="gender"
              value="1"
              aria-labelledby="p-sex"
              required
              aria-required="true"
              aria-describedby="p-sex_alert"
              v-model="checkedGender"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">女</span></span
            >
          </label>
        </li>
      </ul>
      <div class="g-formGrid_error" id="p-sex_alert" role="alert"></div>
    </dd>
    <dt>生年月日</dt>
    <dd>{{ p.birthyear }} 年{{ p.birthmonth }}月{{ p.birthday }}日</dd>
    <dt>
      <label for="p-zip"
        >郵便番号<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">
        ハイフン不要・数字で入力してください。<br />
        事業所の個別郵便番号はご使用いただけません。
      </p>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-zip"
          type="text"
          inputmode="numeric"
          name="postalCode"
          :value="p.postCode"
          size="8"
          required
          aria-required="true"
          aria-describedby="p-zip_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":7,"max":7,"type":"number"}]'
        />
        <p class="g-inputGroup_static">
          <a
            class="g-link"
            target="_blank"
            href="http://www.post.japanpost.jp/zipcode"
            ><i class="g-i g-i-arrow-r" aria-hidden="true"></i
            ><span>郵便番号を調べる</span></a
          >
        </p>
      </div>
      <div class="g-formGrid_error" id="p-zip_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-pref"
        >都道府県<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
      <div class="g-inputGroup">
        <input
          class="g-input g-input-sm"
          id="p-pref"
          type="text"
          name="prefecture"
          :value="p.addressPref"
          size="10"
          readonly
          required
          aria-required="true"
          tabindex="-1"
        />
      </div>
    </dd>
    <dt>
      <label for="p-city"
        >市区町村<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">郵便番号より自動検索されます。</p>
      <input
        class="g-input g-input-sm g-fw"
        id="p-city"
        type="text"
        name="city"
        :value="p.addressCity"
        readonly
        required
        aria-required="true"
        tabindex="-1"
      />
      <div class="g-formGrid_error" id="p-city_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-area">町名<span class="g-label-required">必須</span></label>
    </dt>
    <dd>
      <p class="g-formGrid_note">町名を入力してください。</p>
      <input
        class="g-input g-input-sm g-fw"
        id="p-area"
        type="text"
        name="townArea"
        :value="p.addressArea"
        placeholder="北区新琴似七条"
        required
        aria-required="true"
        aria-describedby="p-area_alert"
        data-validation-rules='[{"rule":"length","max":40}]'
      />
      <div class="g-formGrid_error" id="p-area_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-block-a"
        >丁目番地<span class="g-label-required">必須</span></label
      >
    </dt>
    <dd>
      <p class="g-formGrid_note">
        左端のみ必須です。番地がない場合は左端に1を入力してください。
      </p>
      <div class="g-inputGroup g-inputGroup-line">
        <input
          class="g-input g-input-sm"
          id="p-block-a"
          type="text"
          inputmode="numeric"
          name="streetname1"
          :value="p.streetname1"
          size="4"
          required
          aria-required="true"
          aria-describedby="p-block-a_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","max":5,"type":"number"},{"action":"merge","subjects":[".","#p-block-b","#p-block-c"],"dest":"#p-block-a-block-b-block-c_alert"}]'
        /><span class="g-inputGroup_static">−</span>
        <input
          class="g-input g-input-sm"
          id="p-block-b"
          type="text"
          inputmode="numeric"
          name="streetname2"
          :value="p.streetname2"
          size="4"
          aria-describedby="p-block-b_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","max":5,"type":"number"},{"action":"merge","subjects":["#p-block-a",".","#p-block-c"],"dest":"#p-block-a-block-b-block-c_alert"}]'
        /><span class="g-inputGroup_static">−</span>
        <input
          class="g-input g-input-sm"
          id="p-block-c"
          type="text"
          inputmode="numeric"
          name="streetname3"
          :value="p.streetname3"
          size="4"
          aria-describedby="p-block-c_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","max":5,"type":"number"},{"action":"merge","subjects":["#p-block-a","#p-block-b","."],"dest":"#p-block-a-block-b-block-c_alert"}]'
        />
      </div>
      <div
        class="g-formGrid_error g-display-b"
        id="p-block-a-block-b-block-c_alert"
        aria-hidden="true"
      ></div>
      <div
        class="g-formGrid_error"
        id="p-block-a_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-block-b_alert"
        role="alert"
        hidden
      ></div>
      <div
        class="g-formGrid_error"
        id="p-block-c_alert"
        role="alert"
        hidden
      ></div>
    </dd>
    <dt>
      <label for="p-bldg">
        <span> 建物名称<small>（マンション・団地名など）</small> </span>
      </label>
    </dt>
    <dd>
      <input
        class="g-input g-input-sm g-fw"
        id="p-bldg"
        type="text"
        name="buildingName"
        :value="p.buildingName"
        placeholder="ニトリビル"
        aria-describedby="p-bldg_alert"
        data-validation-rules='[{"rule":"length","max":50}]'
      />
      <div class="g-formGrid_error" id="p-bldg_alert" role="alert"></div>
    </dd>
    <dt>
      <label for="p-room">部屋番号</label>
    </dt>
    <dd>
      <p class="g-formGrid_note">
        英数字で入力してください。<br />
        部屋番号に英数字以外が含まれている場合は、建物名称欄に入力してください。
      </p>
      <div class="g-inputGroup">
        <input
          class="g-input g-input-sm"
          id="p-room"
          type="text"
          inputmode="numeric"
          name="roomNumber"
          :value="p.roomNumber"
          size="10"
          placeholder="101"
          aria-describedby="p-room_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","max":5,"type":"eisu"}]'
        />
      </div>
      <div class="g-formGrid_error" id="p-room_alert" role="alert"></div>
    </dd>
    <dt id="p-condition">建物種別<span class="g-label-required">必須</span></dt>
    <dd>
      <ul class="p-radios">
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="houseSituation"
              value="0"
              required
              aria-required="true"
              aria-labelledby="p-condition"
              aria-describedby="p-condition_alert"
              v-model="checkedHouse"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">戸建て</span></span
            >
          </label>
        </li>
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="houseSituation"
              value="1"
              required
              aria-required="true"
              aria-labelledby="p-condition"
              aria-describedby="p-condition_alert"
              v-model="checkedHouse"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i>
              <span class="g-checkable_label"> 集合住宅</span>
            </span>
          </label>
        </li>
      </ul>
      <div class="g-formGrid_error" id="p-condition_alert" role="alert"></div>
    </dd>
    <dt id="p-lift">エレベータ<span class="g-label-required">必須</span></dt>
    <dd>
      <ul class="p-radios">
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="elevatorAvailability"
              value="0"
              required
              aria-required="true"
              aria-labelledby="p-lift"
              aria-describedby="p-lift_alert"
              v-model="checkedLift"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">なし</span></span
            >
          </label>
        </li>
        <li>
          <label class="g-checkable">
            <input
              type="radio"
              name="elevatorAvailability"
              value="1"
              required
              aria-required="true"
              aria-labelledby="p-lift"
              aria-describedby="p-lift_alert"
              v-model="checkedLift"
            /><span
              ><i class="g-s g-s-radio-on g-checkable_on" aria-hidden="true"></i
              ><i
                class="g-s g-s-radio-off g-checkable_off"
                aria-hidden="true"
              ></i
              ><span class="g-checkable_label">あり</span></span
            >
          </label>
        </li>
      </ul>
      <div class="g-formGrid_error" id="p-lift_alert" role="alert"></div>
    </dd>
  </dl>
  <section class="g-block">
    <h2 class="g-h-2">パスワード変更</h2>
    <dl class="g-sm-formGrid-v g-lg-formGrid-h">
      <dt>
        <label for="p-pw-new">新しいパスワード</label>
      </dt>
      <dd>
        <p class="g-formGrid_note">
          半角英数字組合せ8～20文字で入力してください。
        </p>
        <input
          class="g-input g-input-sm g-fw"
          id="p-pw-new"
          type="password"
          name="password"
          value=""
          aria-describedby="p-pw-new_alert"
          autocomplete="new-password"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":8,"max":20,"type":"eisumix"},{"action":"validate","subjects":["#p-pw-new-re"]}]'
        />
        <div class="g-formGrid_annotation">
          <button
            class="g-appearance-n g-link-t g-reveal"
            type="button"
            aria-hidden="true"
            data-breakpoints=""
            data-reveal='{"subject":"#p-pw-new","className":"g-reveal-active"}'
          >
            パスワードを表示する
          </button>
        </div>
        <div class="g-formGrid_error" id="p-pw-new_alert" role="alert"></div>
      </dd>
      <dt>
        <label for="p-pw-new-re"
          ><span>新しいパスワード<small>（確認用）</small></span></label
        >
      </dt>
      <dd>
        <p class="g-formGrid_note">
          コピー・貼り付けはせずに入力してください。
        </p>
        <input
          class="g-input g-input-sm g-fw"
          id="p-pw-new-re"
          type="password"
          name="passwordConfirmation"
          value=""
          aria-describedby="p-pw-new-re_alert"
          data-validation-rules='[{"action":"hankaku"},{"rule":"length","min":8,"max":20,"type":"eisumix"},{"rule":"match","name":"パスワード","subject":"#p-pw-new"},{"action":"validate","subjects":["#p-pw-new"]}]'
        />
        <div class="g-formGrid_annotation">
          <button
            class="g-appearance-n g-link-t g-reveal"
            type="button"
            aria-hidden="true"
            data-breakpoints=""
            data-reveal='{"subject":"#p-pw-new-re","className":"g-reveal-active"}'
          >
            パスワードを表示する
          </button>
        </div>
        <div class="g-formGrid_error" id="p-pw-new-re_alert" role="alert"></div>
      </dd>
    </dl>
    <p class="g-align-tc g-unit-lg">
      <label class="g-checkable">
        <input type="checkbox" name="changePassword" value="1" /><span
          ><i class="g-s g-s-checkbox-on g-checkable_on" aria-hidden="true"></i
          ><i
            class="g-s g-s-checkbox-off g-checkable_off"
            aria-hidden="true"
          ></i
          ><span class="g-checkable_label">パスワードを変更する</span></span
        >
      </label>
    </p>
  </section>
</template>

<script setup lang="ts">
import { useStore } from "../../store/index";
import { onMounted, computed } from "vue";
const store = useStore();
onMounted(() => {
  store.dispatch("setProfile");
});
const p = computed(() => store.getters.getProfile);
const checkedGender = computed(() => store.getters.getProfile.gender);
const checkedHouse = computed(() => store.getters.getProfile.conditionValue);
const checkedLift = computed(() => store.getters.getProfile.liftValue);
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

.g-lg-formGrid-h {
  display: flex;
  flex-wrap: wrap;
}
.g-block-xs,
.g-lg-block-xs {
  margin-top: 30px;
}
.g-lg-formGrid-h > dt {
  padding-right: 25px;
  padding-left: 20px;
}
.g-lg-formGrid-h > dt {
  font-weight: bold;
  display: flex;
  width: 34%;
  align-items: center;
}
.g-lg-formGrid-tr > dt {
  font-weight: bold;
  display: flex;
  width: 34%;
  align-items: center;
}
.g-lg-formGrid-h > * {
  padding-top: 10px;
  padding-bottom: 10px;
}
.g-lg-formGrid-h > dd,
.g-lg-formGrid-tr > dd {
  width: 66%;
}
.g-inputGroup {
  display: flex;
  flex-direction: row;
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
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 3px 5px;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #fff;
}
.g-formGrid-h > *:nth-of-type(n + 2),
.g-lg-formGrid-h > *:nth-of-type(n + 2) {
  border-top: 1px dashed #e6e6e6;
}
.g-input[size="10"] {
  max-width: calc(0.65em * 10 + 30px);
}
/* .g-input-sm {
  padding: 8px 11px 7px;
} */
.g-input {
  min-width: 0;
  padding: 0px 10px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
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
</style>
