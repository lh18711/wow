<template>
  <div class="mask">
    <div class="content"
         :class="{hide:!show}">
      <div class="buyTitle"
           v-if="detail">
        <img :src="detail&&detail.productImage"
             alt="">
        <div class="productInfo">
          <p class="productTitle">{{detail.productTitle}}</p>
          <b>￥{{detail.sellPrice}}</b>
          <p class="size">尺寸:{{detail.sizeText}}重量:{{detail.netWeightText}}</p>
          <p class="size">{{detail.supplyInfo}}</p>
        </div>
      </div>
      <div class="category">
        <span>规格</span>
        <div class="selectColor">
          <div class="color"
               v-for="(item, index) in category"
               :key="index"
               :class="{selected:$route.params.id == cateId[index].productItemId}"
               @click="selectColor(cateId[index].productItemId)">{{item.attributeValueText}}</div>
        </div>
        <span>数量</span>
        <div class="count">
          <div class="sub"
               @click="com(0)">-</div>
          <div class="qty">{{qty}}</div>
          <div class="add"
               @click="com(1)">+</div>
        </div>
      </div>
      <div class="submit"
           @click="submit()">确定</div>
      <div class="close"
           @click="close()">X</div>
    </div>
    <div class="alert"
         :class="{alerton:alertFlag}">
      库存不足
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .content {
    height: 12.34rem;
    background-color: #fff;
    margin-top: 2rem;
    transition: 0.5s;
    .buyTitle {
      display: flex;
      padding: 0.3rem;
      justify-content: flex-start;
      img {
        width: 1.8rem;
        height: 1.8rem;
        border: 1px solid #f2f2f2;
      }
      .productInfo {
        margin-left: 0.5rem;
        flex: 1;
        b {
          font-weight: 700;
        }
        .productTitle {
          font-size: 0.36rem;
          color: #000000;
          line-height: 0.44rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          margin-bottom: 0.25rem;
        }
        .size {
          font-size: 0.22rem;
          color: #808080;
          letter-spacing: 0;
        }
      }
    }
    .category {
      padding: 0.427rem 0.4rem;
      background: #fff;
      span {
        color: #707070;
        font-size: 0.26rem;
      }
      .selectColor {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .color {
          padding: 0.15rem 0.22rem;
          background-color: #f5f5f5;
          margin-bottom: 0.2rem;
          margin-right: 0.2rem;
          white-space: nowrap;
        }
        .selected {
          background-color: #ffd444;
        }
      }
      .count {
        @extend .selectColor;
        .sub,
        .add {
          padding: 0.15rem 0.22rem;
          background-color: #f5f5f5;
          margin-bottom: 0.2rem;
          margin-right: 0.2rem;
          color: #888;
          text-align: center;
          font-size: 0.28rem;
        }
        .qty {
          color: #222;
          @extend .add;
          width: 1.28rem;
          background-color: #fff;
        }
      }
    }
    .submit {
      text-align: center;
      height: 1rem;
      line-height: 1rem;
      position: absolute;
      bottom: 2rem;
      width: 7.5rem;
      background-color: rgb(255, 212, 68);
      bottom: 0;
    }
    .close {
      font-size: 0.4rem;
      position: absolute;
      top: 2.1rem;
      right: 0;
      width: 0.6rem;
      z-index: 199999999;
    }
  }
  .hide {
    margin-top: 13rem;
  }
  .alert {
    width: 2rem;
    height: 0.8rem;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0.1rem;
    position: fixed;
    bottom: -0.8rem;
    left: 50%;
    margin-left: -1rem;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
    transition: bottom 0.3s;
    opacity: 0;
  }
  .alerton {
    bottom: 4rem;
    opacity: 1;
  }
}
</style>
<script>
import axios from 'axios'
import Qs from 'qs'
import { cartCard, buyNow } from '../api/index.js'
export default {
  props: ['show', 'type'],
  data () {
    return {
      detail: null,
      category: [],
      cateId: [],
      qty: 1,
      alertFlag: false
    }
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      cartCard(this.$route.params.id).then(res => {
        this.detail = res.data;
        console.log(this.detail);
      })
      buyNow(this.$route.params.id).then(res => {
        this.category = res.data.itemAttrVoList[0].itemAttrValueVoList
        this.cateId = res.data.itemSerialAttributeVoList
        console.log(this.category)
        console.log(this.cateId)
      })
    },
    selectColor (val) {
      this.$router.push('/item/' + val + '/' + this.$route.params.pId)
      this.getData();
    },
    com (val) {
      if (val) {
        this.qty++;
        if (this.qty > this.detail.stockQty) {
          this.alertFlag = true;
          this.qty = this.detail.stockQty
          setTimeout(() => {
            this.alertFlag = false
          }, 2000);
        }
      } else {
        this.qty--;
        if (this.qty < 1) {
          this.qty = 1;
        }
      }
    },
    close () {
      this.$emit('close')
    },
    submit () {
      if (this.type) {
        alert('购物车接口无法使用')
      } else {
        console.log(123);
        this.$router.push({ name: 'order', params: { id: this.$route.params.id, qty: this.qty } })
      }
    }
  },
}
</script>