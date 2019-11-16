<template>
  <div id="app"
       v-cloak>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("~@/assets/css/reset.css");
@import url("./assets/font/iconfont.css");
@import url("~@/assets/css/swiper.min.css");
@import url("~@/assets/css/vant.css");
html {
  font-size: 13.33333333vw;
}
[v-cloak] {
  display: none !important;
}
body,
html {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
