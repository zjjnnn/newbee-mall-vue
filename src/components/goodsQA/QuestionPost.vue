<template>
  <div id="ZVCQAPost">
    <div class="zv-cqa-posting-rule">
      <p class="zv-cqa-posting-rule-title">ご注意ください</p>
      <ul>
        <li>
          「ニトリ商品Q&amp;A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
        </li>
        <!--<li>回答を要するご質問やお急ぎの方は<a class="g-link-u" href="https://www.nitori-net.jp/ec/input-inquiry/" target="_blank">お問い合わせフォームへ</a>ご連絡ください。</li>-->
        <li>
          ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドの<a
            class="g-link-u"
            href="https://www.nitori-net.jp/ec/userguide/nitorinet/#zv-cqa"
            target="_blank"
            >ニトリ商品Q&amp;Aについて</a
          >をご確認ください。
        </li>
      </ul>
    </div>

    <input
      type="textbox"
      id="ZVQuestionTextarea"
      class="zv-textbox"
      placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
    />
    <div
      id="ZVAskPostArea"
      data-customerqa-message-after-post-question="送信しました。回答があるまでしばらくお待ちください。"
    >
      <p class="zv-error-message" id="ZVLoginErrorQuestion">
        質問を投稿するにはログインが必要です。
      </p>
      <p class="zv-error-message" id="ZVEmptyErrorQuestion">
        質問を入力してください。
      </p>
      <p class="zv-error-message" id="ZVSpamErrorQuestion">
        しばらく時間をおいて投稿してください。
      </p>
      <button type="button" id="ZVPostQuestionButton" class="zv-btn">
        質問を投稿
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
.zv-cqa-posting-rule {
  border: 1px dotted #bdc3c7;
  padding: 0 10px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
#ZVCQA p.zv-cqa-posting-rule-title {
  font-size: 1.5rem;
}

.zv-cqa-posting-rule-title {
  font-weight: bold;
  margin: 10px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #eb6157;
}
#ZVCQA .zv-textbox {
  font-size: 13px;
  padding: 10px;
  border: solid 1px #bdc3c7;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 20%);
  box-shadow: inner 0 1px 2px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  width: 100%;
}
ul,
ol {
  padding: 0;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  list-style: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start !important;
}

#ZVAskPostArea {
  margin-top: 10px;
}

#ZVCQAPost li {
  list-style: disc inside;
  list-style-position: inside;
  list-style-image: initial;
  list-style-type: disc;
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

.g-link-u,
.g-lg-link-u,
.g-link-u-kiyaku {
  text-decoration: underline;
  color: #009e96;
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

#ZVAskPostArea {
  margin-top: 10px;
}

#ZVCQA {
  font-size: 14px;
  margin-bottom: 30px;
  color: #333;
  padding: 0;
}

#ZVCQA .zv-btn {
  border: solid 1px #bdc3c7;
  padding: 8px 10px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 13px;
  background: #fff;
  display: inline-block;
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

.zv-error-message {
  color: red;
  display: none;
  margin-top: 0px;
  margin-bottom: 10px;
}
</style>
