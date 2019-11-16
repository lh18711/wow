<template>
  <div>
    <header>
      <router-link to="/">
        <img src="../../assets/img/home.png"
             alt="">
      </router-link>
      <h3>消息中心</h3>
      <router-link to="/my">
        <img src="../../assets/img/me.png"
             alt="">
      </router-link>

    </header>
    <div class="list">
      <div class="messageInfo"
           v-for="(item, index) in list"
           :key="index">
        <img src="https://m.wowdsgn.com/static/img/official_message.png"
             alt="">
        <div class="messageContent">
          <div class="messageTop">
            <span>{{item.msgType == 1?'系统通知':'尖叫精选'}}</span>
            <router-link to="/message/list"><i class="iconfont">&#xe6d7;</i></router-link>
          </div>
          <a :href="item.msgType == 2?'https://m.wowdsgn.com/topic/'+item.targetId:'https://m.wowdsgn.com/coupon'">
            <p>{{item.msgContent}}</p>
            <p>{{item.createTime}}</p>
          </a>
          <div class="read"
               v-if="!item.isRead">•</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
header {
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  h3 {
    font-size: 0.34rem;
    font-weight: 700;
  }
  img {
    display: block;
    width: 0.52rem !important;
    margin-top: 0.06rem;
    margin-bottom: 0.06rem;
  }
}
.list {
  line-height: 1.5;
  padding: 0.4rem 0.5rem;
  background-color: #fff;
  margin-bottom: 0.3rem;
  .messageInfo {
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: flex-start;
    img {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 100%;
      border: 1px solid #c1c0c6;
    }
    .messageContent {
      position: relative;
      width: 5.7rem;
      overflow: hidden;
      margin-left: 0.5rem;
      .messageTop {
        border-bottom: 1px solid #eaeaea;
        height: 0.8rem;
        font-size: 0.26rem;
        position: relative;
        display: flex;
        justify-content: space-between;
        font-size: 0.32rem;
        span {
          color: #65686c;
          font-weight: bold;
        }
        a {
          color: #65686c;
          i {
            font-size: 0.4rem;
          }
        }
      }
      a {
        p:nth-child(1) {
          margin-top: 0.2rem;
          color: #65686c;
          font-size: 0.28rem;
          margin-right: 0.2rem;
        }
        p:nth-child(2) {
          margin-top: 0.2rem;
          color: #ccc;
          font-size: 0.28rem;
        }
      }
      .read {
        position: absolute;
        right: 0.2rem;
        top: 0.8rem;
        color: red;
        font-size: 0.5rem;
        display: inline;
      }
    }
  }
}
</style>
<script>
import { message } from '../../api/index.js'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      message().then(res => {
        this.list = res.data;
      })
    }
  },
}
</script>