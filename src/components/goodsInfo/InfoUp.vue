<template>
  <div class="g-units-lg">
    <dl class="p-customize js-sku-variations" data-index="0">
      <!-- select size -->
      <dt>サイズ：<b id="p-customize0サイズ">ダブル</b></dt>
      <dd>
        <div class="g-select g-select-sm js-sku-variations-dropdown">
          <i class="g-i g-i-dropdown" aria-hidden="true"></i>
          <select
            name=""
            required=""
            aria-required="true"
            aria-label="サイズの選択"
            data-control="#p-eo-label-"
          >
            <info-size></info-size>
            <!-- v-for="size in sizeList"  -->
          </select>
          <input
            type="hidden"
            class="サイズ js-Sku-Var"
            name=""
            value="05700010014"
            aria-required="true"
            data-parent=""
            data-index="0"
            data-label="シングル"
            data-control="#p-eo-label-"
            data-eo-code=""
          />
          <input
            type="hidden"
            class="サイズ js-Sku-Var"
            name=""
            value="05700010017"
            aria-required="true"
            data-parent=""
            data-index="0"
            data-label="セミダブル"
            data-control="#p-eo-label-"
            data-eo-code=""
          />
          <input
            type="hidden"
            class="サイズ js-Sku-Var"
            name=""
            value="05700010019"
            checked=""
            aria-required="true"
            data-parent=""
            data-index="0"
            data-label="ダブル"
            data-control="#p-eo-label-"
            data-eo-code=""
          />
          <input
            type="hidden"
            class="サイズ js-Sku-Var"
            name=""
            value="05700010013"
            aria-required="true"
            data-parent=""
            data-index="0"
            data-label="クイーン"
            data-control="#p-eo-label-"
            data-eo-code=""
          />
        </div>
      </dd>

      <!-- select color -->
      <dt>カラー：<b id="p-customize1カラー">ダークブルー</b></dt>
      <dd>
        <ul class="g-flow-sm">
          <li>
            <label class="g-checkable g-checkable-circle">
              <input
                type="radio"
                name="1カラー"
                value="00100190094"
                data-parent="05700010019"
                data-index="0"
                data-label="ホワイト"
                data-control="#p-customize1カラー"
              />
              <span
                ><span class="g-checkable_checked"></span
                ><img
                  src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8966164348958/BasicColor_WH.jpg"
                  alt="ホワイト"
              /></span>
            </label>
          </li>
          <li>
            <label class="g-checkable g-checkable-circle">
              <input
                type="radio"
                name="1カラー"
                value="00100070019"
                data-parent="05700010019"
                data-index="0"
                data-label="グレー"
                data-control="#p-customize1カラー"
              />
              <span
                ><span class="g-checkable_checked"></span
                ><img
                  src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8965479792670/BasicColor_GRY.jpg"
                  alt="グレー"
              /></span>
            </label>
          </li>
          <li>
            <label class="g-checkable g-checkable-circle">
              <input
                type="radio"
                name="1カラー"
                checked=""
                value="00100170025"
                data-parent="05700010019"
                data-index="0"
                data-label="ダークブルー"
                data-control="#p-customize1カラー"
              />
              <span
                ><span class="g-checkable_checked"></span
                ><img
                  src="https://www.nitori-net.jp/ecstatic/image/sys-master/images/8796331900958/BasicColor_DBL.jpg"
                  alt="ダークブルー"
              /></span>
            </label>
          </li>
        </ul>
      </dd>
    </dl>

    <div class="js-catch-copy">
      一番冷たいが長持ちする「さらさら」極冷感面と肌になじむニット面のリバーシブル。
    </div>

    <div class="g-units-xs js-sku-price">
      <div>
        <div class="g-flow-0 g-align-fbl">
          <dl class="p-price">
            <dd class="g-price g-price-lg price-size-up">
              5,990<span>円</span>
            </dd>
          </dl>
        </div>
      </div>

      <div class="g-butterfly">
        <p class="p-point">
          獲得ポイント<span class="g-digit">54 pt </span> 付与
        </p>
        <p class="g-font-sm p-point-link">
          <a class="g-link" href="/ec/userguide/memberscardpoint/">
            <span>ポイントについて</span>
            <i class="g-i g-i-info" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
    <p class="js-sku-delivery"></p>
  </div>
</template>

<script setup>
import InfoSize from "./InfoSize.vue";
</script>

<style scoped></style>
