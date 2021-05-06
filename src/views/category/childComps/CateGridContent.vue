<!--  -->
<template>
    <grid-view
      :column="3"
      :hSpace="130"
      line='auto'
      wSpace='auto'
      v-if="varieticeList"
    >
      <div v-for="(item, index) in varieticeList.list" :key="index" class="item">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" @load="imageLoaded" />
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
</template>

<script>
import GridView from "components/content/gridView/GridView.vue";
export default {
  data() {
    return {};
  },
  props: {
    varieticeList: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    GridView,
  },

  computed: {},

  mounted() {
    //console.log(this.varieticeList.list)
  },

  methods: {
    imageLoaded() {
      this.$emit("gridImgLoaded");
    },
  },
};
</script>
<style  scoped>

.item {
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.item-img {
  width: 80%;
}

.item-text {
  margin-top: 7px;
}
</style>