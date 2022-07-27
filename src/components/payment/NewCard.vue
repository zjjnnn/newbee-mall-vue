<template>
  <form
    id="paymentDetailsForm"
    action="/ec/my-account/payment-add"
    method="POST"
  >
    <dl class="g-sm-formGrid-v g-lg-formGrid-h">
      <dt>
        <label for="p-cardno-new"
          >カード番号<span class="g-label-required">必須</span></label
        >
      </dt>
      <dd>
        <p class="g-formGrid_note">ハイフン不要・数字で入力してください。</p>
        <input
          class="g-input g-input-sm g-fw"
          id="p-cardno-new"
          type="text"
          name=""
          value=""
          required
        />
        <div
          class="g-formGrid_error"
          id="p-cardno-new_alert"
          role="alert"
        ></div>
      </dd>
      <dt>
        <label for="p-expire-new-a"
          >有効期限<span class="g-label-required">必須</span></label
        >
      </dt>
      <dd>
        <div class="g-inputGroup g-inputGroup-line">
          <div class="g-select g-select-sm">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select
              id="p-expire-new-a"
              name=""
              required
              aria-required="true"
              aria-describedby="p-expire-new-a_alert"
              aria-label="カード有効期限の月"
              data-validation-rules='[{"action":"merge","subjects":["#p-expire-new-b"],"dest":"#p-expire-new-a-expire-new-b_alert"}]'
            >
              <option value="" selected></option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div class="g-inputGroup_static">月</div>
          <div class="g-select g-select-sm">
            <i class="g-i g-i-dropdown" aria-hidden="true"></i>
            <select
              id="p-expire-new-b"
              name=""
              required
              aria-required="true"
              aria-describedby="p-expire-new-b_alert"
              aria-label="カード有効期限の年"
              data-validation-rules='[{"action":"merge","subjects":["#p-expire-new-a"],"dest":"#p-expire-new-a-expire-new-b_alert"}]'
            >
              <option value="" selected></option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
            </select>
          </div>
          <div class="g-inputGroup_static">年</div>
        </div>
        <div
          class="g-formGrid_error g-display-b"
          id="p-expire-new-a-expire-new-b_alert"
          aria-hidden="true"
        ></div>
        <div
          class="g-formGrid_error"
          id="p-expire-new-a_alert"
          role="alert"
        ></div>
        <div
          class="g-formGrid_error"
          id="p-expire-new-b_alert"
          role="alert"
        ></div>
      </dd>
      <dt>
        <label for="p-cvv-new"
          >セキュリティコード<span class="g-label-required">必須</span></label
        >
      </dt>
      <dd>
        <input
          class="g-input g-input-sm"
          id="p-cvv-new"
          type="text"
          name=""
          value=""
          size="7"
          required
          aria-required="true"
          aria-describedby="p-cvv-new_alert"
          data-validation-rules='[{"action":"hankaku"},"number",{"rule":"length","min":3,"max":4,"type":"number"}]'
        />
        <input
          type="hidden"
          id="email"
          name="email"
          value="ouuseix@gmail.com"
        />
        <input type="hidden" id="cardNoBin" name="cardNoBin" />
        <div class="g-formGrid_error" id="p-cvv-new_alert" role="alert"></div>
        <!-- <img
          class="g-display-b g-unit-sm"
          src="/ec/_ui/responsive/common/images/cart/secure_code.png"
          alt=""
        /> -->
      </dd>
    </dl>
    <input type="hidden" name="token" id="cardToken" value="" />
    <input type="hidden" name="responseStatus" id="responseStatus" value="" />
    <div class="g-sm-foot-v g-lg-foot-h">
      <div class="g-sm-align-tc">
        <button
          type="submit"
          id="toNextButton"
          class="g-btn g-btn-cv g-btn-w-md"
        >
          <span>登録する</span>
        </button>
      </div>
    </div>
    <div>
      <input
        type="hidden"
        name="CSRFToken"
        value="fe073113-a3f2-47ac-9417-01c6a3c23bf4"
      />
    </div>
  </form>
  <ul class="g-list g-list-note g-unit-xl">
    <li>お支払日は各クレジット会社会員規約に基づく引き落とし日になります。</li>
    <li>詳しくはご利用カードのご利用明細書をご覧ください。</li>
    <li>
      ご利用可能なカード・回数一覧は<a
        class="g-link-u"
        href="/ec/userguide/payment/#credit_c"
        target="_blank"
        >こちら</a
      >
    </li>
  </ul>
  <div class="g-pane g-pane-gray g-pane-sm g-unit-lg">
    <div class="g-media g-align-gm">
      <div class="g-media_head">
        <!-- <a
          href="https://www.veritrans.co.jp/user_support/securepayment.html"
          target="_blank"
          ><img
            class="g-fw"
            src="/ec/_ui/responsive/common/images/cart/secure_payment.png"
            alt=""
        /></a> -->
      </div>
      <div class="g-media_body">
        <p class="g-font-sm">
          当サイトでは、DGフィナンシャルテクノロジー社の安全なクレジットカード決済システムを導入しておりますので、安心してショッピングをお楽しみ頂けます。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
