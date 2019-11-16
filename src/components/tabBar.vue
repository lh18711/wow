<template>
  <div class="tabBar">
    <div class="tabBarCon"
         @click="checkLight(1);changeTab('onShelfTime','desc')"
         :class="{on:tabIndex==1}">上新</div>
    <div class="tabBarCon"
         @click="checkLight(2);changeTab('sales','desc')"
         :class="{on:tabIndex==2}">销量</div>
    <div class="tabBarCon"
         @click="checkLight(3);price()"
         :class="{on:tabIndex==3}">价格<span><img src="../assets/img/top.png"
             alt=""><img src="../assets/img/bottom.png"
             alt=""></span></div>
  </div>
</template>
<style lang="scss" scoped>
.tabBar {
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  .tabBarCon {
    color: #808080;
    margin: 0rem 0.75rem;
    position: relative;
    font-size: 0.26rem;
    width: 1rem;
    text-align: center;
    span {
      font-size: 0;
      text-align: center;
      width: 0.16rem;
      height: 0.4rem;
      right: -0.26rem;
      position: absolute;
      top: 37%;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .on {
    border-bottom: 0.06rem solid #202020;
    height: 0.8rem;
    box-sizing: border-box;
    color: #000;
  }
}
</style>
<script>
export default {
  data () {
    return {
      tabIndex: 1,
      priceFlag: 1
    }
  },
  methods: {
    checkLight (val) {
      this.tabIndex = val
    },
    changeTab (val, val1) {
      this.$emit('changeTab', { sort: val, order: val1 })
    },
    price () {
      if (this.priceFlag) {
        this.$emit('changeTab', { sort: 'price', order: 'asc' })
        this.priceFlag = 0;
      } else {
        this.$emit('changeTab', { sort: 'price', order: 'desc' })
        this.priceFlag = 1;
      }
    }
  },
}
</script>