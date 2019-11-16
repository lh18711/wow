<template>
  <div style="background:#f1f1f1;height:100%">
    <header>
      <i class="iconfont"
         @click="goback()">&#xe6d7;</i>
      <h3>确认订单</h3>
      <router-link to="/my">
        <img src="../assets/img/me.png"
             alt=""
             style="display:none">
      </router-link>
    </header>
    <div class="content">
      <div class="product">
        <img :src="list.orderSettles&&list.orderSettles[0].productImg"
             alt="">
        <div class="productInfo">
          <li>{{list.orderSettles&&list.orderSettles[0].productTitle}}</li>
          <li>
            <span v-for="(item, index) in list.orderSettles&&list.orderSettles[0].attributes"
                  :key="index">{{item}}</span>
          </li>
          <li></li>
          <li>
            <p>￥{{list.orderSettles&&list.orderSettles[0].sellPrice}}</p>
            <span>x{{list.orderSettles&&list.orderSettles[0].productQty}}</span>
          </li>
        </div>
      </div>
      <div class="model">
        <span>优惠券</span>
        <div class="right">
          <span>你有0张优惠券可用</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="model"
           v-if="list.promotionProductInfoVos&&list.promotionProductInfoVos.length">
        <span>促销</span>
        <div class="right">
          <span>{{list.promotionProductInfoVos[0]&&list.promotionProductInfoVos[0].promotionName}}</span>
          <i class="iconfont">&#xe6d7;</i>
        </div>
      </div>
      <div class="model">
        <span>运费</span>
        <div class="right">
          <span style="color:#222">￥{{list.deliveryFee}}</span>
        </div>
      </div>
      <div class="model">
        <span>买家留言</span>
        <div class="right">
          <input type="text">
        </div>
      </div>
      <div class="model">
        <span>共{{list.orderSettles&&list.orderSettles[0].productQty}}件</span>
        <div class="right">
          <span style="color:#888">小计</span>
          <span style="color:#222;font-size:0.3rem">￥{{total}}</span>
        </div>
      </div>
    </div>
    <div class="pay">
      <img src="https://m.wowdsgn.com/static/img/zhifubao.png"
           alt="">
      <span>
        支付宝
      </span>
    </div>
    <div class="bottom">
      <div class="bLeft">
        合计：￥{{total}}
      </div>
      <div class="submit">
        确认
      </div>
    </div>
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
  i {
    font-size: 0.4rem;
    display: block;
    transform: rotate(180deg);
  }
}
.content {
  margin-top: 0.2rem;
  padding-top: 0rem;
  padding-right: 0rem;
  margin-bottom: 0.2rem;
  padding: 0.3rem;
  padding-bottom: 0;
  background-color: #fff;
  .product {
    padding-top: 0.25rem;
    padding-bottom: 0.32rem;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    img {
      width: 1.6rem;
    }
    .productInfo {
      width: 4.9rem;
      li {
        list-style: none;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.28rem;
        margin-bottom: 0.04rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:nth-child(2) span {
          background-color: #f1f1f1;
        }
        span {
          font-size: 0.2rem;
          color: #808080;
          padding: 0.04rem 0.1rem;
          margin-right: 0.1rem;
        }
        &:nth-child(4) {
          display: flex;
          justify-content: space-between;
          span {
            margin-right: 0.3rem;
          }
        }
      }
    }
  }
  .model {
    margin-top: 0rem;
    border-bottom: 1px solid #eaeaea;
    background-color: #fff;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    & > span {
      font-size: 0.28rem;
      color: #000;
      display: block;
    }
    .right {
      font-size: 0;
      margin-right: 0.24rem;
      height: 1rem;
      span {
        vertical-align: middle;
        font-size: 0.24rem;
        color: #ff7070;
      }
      i {
        vertical-align: middle;
      }
      input {
        height: 1rem;
        outline: none;
        border: 0;
        font-size: 0.28rem;
        display: block;
        line-height: 1rem;
        width: 5.3rem;
        outline: none;
      }
    }
  }
}
.pay {
  background-color: #fff;
  margin-top: 0rem;
  border-bottom: 1px solid #eaeaea;
  img {
    width: 0.6rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2rem;
    margin-left: 0.3rem;
  }
  span {
    vertical-align: middle;
    font-size: 0.28rem;
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 7.5rem;
  height: 1.04rem;
  background: #fff;
  color: #000;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  .bLeft {
    padding-right: 0.32rem;
    text-align: right;
    font-size: 0.28rem;
    width: 75%;
    line-height: 1.04rem;
  }
  .submit {
    font-size: 0.32rem;
    width: 25%;
    background-color: #ffd444;
    text-align: center;
    line-height: 1.04rem;
  }
}
</style>
<script>
import { order } from '../api/index.js'
export default {
  data () {
    return {
      list: [],
      total: 0
    }
  },
  created () {
    this.getData()
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    getData () {
      order(this.$route.params.id, this.$route.params.qty).then(res => {
        this.list = res.data.orderSettleResponseVos[0]
        this.total = res.data.totalPaidAmount;
        console.log(this.list);
        console.log(this.total);
      })
    }
  },
}
</script>