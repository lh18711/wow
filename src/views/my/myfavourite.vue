<template>
  <div>
    <header>
      <router-link to="/">
        <img src="../../assets/img/home.png"
             alt="">
      </router-link>
      <h3>我的收藏</h3>
      <router-link to="/my">
        <img src="../../assets/img/me.png"
             alt="">
      </router-link>

    </header>
    <van-list v-model="loading"
              style="background:#f1f1f1"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              class="content">

      <div class="box"
           v-for="(item, index) in list"
           :key="index">
        <router-link :to="{name:'item',params:{id:item.productId,pId:item.parentProductId}}">
          <img :src="item.productImg"
               alt="">
        </router-link>
      </div>

    </van-list>
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
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /deep/ .van-list__finished-text {
    width: 100%;
  }
  .box {
    width: 50%;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
<script>
import { myFavourite } from '../../api/index.js'
export default {
  data () {
    return {
      pageNum: 0,
      list: [],
      finished: false,
      loading: false,
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      myFavourite(this.pageNum).then(res => {
        if (!res.success) {
          return;
        }
        this.list = this.list.concat(res.data.favoriteProductVoList)
        this.loading = false;
        if (!res.data.favoriteProductVoList.length) {
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