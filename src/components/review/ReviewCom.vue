<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
          <!-- <p class="g-score"></p> -->
          <!-- <a-rate :value="review.rating" disabled allow-half /> -->
          <!-- <span :data-score="review.rating"> -->

          <!-- <span class="g-clip">text.product.review.Rating</span> -->
          <!-- </span> -->
          <star-rating
            class="star"
            :star-size="20"
            :rating="review.rating"
            :read-only="true"
            :increment="0.01"
            :show-rating="false"
          ></star-rating>
          <div>
            <b>&emsp;{{ review.nickName }}</b
            >さん
          </div>
          <div>&emsp;{{ review.reviewDate }}</div>
        </div>
        <p class="g-reviewList_info">購入商品:{{ review.goodsName }}</p>
        <p class="g-reviewList_h">{{ review.title }}</p>
        <p>
          {{ review.content }}
        </p>
        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike0"
            id="js-hitLike"
            data-count="0"
            data="626fd36d2e90a2006100013d"
            data-clickable=""
            ><i class="g-s g-s-like-g" aria-hidden="true"></i>
            <span class="material-symbols-outlined"> thumb_up </span>
            <span>参考になった（{{ review.count }}人）</span></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  props: {
    review: {
      rating: Number,
      nickName: Number,
      goodsName: String,
      count: Number,
      title: String,
      content: String,
      reviewDate: String,
    },
  },
};
</script>

<style>
.g-lg-flow-sm {
  display: flex;
}
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_info {
  margin-top: 10px;
}

.g-reviewList_h {
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.6rem;
  line-height: 1.5;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
li {
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}

b {
  font-weight: bold;
}

.p-reviw-graph-area-right {
  box-sizing: border-box;
  display: inline-block;
  padding: 2px 2px 2px 2px;
  vertical-align: top;
  width: 100%;
  color: black;
}

.g-link reviewLike0 {
  color: black;
}
</style>
