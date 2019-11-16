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
    <!-- 顶部产品组 -->
    <div class="mustBuy">
      <div class="buyTitle">
        <h1>{{list[1]&&list[1].moduleName}}</h1>
        <h3>{{list[1]&&list[1].moduleDescription}}</h3>
      </div>
      <div class="buyContent">
        <!-- 轮播图 -->
        <div class="swiper-container"
             v-if="mustList.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide buyDetail"
                 v-for="(item, index) in mustList"
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
    <!-- 横向产品组 -->
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <div class="content"
           v-for="(item, index) in list"
           :key="index">
        <div class="contentTitle">
          <h1>{{item.moduleName}}</h1>
          <h3>{{item.moduleDescription}}</h3>
        </div>
        <div class="complex">
          <div class="complexIn">
            <div class="comDetail"
                 v-for="(v, i) in item.moduleContent.products"
                 :key="i">
              <router-link :to="{name:'item',params:{id:v.productId,pId:v.parentProductId}}">
                <img :src="v.productImg"
                     alt="">
                <div class="price">
                  <p>{{v.productTitle}}</p>
                  <span>￥{{v.sellPrice}}</span>
                  <s>￥{{v.originalPrice}}</s>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="contentMore">
          <router-link to="111">
            查看全部
          </router-link>
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
      pageNum: 0,
      tabId: 10006,
      list: [],
      bannerList: [],
      mustList: [],
      total: 2,
      finished: false,
      loading: false,
      flag: 1,
      flag1: 1
    }
  },
  created () {
    this.getData()
  },
  updated () {
    this.init();
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
        this.mustList = this.list[1].moduleContent.products;
        console.log(this.mustList)
        for (let i in this.list) { //处理一下这个返回列表 每一栏只显示6个
          if (i == 0 || i == 1) {
            continue;
          }
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
      });
      if (this.flag1) {
        var swiper1 = new Swiper('.swiper-container1', {
          autoplay: true,
          // loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          observer: true // 很重要
        })
        this.flag1 = 0;
      }

    },
    onLoad () {
      this.pageNum++
      this.getData()
    }
  },
}
</script>
<style lang="scss" scoped>
* {
  touch-action: none;
}
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
  .buyMore {
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
}
.content {
  background-color: #fff;
  margin-bottom: 0.3rem;
  &:first-child {
    display: none;
  }
  &:nth-child(2) {
    display: none;
  }
  .contentTitle {
    padding: 0.26rem 0rem 0rem;
    text-align: center;
    h1 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      margin-bottom: 0.2rem;
    }
  }
  .complex {
    background: #fff;
    overflow: hidden;
    .complexIn {
      border-top: 1px solid #f5f5f5;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .comDetail {
        box-sizing: border-box;
        width: 50%;
        height: 5.9rem;
        border-bottom: 1px solid #f5f5f5;
        border-right: 1px solid #f5f5f5;
        .price {
          padding: 0rem 0.32rem;
          position: relative;
          margin-top: 0.2rem;
          font-size: 0;
          p {
            padding-top: 0.1rem;
            color: #808080;
            font-size: 0.28rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          span {
            font-size: 0.32rem;
            margin-right: 0.1rem;
          }
          s {
            font-size: 0.24rem;
            color: #ccc;
          }
        }
      }
    }
  }
  .contentMore {
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
}
</style>