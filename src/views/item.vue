<template>
  <!-- 该页面有太多太多地方过于臃肿,如组件不分等等,写到结尾才发现很多地方有极强的复用性 如果日后有时间希望能把一些公共部分组件化 -->
  <div class="main">
    <header>
      <router-link to="/">
        <img src="../assets/img/home.png"
             alt="">
      </router-link>
      <h3>商品详情</h3>
      <router-link to="/search">
        <img src="../assets/img/search.png"
             alt="">
      </router-link>

    </header>
    <div class="topImg">
      <img :src="myitem.productImage"
           alt="">
    </div>
    <div class="titleCon">
      <div class="titleConIn">
        <P>{{myitem.productTitle}}</P>
        <b>￥{{myitem.sellPrice}}</b>
      </div>
      <div class="sale">
        <div class="salein">
          <img src="../assets/img/fullCutTag.png"
               alt="">
          <div class="sellContent">
            <p>满300减30</p>
            <p>2019.11.12 - 2019.11.30</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="brandCountry">
        <img src="../assets/img/icon-location.png"
             alt="">
        <span>中国</span>
      </div>
      <img src="../assets/img/wow.jpg"
           alt="">
      <div class="brandInfo">
        <p>尖叫实验室</p>
        <p>尖叫实验室于2016年1月诞生于中国上海，是一个由北欧家居集合品牌尖叫设计投资，国内知名设计师团队创立，聚焦北欧文化与生活的新北欧主义家具设计品牌
          尖叫实验室与众多国际知名设计师联合进行设计及研发, 致力于为都市年轻群体带来实用而又充满想象力的日常家具产品。</p>
      </div>
    </div>
    <div class="itemshow">
      <img :src="item.content"
           alt=""
           v-for="(item, index) in itemImg.itemDetailIntroVoList"
           :key="index">
    </div>
    <div class="infoHeader">
      <p>—</p>
      <div class="infoCenter">
        <span>产品信息</span>
        <span>INFORMATION</span>
      </div>
      <p>—</p>
    </div>
    <img :src="itemImg.itemSizeImgVoList&&itemImg.itemSizeImgVoList[0].imgUrl"
         alt="">
    <div class="productDetail">
      <span>详细信息参数</span>
      <div class="tips">
        <p v-for="(item, index) in itemDetail"
           :key="index">
          <span>{{item.attributeName}}</span>
          <span>{{item.attributeValueText}}</span>
        </p>
      </div>
    </div>
    <div class="infoHeader"
         v-if="itemImg.itemRecommendVo">
      <p>—</p>
      <div class="infoCenter">
        <span>推荐搭配</span>
        <span>Match</span>
      </div>
      <p>—</p>
    </div>
    <img :src="itemImg.itemRecommendVo&&itemImg.itemRecommendVo.imgSrc"
         alt="">
    <div class="productList">
      <div class="productIn"
           v-show="index<3"
           v-for="(item, index) in itemImg.itemRecommendVo&&itemImg.itemRecommendVo.recommendSkuList"
           :key="index">
        <img :src="item.productImg"
             alt="">
        <p>
          {{item.productTitle}}
        </p>
        <span>
          ￥{{item.sellPrice}}
        </span>
      </div>
    </div>
    <!-- 复用性太高了显然写成组件用proto定义更好 但是已经写到这了就算了 后续有时间可以优化成组件 -->
    <div class="infoHeader">
      <p>—</p>
      <div class="infoCenter">
        <span>其他信息</span>
        <span>OTHER</span>
      </div>
      <p>—</p>
    </div>
    <div class="other">
      <div class="otherTitle">
        <span>服务承诺</span>
        <i class="iconfont"
           @click="flag1 = !flag1"
           :class="{rotate:flag1}">&#xe6d7;</i>
      </div>
      <div class="otherContent"
           :class="{hide:!flag1}">
        <img src="https://m.wowdsgn.com/static/img/item/servicepromise_bg.png"
             alt="">
        <div class="otherItem left">
          <img src="https://m.wowdsgn.com/static/img/item/promise2.png"
               alt="">
          <p>价格保障/变动返差价</p>
          <p>7日保价</p>
        </div>
        <img src="../assets/img/dashLine.png"
             alt="">
        <div class="otherItem right">
          <img src="https://m.wowdsgn.com/static/img/item/promise3.png"
               alt="">
          <p>三年内质保</p>
          <p>7日退换</p>
        </div>
      </div>
      <div class="otherTitle">
        <span>价格说明</span>
        <i class="iconfont"
           @click="flag2 = !flag2"
           :class="{rotate:flag2}">&#xe6d7;</i>
      </div>
      <div class="explain"
           :class="{hide:!flag2}">
        <p>划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考</p>
        <p>未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。</p>
        <p>此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准</p>
      </div>
    </div>
    <div class="infoHeader">
      <p>—</p>
      <div class="infoCenter">
        <span>猜你喜欢</span>
        <span>WHATS SHOT</span>
      </div>
      <p>—</p>
    </div>
    <!-- 太多太多地方 样式结构功能显然是一样的 下次做这种项目的时候一定要事先分析好哪些共用部分组件化 -->
    <div class="ifLike">
      <div class="ifLikeIn"
           v-for="(item, index) in aboutItem"
           :key="index">
        <router-link :to="'/item/'+item.productId+'/'+item.parentProductId">
          <img :src="item.productImg"
               alt="">
          <p>{{item.productTitle}}</p>
          <span>￥{{item.sellPrice}}</span>
        </router-link>
      </div>
    </div>
    <div class="buyBottom">
      <div class="bottomLeft">
        <i class="iconfont"
           :class="{likeit:isLike}"
           @click="likeit()">&#xe6c9;</i>
        <router-link to="/cart">
          <i class="iconfont">&#xe504;</i>
          <div class="cartCount"
               v-if="CartCount">{{CartCount}}</div>
        </router-link>
      </div>
      <div class="bottomCenter">
        <a href="javascript:;"
           @click="inCart(1)">加入购物车</a>
      </div>
      <div class="bottomRight">
        <a href="javascript:;"
           @click="inCart(0)">立即购买</a>
      </div>
    </div>
    <back-top></back-top>
    <buy-now @close='flag = false'
             :class="{hide:!flag}"
             :show='flag'
             :type='type'></buy-now>
  </div>
</template>
<style lang="scss" scoped>
.main {
  line-height: 1.5;
  font-size: 13.333px;
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
.topImg {
  width: 100%;
  height: 6rem;
  font-size: 0;
  margin-bottom: 0.3rem;
  img {
    width: 100%;
    display: block;
  }
}
.titleCon {
  padding: 0.3rem 0.5rem 0rem;
  background: #fff;
  margin-bottom: 0.1rem;
  box-sizing: border-box;
  .titleConIn {
    padding-bottom: 0.28rem;
    p {
      text-align: initial;
      margin-bottom: 0.2rem;
      font-size: 0.32rem;
    }
    b {
      font-size: 0.36rem;
      color: #000;
      font-family: PingFangSC-Semibold;
      margin-right: 0.1rem;
      vertical-align: sub;
    }
  }
  .sale {
    padding: 0.2rem 0rem;
    border-top: 1px solid #f2f2f2;
    font-size: 0;
    position: relative;
    .salein {
      margin-bottom: 0.2rem;
      display: flex;
      justify-content: flex-start;
      img {
        width: 0.64rem;
        display: block;
        height: 0.32rem;
      }
      .sellContent {
        width: 5.5rem;
        margin-left: 0.3rem;
        p {
          width: 4.48rem;
          font-size: 0.22rem;
          color: #808080;
          line-height: 1.5;
        }
      }
    }
  }
}
.brand {
  width: 100%;
  background: url(https://m.wowdsgn.com/static/img/designerBackground-87a73c0d943ed2ac610bf7ee85df602b.png)
    no-repeat left top;
  background-size: 100%;
  height: 1.92rem;
  position: relative;
  padding: 0.26rem 0;
  box-sizing: border-box;
  margin-bottom: 0.3rem;
  .brandCountry {
    text-align: right;
    height: 0.5rem;
    float: right;
    margin-right: 0.5rem;
    img {
      display: inline-block;
      width: 0.3rem;
      height: 0.3rem;
      vertical-align: middle;
    }
    span {
      font-size: 0.26rem;
      color: #fff;
      vertical-align: middle;
    }
  }
  & > img {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 100%;
    position: absolute;
    display: block;
    top: 0.3rem;
    left: 0.5rem;
  }
  .brandInfo {
    position: absolute;
    top: 0.5rem;
    left: 2.2rem;
    right: 0.3rem;
    p:nth-child(1) {
      font-size: 0.32rem;
      color: #ffffff;
      letter-spacing: 0.01rem;
      text-align: left;
      margin-bottom: 0.1rem;
    }
    p:nth-child(2) {
      font-size: 0.24rem;
      color: #ffffff;
      line-height: 0.4rem;
      margin-bottom: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
.itemshow {
  width: 100%;
  text-align: center;
  padding: 0.1rem 0rem 0rem;
  img {
    margin: 0.1rem auto;
  }
}
.productDetail {
  margin-bottom: 0.3rem;
  & > span {
    display: block;
    height: 1rem;
    line-height: 1rem;
    background-color: white;
    padding-left: 0.5rem;
    font-size: 16px;
    color: #000000;
    letter-spacing: 1px;
  }
  .tips {
    padding: 0rem 0.5rem 0.4rem;
    background: #fff;
    p {
      line-height: 0.64rem;
      color: #707070;
      font-size: 0.26rem;
      border-top: 1px solid #eaeaea;
      span:nth-child(1) {
        color: #707070;
        font-size: 0.26rem;
        display: inline-block;
        width: 30%;
      }
      span:nth-child(2) {
        color: #707070;
        font-size: 0.26rem;
        display: inline-block;
        width: 70%;
      }
    }
  }
}
.infoHeader {
  background-color: #f1f1f1;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.3rem 0;
  position: relative;
  p {
    padding-top: 0.2rem;
    padding-right: 0.1rem;
  }
  .infoCenter {
    text-align: center;
    span {
      display: block;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      &:nth-child(2) {
        font-size: 12px;
        margin-top: 0.1rem;
      }
    }
  }
}
.productList {
  padding: 0 0.3rem 0.3rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  .productIn {
    width: 31.4%;
    img {
      width: 100%;
    }
    p {
      line-height: 1.5;
      font-size: 16px;
      width: 100%;
      margin: 0.1rem 0rem 0rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-align: center;
    }
    span {
      line-height: 1.5;
      display: block;
      width: 100%;
      text-align: center;
      font-size: 0.24rem;
    }
  }
}
.other {
  border-bottom: 1px solid #f5f5f5;
  background-color: white;
  padding: 0 0.4rem;
  .otherTitle {
    padding: 0.4rem 0;
    position: relative;
    font-size: 0.32rem;
    background: #fff;
    font-family: PingFangSC-Regular;
    color: #000000;
    text-align: left;
    i {
      line-height: 1;
      width: 0.66rem;
      height: 0.66rem;
      vertical-align: middle;
      transform-origin: 50% 50%;
      float: right;
      color: #707070;
      font-size: 0.6rem;
      transition: 0.5s;
    }
    .rotate {
      transform: rotate(90deg);
    }
  }
  .otherContent {
    height: 2.8rem;
    transition: all 0.5s;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 2.8rem;
    }
    .otherItem {
      width: 50%;
      position: absolute;
      top: 0.5rem;
      img {
        margin: 0 auto;
        width: 0.84rem;
        height: 0.84rem;
      }
      p:nth-child(2) {
        margin-top: 0.15rem;
        text-align: center;
        font-family: PingFangSC-Light;
        font-size: 0.18rem;
        color: #ffffff;
      }
      p:nth-child(3) {
        line-height: 1.5;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 0.26rem;
        color: #ffffff;
        letter-spacing: 2px;
      }
    }
    img:nth-child(3) {
      width: 0.019rem;
      position: absolute;
      right: 50%;
      top: 50%;
      height: 50%;
      transform: translateY(-50%);
    }
    .right {
      right: 0;
    }
    .left {
      left: 0;
    }
  }
  .hide {
    color: #fff !important;
    margin: 0;
    padding-bottom: 0 !important;
    height: 0 !important;
  }
  .explain {
    transition: height 0.5s;
    overflow: hidden;
    height: 5.2rem;
    padding: 0rem 0.5rem 0.4rem;
    background: #fff;
    p {
      margin-bottom: 0.2rem;
      line-height: 0.48rem;
      color: #707070;
      font-size: 0.28rem;
    }
  }
}
.ifLike {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.88rem;
  .ifLikeIn {
    width: 50%;
    padding-bottom: 0.1rem;
    height: 5.6rem;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    p {
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
.buyBottom {
  display: flex;
  width: 7.5rem;
  height: 0.88rem;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #eaeaea;
  z-index: 3;
  .bottomLeft {
    width: 33.33%;
    background-color: #fff;
    position: relative;
    & > i {
      font-size: 0.5rem;
      position: absolute;
      top: 12%;
      left: 22%;
    }
    .likeit {
      color: rgb(255, 112, 112);
    }
    a {
      color: #222;
      i {
        font-size: 0.4rem;
        position: absolute;
        left: 57%;
        top: 19%;
      }
      .cartCount {
        text-align: center;
        width: 0.35rem;
        height: 0.35rem;
        line-height: 0.35rem;
        background-color: #ffd444;
        font-size: 0.2rem;
        color: #000;
        border-radius: 50%;
        position: absolute;
        top: 20%;
        left: 67%;
      }
    }
  }
  .bottomCenter {
    width: 33.33%;
    background-color: #f5f5f5;
    line-height: 0.88rem;
    text-align: center;
    a {
      color: #222;
      font-size: 0.3rem;
    }
  }
  .bottomRight {
    width: 50%;
    background-color: #ffd444;
    line-height: 0.88rem;
    text-align: center;
    a {
      color: #222;
      font-size: 0.3rem;
    }
  }
}
.hide {
  opacity: 0;
  z-index: -999;
}
</style>
<script>
import { aboutItem, itemDetail, like, itemImg, CartCount, cartCard, likeit } from '../api/index.js'
import BackTop from '../components/backTop';
import BuyNow from './buynow'
export default {
  data () {
    return {
      aboutItem: [],
      itemDetail: [],
      isLike: false,
      itemImg: [],
      CartCount: 0,
      myitem: [],
      flag1: true,
      flag2: false,
      flag: false,
      type: 0
    }
  },
  watch: {
    $route (to, from) {
      this.getData()
    }
  },
  created () {
    this.getData()
    //假装告诉浏览器我登录了
    document.cookie = "sessionToken=mbxdsqjfzk1d9rndc6p98nzrixvszma56rch";
    document.cookie = "channel=3";
    document.cookie = "CNZZDATA1261113455=1479395748-1573649620-https%253A%252F%252Fm.wowdsgn.com%252F%7C1573649620";
  },
  methods: {
    getData () {
      aboutItem(this.$route.params.id).then(res => {
        this.aboutItem = res.data
        console.log(this.aboutItem)
      })
      itemDetail(this.$route.params.id).then(res => {
        this.itemDetail = res.data.skuAttrPairs
        console.log(this.itemDetail)
      })
      like(this.$route.params.id).then(res => {
        this.isLike = res.data.isMyfavorite
        console.log(this.isLike)
      })
      itemImg(this.$route.params.pId).then(res => {
        this.itemImg = res.data
        console.log(this.itemImg)
      }),
        CartCount().then(res => {
          this.CartCount = res.data
          console.log(this.CartCount)
        })
      cartCard(this.$route.params.id).then(res => {
        this.myitem = res.data;
        console.log(this.myitem)
      })
    },
    likeit () {
      likeit(this.$route.params.id).then(res => {
        this.isLike = res.data.isMyfavorite
        console.log(this.isLike)
      })
    },
    inCart (val) {
      this.type = val;
      this.flag = true;
    }
  },
  components: {
    BackTop,
    BuyNow
  }
}
</script>