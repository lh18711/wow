<template>
  <div class="main">
    <header>
      <search></search>
      <router-link to="/">
        <img src="../../assets/img/home.png"
             alt="">
      </router-link>
    </header>
    <router-view></router-view>
    <back-top></back-top>
  </div>
</template>
<style lang="scss" scoped>
.main {
  font-size: 0;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
}
header {
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.2rem 0rem 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  a {
    display: inline-block;
    width: 0.64rem;
    height: 0.64rem;
    line-height: 0.5rem;
    margin-right: 0.2rem;
  }
}
</style>
<script>
import search from '../../components/search';
import BackTop from '../../components/backTop';
export default {
  components: {
    search,
    BackTop
  }
}
</script>