<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>


<style>
@import 'assets/css/base.css';
/*alert 成功弹出框样式*/

.el-message--success {
  top: 80px !important;
  width: 80%;
}

.el-message .el-icon-success {
  font-size: 18px;
}

.el-message--success .el-message__content {
  font-size: 18px;
}
</style>
