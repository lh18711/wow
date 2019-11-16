<template>
  <div style="background:#f1f1f1;height:100%">
    <div class="userInfo">
      <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKuLYSa88sXr0Xm6vfsbRib6U0bCbl0u0oC7Y0r38rv80IbfTkaic7ly2EibRYBgVfEia1ys6kpceJw1A/132"
           alt="">
      <div class="user">
        <p>黄昏晓</p>
        <p>闭关中.....</p>
      </div>
    </div>
    <div class="orderAll">
      <div class="title">
        全部订单
      </div>
      <div class="item">
        <img src="https://m.wowdsgn.com/static/img/waite-pay.png"
             alt="">
        <div class="orderStatus">
          <span>待付款</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="item">
        <img src="https://m.wowdsgn.com/static/img/waite-delivery.png"
             alt="">
        <div class="orderStatus">
          <span>待发货</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="item">
        <img src="https://m.wowdsgn.com/static/img/waite-goods.png"
             alt="">
        <div class="orderStatus">
          <span>待收货</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="item">
        <img src="https://m.wowdsgn.com/static/img/finished.png"
             alt="">
        <div class="orderStatus">
          <span>待评论</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="item">
        <img src="https://m.wowdsgn.com/static/img/returns.png"
             alt="">
        <div class="orderStatus">
          <span>退换货</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
    </div>
    <div class="mine">
      <div class="gift">
        <router-link to="/myfavourite">
          <span>我的收藏</span>
          <i class="iconfont">&#xe6d7;</i>
        </router-link>
      </div>
      <div class="gift">
        <span>我的礼券</span>
        <i class="iconfont">&#xe6d7;</i>
      </div>
      <div class="gift">
        <span>客服电话</span>
        <span class="telphone">周一至周五 9:00 - 18:30</span>
        <i class="iconfont">&#xe6d7;</i>
      </div>
    </div>
    <button>退出登录</button>
  </div>
</template>
<style lang="scss" scoped>
.userInfo {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  margin: 0.3rem 0rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    margin: 0.2rem 0.3rem;
  }
  .user {
    p:nth-child(1) {
      height: 0.48rem;
      line-height: 0.48rem;
      color: #000;
      font-size: 0.34rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p:nth-child(2) {
      width: 5rem;
      height: 0.34rem;
      line-height: 0.34rem;
      color: #808080;
      font-size: 0.24rem;
      overflow: hidden;
    }
  }
}
.orderAll {
  width: 100%;
  background-color: #fff;
  padding-left: 0.3rem;
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  .title {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    color: #000;
    border-bottom: 1px solid #eaeaea;
  }
  .item {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: block;
      width: 0.48rem;
      height: 0.48rem;
      margin-right: 0.1rem;
    }
    .orderStatus {
      width: 6.51rem;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.26rem;
      color: #4a4a4a;
      border-bottom: 1px solid #eaeaea;
      i {
        float: right;
        color: #ccc;
        font-size: 0.5rem;
        margin-right: 0.3rem;
      }
    }
  }
}
.mine {
  margin-bottom: 0.3rem;
  .gift {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: relative;
    background-color: #fff;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      font-size: 0.3rem;
      color: #000;
      margin-left: 0.3rem;
    }
    .telphone {
      margin-left: 2.4rem;
      font-size: 0.2rem;
      color: #ccc;
    }
    i {
      color: #ccc;
      font-size: 0.5rem;
      margin-right: 0.3rem;
    }
  }
}
button {
  margin-bottom: 0.2rem;
  outline: none;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  color: #ff7070;
  text-align: center;
  background-color: #fff;
}
</style>