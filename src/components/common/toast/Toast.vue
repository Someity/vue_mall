<template>
  <div v-show="isShow" class="toast">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = '默认消息', duration = 2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 15px;
  color: #fff;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  z-index: 99999;
}
</style>