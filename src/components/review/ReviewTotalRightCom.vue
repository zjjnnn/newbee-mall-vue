<template>
  <div class="g-lg-flow-sm p-reviw-graph-area-row-sm">
    <div class="g-score p-reviw-graph-area-score">
      <!-- <span :data-score="rating2.rating"
        ><span class="g-clip">{{ rating2.rating }}</span></span
      > -->
      <star-rating
        :star-size="20"
        :rating="rating"
        :read-only="true"
        :increment="0.01"
        :show-rating="false"
      ></star-rating>
    </div>
    <div class="a-meter g-mater-visble" id="js-mater5" :data-rate="rating">
      <div class="a-meter-bar" :style="{ width: percentage + '%' }"></div>
    </div>
    <a
      class="g-link g-link-visble"
      id="js-rate5"
      :data-rate="rating"
      :title="title"
      @click="clickRating(rating)"
      >{{ ratingCount }}人</a
    >
  </div>
</template>

<script lang="ts">
import StarRating from "vue-star-rating";
import { mapMutations } from "vuex";
import { defineComponent } from "vue";
//const StarRating = require("vue-star-rating");
export default defineComponent({
  components: {
    StarRating,
  },
  props: {
    rating: Number,
    percentage: Number,
    ratingCount: Number,
  },
  data() {
    return {
      title:
        "レビューの" +
        this.percentage +
        "%に星" +
        this.rating +
        "つが付いています。",
    };
  },
  methods: {
    async clickRating(rating) {
      if (this.$store.getters.getReviewTotal.titleCount > 3) {
        await this.$store.dispatch("setReviews", {
          goodsId: this.$route.params.goodsId,
        });
      }
      this.filterReviews(rating);
    },
    ...mapMutations(["filterReviews"]),
  },
});
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}

.a-meter .a-meter-bar {
  -webkit-transition: width 0.5s ease;
  transition: width 0.5s ease;
  float: left;
  font-size: 0;
  height: 100%;
  width: 0;
}

.a-meter .a-meter-bar {
  border-radius: 4px;
  box-shadow: inset -2px 0 0 -1px #a4433c, inset 0 0 0 1px #8d3a34;
  background-color: #eb6157;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.a-meter {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px #e3e6e6;
  background-color: #dbdbdb;
  height: 10px;
  width: calc(100% - 110px - 4em);
  margin-left: 0px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.a-meter {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px #e3e6e6;
  background-color: #dbdbdb;
  height: 10px;
  width: calc(100% - 110px - 4em);
  margin-left: 0px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.p-reviw-graph-area-row-sm {
  display: flex;
  flex-wrap: wrap;
}

.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -5px;
  margin-left: -10px;
}

.g-link-visble {
  text-decoration: underline;
}

.g-link,
.g-sm-link {
  display: inline-flex;
  align-items: center;
}
</style>
