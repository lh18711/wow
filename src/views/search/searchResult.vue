<template>
  <div class="main">
    <tab-bar @changeTab='newSort($event)'></tab-bar>
    <div class="complex">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <div class="content"
             v-for="(item, index) in list"
             :key="index">
          <router-link :to="{name:'item',params:{id:item.productId,pId:item.parentProductId}}">
            <img :src="item.productImg"
                 alt="">
            <div class="productTitle">
              {{item.productTitle}}
            </div>
            <span>￥{{item.sellPrice}}</span>
          </router-link>
        </div>
      </van-list>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  font-size: 12px;
  img {
    width: 100%;
    display: block;
  }
}
.complex {
  background: #fff;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;

  .van-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /deep/ .van-list__finished-text {
      text-align: center;
      width: 100%;
      background-color: #fff;
    }
    .content {
      width: 50%;
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      box-sizing: border-box;
      font-size: 0;
      position: relative;
      padding-bottom: 0.1rem;
      height: 5.6rem;
      .productTitle {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        margin-bottom: 0.05rem;
        margin-left: 0.3rem;
        width: 88%;
        margin-top: 0.5rem;
        color: #808080;
        font-size: 0.25rem;
      }
      span {
        font-size: 0.26rem;
        color: #000;
        margin-right: 0.1rem;
        margin-left: 0.3rem;
      }
    }
  }
}
</style>
<script>
import tabBar from '../../components/tabBar'
import { getSearch } from '../../api/index.js'
export default {
  components: {
    tabBar
  },
  data () {
    return {
      sort: 'onShelfTime',
      order: 'desc',
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
      getSearch(this.$route.params.keywords, this.sort, this.order, this.pageNum).then(res => {
        if (!res.success) {
          this.onLoad()
          return;
        }
        this.list = this.list.concat(res.data.products)
        this.loading = false;
        if (!res.data.products.length) {
          this.finished = true
          console.log(123)
        }
      })
    },
    newSort (e) {
      this.pageNum = 0;
      this.list = [];
      this.finished = false;
      console.log(e);
      this.sort = e.sort;
      this.order = e.order;
      this.getData()
    },
    onLoad () {
      this.pageNum++
      this.getData()
    }
  },
}
</script>