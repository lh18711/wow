<template>
  <div class="bottomTab">
    <div class="bottomTabIn">
      <router-link to="/wowIndex">
        <img src="../assets/img/home.png"
             alt="">
        <span>首页</span>
      </router-link>
    </div>
    <div class="bottomTabIn">
      <router-link to="/category">
        <img src="../assets/img/category.png"
             alt="">
        <span>分类</span>
      </router-link>
    </div>
    <div class="bottomTabIn">
      <router-link to="/cart">
        <img src="../assets/img/buy.png"
             alt="">
        <span>购物车</span>
      </router-link>
    </div>
    <div class="bottomTabIn">
      <router-link to="/message">
        <img src="../assets/img/message.png"
             alt="">
        <span>消息</span>
      </router-link>
    </div>
    <div class="bottomTabIn">
      <router-link to="/my">
        <img src="../assets/img/me.png"
             alt="">
        <span>我</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
.bottomTab {
  width: 100%;
  height: 0.88rem;
  position: fixed;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #f5f5f5;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  &In {
    width: 20%;
    height: 100%;
    font-size: 0rem;
    color: #000;
    text-align: center;
    a {
      display: block;
      color: #808080;
      img {
        display: block;
        width: 0.46rem;
        margin-right: auto;
        margin-left: auto;
      }
      span {
        line-height: 1.5;
        font-size: 0.2rem;
        display: block;
      }
      &.router-link-active span {
        color: #222;
      }
    }
  }
}
</style>