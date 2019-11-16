<template>
  <div class="main">
    <header>
      <router-link to="/">
        <img src="../../assets/img/home.png"
             alt="">
      </router-link>
      <h3>尖叫精选</h3>
      <router-link to="/my">
        全部已读
      </router-link>

    </header>
    <van-list v-model="loading"
              style="background:#f1f1f1"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <div class="message"
           v-for="(item, index) in list"
           :key="index">
        <div class="time">{{item.createTime}}</div>
        <div class="messageItem">
          <div class="title">
            <span>{{item.msgTitle}}</span>
            <a :href="'https://m.wowdsgn.com/topic/'+item.targetId"><i class="iconfont">&#xe6d7;</i></a>
          </div>
          <p>{{item.msgContent}}</p>
          <div class="read"
               v-if="!item.isRead">•</div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<style lang="scss" scoped>
.main {
  background-color: #f1f1f1;
  line-height: 1.5;
}
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
  a {
    color: #222;
    font-size: 0.3rem;
  }
}
.message {
  .time {
    text-align: center;
    font-size: 0.25rem;
    margin-top: 0.2rem;
  }
  .messageItem {
    position: relative;
    margin: 0.2rem 0.4rem 0rem 0.4rem;
    background: #fff;
    overflow: hidden;
    padding: 0.2rem;
    .title {
      height: 0.5rem;
      font-size: 0.26rem;
      position: relative;
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-between;
      span {
        color: #65686c;
        font-weight: bold;
      }
      a {
        color: #65686c;
        font-size: 0.22rem;
        i {
          font-size: 0.32rem;
          margin-left: 0.1rem;
          margin-right: 0.2rem;
        }
      }
    }
    p {
      margin-top: 0.2rem;
      color: #65686c;
      font-size: 0.26rem;
      margin-right: 0.2rem;
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
</style>
<script>
import { messageList } from '../../api/index.js'
export default {
  data () {
    return {
      list: [],
      pageNum: 0,
      finished: false,
      loading: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      messageList(this.pageNum).then(res => {
        if (!res.success) {
          return;
        }
        this.list = this.list.concat(res.data)
        this.loading = false
        if (res.data.length == 0) {
          this.finished = true;
        }
      })
    },
    onLoad () {
      this.pageNum++
      this.getData()
    }
  },
}
</script>