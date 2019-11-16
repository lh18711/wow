<template>
  <div class="main">
    <header>
      <router-link to="/">
        <img src="../../assets/img/home.png"
             alt="">
      </router-link>
      <h3>{{$route.params.name}}</h3>
      <router-link to="/category">
        <img src="../../assets/img/category.png"
             alt="">
      </router-link>

    </header>
    <div class="categorySwiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               @click="checkIndex(100);changeId(35)"
               :class="{active:swiperIndex == 100}">
            <img :src="$route.params.type == 0?require('../../assets/img/sofa.png'):require('../../assets/img/light.png')"
                 alt="">
            <p>All</p>
          </div>
          <div class="swiper-slide"
               v-for="(item, index) in categoryData[$route.params.type]&&categoryData[$route.params.type].list"
               :key="index"
               @click="checkIndex(index);changeId(item.id)"
               :class="{active:swiperIndex == index}">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="tabContent"
           :class="{on:tabIndex==1}"
           @click="changeTab(1);checkTab('onShelfTime','desc')">上新</div>
      <div class="tabContent"
           :class="{on:tabIndex==2}"
           @click="changeTab(2);checkTab('sales','desc')">销量</div>
      <div class="tabContent"
           :class="{on:tabIndex==3}"
           @click="changeTab(3);price()">价格<span><img src="../../assets/img/top.png"
               alt=""><img src="../../assets/img/bottom.png"
               alt=""></span></div>
    </div>
    <div class="commodity">
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
            <p>{{item.productTitle}}</p>
            <span>￥{{item.sellPrice}}</span>
            <div class="detail">{{item.prizeOrSlogan}}</div>
          </router-link>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import { getCdetail } from '../../api/index'
import Swiper from "swiper";
export default {
  computed: { //获取json数据
    categoryData () {
      return this.$store.state.category
    },
  },

  data () {
    return {
      id: 0, //用来监听路由id变化
      list: [],//存储请求回来的数据
      swiperIndex: 100,//顶层轮播高亮
      tabIndex: 1,//tab切换高亮
      flag: 1,//swiper初始化开关
      priceFlag: 1, //价格开关
      total: 4,
      finished: false,
      loading: false,
      pageNum: 0,
      sort: 'onShelfTime',
      order: 'desc'
    }
  },

  created () {//启用获取接口
    this.getData()
  },
  mounted () {//调用vuex中获取json
    this.$store.dispatch('getData')
  },
  updated () {
    this.init()
  },
  methods: {
    getData () {
      getCdetail(this.$route.params.id, this.sort, this.order, this.pageNum).then(res => {
        if (!res.success) {
          return;
        }
        this.list = this.list.concat(res.data);
        console.log(this.list)
        this.loading = false
        if (this.pageNum == this.total) {
          this.finished = true
        }
      })
    },
    init () { //初始化swiper
      if (this.flag) {
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3.9,
          observer: true // 很重要
        });
        this.flag = 0;
      }
    },
    checkIndex (val) { //列表高亮
      this.swiperIndex = val;
    },
    changeId (val) {//tab轮播切换商品id
      this.backInit()
      this.$route.params.id = val;
      this.id = val;
    },
    changeTab (val) {
      this.tabIndex = val
    },
    price () { //按销量排序
      this.backInit()
      if (this.priceFlag) {
        this.sort = 'price'
        this.order = 'asc'
        this.getData()
        this.priceFlag = 0;
      } else {
        this.order = 'desc'
        this.getData()
        this.priceFlag = 1;
      }
    },
    onLoad () {
      this.pageNum++
      this.getData()
    },
    checkTab (val1, val2) {
      this.backInit();
      this.sort = val1;
      this.order = val2;
      this.getData()
    },
    backInit () {
      this.finished = false;
      this.pageNum = 1;
      this.list = []
    }
  },
  watch: {
    id () {
      this.getData()
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  font-size: 13.333px;
  line-height: 1.5;
  s {
    text-decoration: line-through;
  }
  img {
    width: 100%;
    display: block;
  }
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
  img {
    display: block;
    width: 0.52rem !important;
    margin-top: 0.06rem;
    margin-bottom: 0.06rem;
  }
}
.categorySwiper {
  background: url(https://img.wowdsgn.com/category/background/10.jpg?imageslim)
    no-repeat left center;
  background-size: 7.5rem;
  position: relative;
  height: 1.6rem;
  padding: 0.3rem 0rem;
  /deep/ .swiper-slide {
    width: 1.6rem !important;
    height: 1.6rem !important;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.26rem;
    font-weight: 700;
    color: #fff;
    margin-left: 0.3rem;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.2);
    a {
      color: #fff;
      display: block;
      padding: 0 0.25rem;
    }
    img {
      width: 0.8rem;
      margin: 0 auto;
    }
  }
  .active {
    background: rgba(255, 255, 255, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 1) !important;
  }
}
.tab {
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  .tabContent {
    color: #808080;
    margin: 0rem 0.75rem;
    font-size: 0.26rem;
    width: 1rem;
    text-align: center;
    position: relative;
    span {
      font-size: 0;
      text-align: center;
      width: 0.16rem;
      height: 0.4rem;
      right: -0.26rem;
      position: absolute;
      top: 37%;
    }
  }
  .on {
    border-bottom: 0.06rem solid #202020;
    color: #000 !important;
    height: 0.8rem;
  }
}
.commodity {
  border-top: 1px solid #f5f5f5;
  .van-list {
    display: flex;
    flex-wrap: wrap;
    /deep/ .van-list__finished-text {
      text-align: center;
      width: 100%;
      background-color: #fff;
    }
    .content {
      width: 50%;
      border-right: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      font-size: 0;
      position: relative;
      padding-bottom: 0.1rem;
      height: 5.6rem;
      box-sizing: border-box;
      a {
        display: block;
        width: 100%;
        position: relative;
        font-size: 0;
        padding-bottom: 0.1rem;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          position: relative;
          margin-bottom: 0.05rem;
          margin-left: 0.3rem;
          width: 88%;
          margin-top: 0.5rem;
          color: #808080;
          font-size: 0.25rem;
          white-space: nowrap;
        }
        span {
          font-size: 0.26rem;
          color: #000;
          margin-right: 0.1rem;
          margin-left: 0.3rem;
        }
        .detail {
          color: #808080;
          font-size: 0.22rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 80%;
          margin-left: 0.3rem;
        }
      }
    }
  }
}
</style>