<!--  -->
<template>
  <div class="list-view">
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="img">
        <img :src="item.icon" alt="" class="icon" />
      </div>
      <div class="text">
        {{ item.info }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},

  computed: {},

  mounted() {
    console.log(this.list);
  },

  methods: {},
};
</script>
<style  scoped>
.list-view {
  display: flex;
  border-top: 10px solid #eee;
  flex-direction: column;
  padding: 0px 10px;
}
.list-view .item {
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.list-view .img {
  width: 20px;
  height: 20px;
}
.list-view .img .icon {
  width: 20px;
  height: 20px;
}
.list-view .text {
  flex: 4;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
</style>