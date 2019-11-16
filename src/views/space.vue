<template>
  <div class="space"
       style="overflow:hidden">
    <div class="swiper-container1"
         style="position:relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="(item, index) in bannerList"
             :key="index">
          <img :src="item.bannerImgSrc"
               alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 必买列表 -->
    <div class="mustBuy">
      <div class="buyTitle">
        <h1>{{mustBuyList.moduleName}}</h1>
        <h3>{{mustBuyList.moduleDescription}}</h3>
      </div>
      <div class="buyContent">
        <!-- 轮播图 -->
        <div class="swiper-container"
             v-if="mustBuyList.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide buyDetail"
                 v-for="(item, index) in mustBuyList"
                 :key="index">
              <router-link :to="{name:'item',params:{id:item.productId,pId:item.parentProductId}}">
                <img :src="item.productImg"
                     alt="">
                <div class="buyDetailInfo">
                  <p>{{item.productName}}</p>
                  <span>￥{{item.originalPrice}}</span>
                  <s>￥{{item.sellPrice}}</s>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="buyMore">
        <router-link to="111">查看全部</router-link>
      </div>
    </div>
    <!-- 品牌专区 -->
    <van-list v-model="loading"
              style="background:#f1f1f1"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <div class="spaceProduct"
           v-for="(v, i) in list"
           :key="i">
        <div class="productTitle">
          <h1 v-if="v.moduleContent.name">
            {{v.moduleContent.name}}
          </h1>
          <h3>{{v.moduleDescription}}</h3>
        </div>
        <div class="productBanner">
          <div class="banner"
               v-for="(item1, index1) in v.moduleContent.banners"
               :key="index1">
            <img :src="item1.bannerImgSrc"
                 alt="">
          </div>
        </div>
        <div class="productList">
          <div class="productListIn"
               v-for="(item, index) in v.moduleContent.products"
               :key="index">
            <router-link :to="{name:'item',params:{id:item.productId,pId:item.parentProductId}}">
              <img alt=""
                   :src="item.productImg">
              <p>{{item.productTitle}}</p>
              <div class="price">
                <span>￥{{item.sellPrice}}</span>
                <s>￥{{item.originalPrice}}</s>
              </div>
            </router-link>
          </div>
          <div class="buyMore">
            <router-link to="/category">查看全部</router-link>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getWowIndex } from '../api/index.js'
export default {
  data () {
    return {
      tabId: 10005,
      pageNum: 0,
      list: [],
      mustBuyList: [],
      bannerList: [],
      total: 2,
      finished: false,
      loading: false,
    }
  },
  created () {
    this.getData()
  },
  updated () {
    this.init()
  },
  methods: {
    getData () {
      getWowIndex(this.pageNum, this.tabId).then(res => {
        if (!res.success) {
          return;
        }
        this.list = this.list.concat(res.data.modules);
        // console.log(this.list)
        this.bannerList = this.list[0].moduleContent.banners;
        this.mustBuyList = this.list[1].moduleContent.products;
        console.log(this.list)
        for (let i in this.list) { //处理一下这个返回列表 每一栏只显示6个
          if (i == 0 || i == 1 || i == 6) {
            continue;
          }
          console.log(i)
          this.list[i].moduleContent.products = this.list[i].moduleContent.products.slice(0, 6)
        }
        this.loading = false
        if (this.pageNum == this.total) {
          this.finished = true
        }
      })
    },
    init () {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3.5,
        observer: true
        // loop: true
        // spaceBetween: 30,
      });
      var swiper1 = new Swiper('.swiper-container1', {
        autoplay: true,
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true // 很重要
      })
    },
    onLoad () {
      this.pageNum++
      this.getData()
    }
  },
}
</script>
<style lang="scss" scoped>
.space {
  font-size: 12px;
  width: 100%;
  background: #f1f1f1;
  line-height: 1.5;

  img {
    display: block;
    width: 100%;
  }
  s {
    text-decoration: line-through;
  }
  a {
    color: #222;
  }
}
.mustBuy {
  background-color: #fff;
  margin-bottom: 0.3rem;
  .buyTitle {
    padding: 0.26rem 0rem 0rem;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
      text-align: center;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
      text-align: center;
      font-weight: 300;
    }
  }
  .buyContent {
    margin: 0;
    height: 3rem;
    /deep/ .buyDetail {
      //样式穿透
      width: 1.8rem !important;
      height: 2.6rem;
      flex-wrap: wrap;
      background-color: #fff;
      display: flex;
      justify-content: center;
      margin-right: 0.15rem;
      margin-left: 0.2rem;
      .buyDetailInfo {
        font-size: 0;
        width: 1.7rem;
        height: 0.71rem;
        margin-top: 0.1rem;
        margin-right: 0.1rem;
        text-align: center;
        p {
          font-size: 0.24rem;
          color: #808080;
          width: 1.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        span {
          margin: 0;
          display: inline-block;
          font-size: 0.24rem;
        }
        s {
          display: inline-block;
          font-size: 0.22rem;
          color: #ccc;
        }
      }
    }
  }
}
.spaceProduct {
  background-color: #fff;
  margin-bottom: 0.3rem;
  &:nth-child(1) {
    display: none;
  }
  &:nth-child(2) {
    display: none;
  }
  .productTitle {
    padding: 0.26rem 0rem 0rem;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
      text-align: center;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
      text-align: center;
    }
  }
  .productBanner {
    padding: 0.3rem 0.3rem 0rem;
    background: #fff;
    display: flex;
    .banner {
      margin-right: 0.3rem;
      flex: 1;
      &:last-child {
        margin: 0;
      }
    }
  }
  .productList {
    border-top: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .productListIn {
      box-sizing: border-box;
      width: 50%;
      height: 5.9rem;
      border-bottom: 1px solid #f5f5f5;
      border-right: 1px solid #f5f5f5;
      img {
        width: 100%;
      }
      p {
        width: 100%;
        margin: 0.1rem 0rem 0rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: center;
      }
      .price {
        text-align: center;
        span {
          margin: 0;
          display: inline-block;
          font-size: 0.24rem;
        }
        s {
          display: inline-block;
          font-size: 0.22rem;
          color: #ccc;
        }
      }
    }
  }
}
.buyMore {
  margin: 0 auto;
  text-align: center;
  padding: 0.3rem 0.4rem;
  a {
    font-size: 0.24rem;
    color: #4a4a4a;
    background: url("../assets/img/mustBuyMore.png") no-repeat right center;
    background-size: 10%;
    padding: 0.3rem;
  }
}
</style>