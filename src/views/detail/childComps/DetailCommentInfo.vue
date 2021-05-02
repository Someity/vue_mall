<template>

  <!-- 商品评论 -->
  <div class="comment-info" v-if="Object.keys(commentInfo).length != 0">

    <div class="header-info">
      <div class=title>用户评价</div>
      <div class="more">更多&gt;&gt;</div>
    </div>

    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="content-info">
      <p>{{commentInfo.content}}</p>
      <div class="buy-info">
        <span class="time">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>

    <div class="imgs-info">
      <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
    </div>
  </div>
</template>

<script>

  // // 引入自己的工具方法
  import {formatDate} from 'common/utils.js'

  export default {
    props: {
      commentInfo: {
        type: Object,
        defaule () {
          return {}
        }
      }
    },
    // 过滤器
    filters:{
       showDate (value) {
        let date = new Date(value*1000);
        return formatDate(date, 'yyyy-MM-dd');
      }
    }
    
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .header-info {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .title {
    float: left;
    font-size: 15px;
  }

  .more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
    color: #f40;
  }
  .user-info {
    padding: 10px 0 5px;
  }

  .user-info img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .user-info span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .content-info {
    padding: 0 5px 15px;
  }

  .content-info p {
    font-size: 14px;
    line-height: 1.5;
  }

  .content-info .buy-info {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .buy-info .time {
    margin-right: 60px;
  }

  .imgs-info {
    margin-top: 10px;
  }

  .imgs-info img {
    width: 70px;
    margin-right: 5px;
    vertical-align: top;
  }
</style>