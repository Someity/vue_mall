<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'VueBacktop',
  components: {  },
  directives: {  },
  data() {
    return {
      
    };
  },
 
};
</script>

<style scoped>
.back-top {
  position: fixed;
    bottom: 55px;
    right: 8px;
}
.back-top img {
    height: 44px;
    width: 44px;
    opacity: .8;

  }
</style>