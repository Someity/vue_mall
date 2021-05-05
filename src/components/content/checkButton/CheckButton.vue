<template>
  <div class="check-button" :class="{check:isCheckd}" >
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'VueCheckbutton',
  props:{
    isCheckd :{
      type:Boolean,
      default:false
    }
  },
  components: {  },
  directives: {  },
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #ccc;
}
.check {
  border-color: pink;
  background-color: pink;

}
</style>