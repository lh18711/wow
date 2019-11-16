<template>
  <div style="background:#fff;height:auto"
       class="index">
    <div class="swiper-container banner">
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
    <van-list v-model="loading"
              style="background:#f1f1f1"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <div class="pagemodel"
           v-for="(item, index) in list"
           :key="index">
        <div class="pagemodel-title"
             v-if="item.moduleName !== '分割'"></div>
        <img :src="item.moduleContent.bannerImgSrc"
             alt=""
             v-if="item.moduleContent.bannerImgSrc">
        <div class="bannergroup"
             v-if="!item.moduleContent.products">
          <div class="bannercontent"
               v-for="(v, i) in item.moduleContent.banners"
               :key="i">
            <img :src="v.bannerImgSrc"
                 alt="">
          </div>
        </div>
        <div class="bannerdiscount"
             v-if="item.moduleContent.products">
          <div class="bannerDcontent"
               v-for="(v, i) in item.moduleContent.banners"
               :key="i">
            <img :src="v.bannerImgSrc"
                 alt="">
            <div class="productlist">
              <div class="productDetail"
                   v-for="(value, index) in item.moduleContent.products"
                   :key="index">
                <router-link :to="{name:'item',params:{id:value.productId,pId:value.parentProductId}}">
                  <img :src="value.productImg"
                       alt="">
                  <p>{{value.productTitle}}</p>
                  <div class="price">
                    <span>￥{{value.originalPrice}}</span>
                    <del>￥{{value.sellPrice}}</del>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import { getWowIndex } from '../api/index.js'
import Swiper from "swiper";
export default {
  data () {
    return {
      tabId: 1,
      pageNum: 1,
      list: [],
      bannerList: [],
      bannergroup: [],
      finished: false,
      loading: false,
      total: 9
    }
  },
  created () {
    this.getData();
  },
  mounted () {
    this.init();
  },
  methods: {
    getData () {
      getWowIndex(this.pageNum, this.tabId).then(res => {
        // this.list = res.data.modules;
        this.list = this.list.concat(res.data.modules)
        this.bannerList = this.list[0].moduleContent.banners;
        this.loading = false
        if (this.pageNum == this.total) {
          this.finished = true
        }
      })
    },
    init () {
      // eslint-disable-next-line no-unused-vars
      var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
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
  }
}
</script>
<style lang="scss" scoped>
a {
  color: #222;
}
.banner {
  height: 4.98rem;
  background: #f1f1f1;
  margin-bottom: 0.3rem;
  img {
    width: 100%;
  }
  .swiper-pagination {
    background-color: rgba(255, 255, 255, 0.45);
    width: auto;
    height: 0.2rem;
    line-height: 0.143rem;
    position: absolute;
    left: 50%;
    bottom: 0.24rem;
    transform: translateX(-50%);
    border-radius: 1rem;
    padding: 0rem 0.05rem;
  }
}
.pagemodel {
  background-color: #fff;
  margin-bottom: 0.3rem;
  img {
    display: block;
    width: 100%;
  }
  &-title {
    padding: 0.26rem 0rem 0rem;
  }
  .bannergroup {
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    .bannercontent {
      width: 48.5%;
      img {
        width: 100%;
        display: block;
        margin-bottom: 0.2rem;
      }
    }
  }
  .bannerdiscount {
    padding: 0.3rem 0.3rem 0rem;
    .productlist {
      display: flex;
      justify-content: flex-start;
      .productDetail {
        width: 31.4%;
        margin-right: 0.2rem;
        p {
          font-size: 12px;
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
          height: 0.355rem;
          text-align: center;
          display: flex;
          justify-content: center;
          span {
            line-height: 0.355rem;
            display: block;
            font-size: 0.24rem;
          }
          del {
            text-decoration: line-through;
            line-height: 0.355rem;
            display: block;
            font-size: 0.2rem;
            color: #ccc;
          }
        }
      }
    }
  }
  &:first-child {
    display: none;
  }
}
.index {
  font-size: 12px;
  text-align: center;
}
</style>