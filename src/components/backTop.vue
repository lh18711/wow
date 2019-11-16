<template>
  <div class="backTop"
       v-show="goTop"
       @click="gobackTop">
    <img src="../assets/img/backTop.png"
         alt="">
  </div>
</template>
<style lang="scss" scoped>
.backTop {
  position: fixed;
  right: 0.5rem;
  bottom: 1.5rem;
  // display: none;
  z-index: 998;
  width: 0.7rem;
  height: 0.7rem;
  img {
    width: 100%;
  }
}
</style>
<script>
export default {
  data () {
    return {
      goTop: false
    }
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll (e) {
      let scrolltop = e.target.documentElement.scrollTop;
      scrolltop > 900 ? (this.goTop = true) : (this.goTop = false);
    },
    gobackTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      let timer = setInterval(() => {
        document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timer);
        }
      }, 5);
    }
  },
}
</script>