<template>
  <div class="main">
    <header>
      <img src="../assets/img/titleView.png"
           alt=""
           class="logo">
      <search></search>
    </header>
    <div class="navBar">
      <ul>
        <router-link to='/wowIndex/reco'>推荐</router-link>
        <router-link to='/wowIndex/space'>品质生活</router-link>
        <router-link to='/wowIndex/living'>居家好物</router-link>
      </ul>
    </div>
    <router-view></router-view>
    <back-top></back-top>
  </div>
</template>
<style lang="scss" scoped>
header {
  font-size: 13.333px;
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 0rem 0.2rem 0rem 0.2rem;
  align-items: center;
  img {
    width: 1.3rem;
  }
  .search {
    width: 5.4rem;
    height: 0.56rem;
    line-height: 0.56rem;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    margin-left: 0.15rem;
    margin-bottom: 0.05rem;
    span {
      display: inline-block;
      vertical-align: top;
      &:first-child {
        margin: 0 0.1rem;
      }
    }
    input {
      vertical-align: top;
      background-color: #f5f5f5;
      display: inline-block;
      width: 80%;
      height: 0.54rem;
    }
  }
}
.navBar {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  background: #fff;
  ul {
    background: #fff;
    height: 0.8rem;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    a {
      font-size: 0.28rem;
      color: #808080;
      &.router-link-exact-active {
        border-bottom: 0.06rem solid #202020;
        color: #000;
        height: 0.74rem;
      }
    }
  }
}
.main {
  margin-bottom: 0.88rem;
}
</style>
<script>
import search from '../components/search';
import BackTop from '../components/backTop';
export default {
  components: {
    search,
    BackTop
  }
}
</script>