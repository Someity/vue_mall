<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :key="index"
      v-for="(item, index) in titles"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueTabcontrol",
  props: {
    titles: {
      type: Array,
      // 当默认值是一个对象或者数组是 default必须是个函数
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      // 自定义事件传值
      this.$emit('tabClick',index)
     
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>