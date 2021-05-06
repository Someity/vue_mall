<!--  -->
<template>
  <scroll class="left-menu" ref="scroll">
    <div
      class="left-item"
      v-for="(item, index) in cartType"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="leftItemClick(index)"
    >
      <div>{{ item.title }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    cartType: {
      type: Array,
      default: [],
    },
  },
  components: {
    Scroll,
  },

  computed: {},

  mounted() {},

  methods: {
    leftItemClick(index) {
      this.currentIndex = index;
      this.$emit("leftItemClick", index);
    },
  },
  updated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style  scoped>
.left-menu {
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  width: 25%;
  overflow: hidden;
}
.left-item {
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 3px solid transparent;
  background-color: #eee;
  font-size: 14px;
}
.active {
  background-color: #fff;
  font-size: 18px;
  color: #ff8198;
  font-weight: bold;
  border-left: 3px solid #ff8198;
}
</style>