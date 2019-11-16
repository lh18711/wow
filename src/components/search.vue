<template>
  <div class="search">
    <router-link to="/search">
      <span class="iconfont">&#xe714;</span>
      <input type="text"
             placeholder="搜索我的尖叫好物"
             @keyup.enter="startSearch()"
             v-model="searchCon">
    </router-link>
  </div>
</template>
<style lang="scss">
.search {
  font-size: 13.3333px;
  width: 5.4rem;
  height: 0.56rem;
  line-height: 0.56rem;
  background-color: #f5f5f5;
  border-radius: 0.3rem;
  margin-left: 0.15rem;
  margin-bottom: 0.05rem;
  span {
    display: inline-block;
    vertical-align: top;
    &:first-child {
      margin: 0 0.1rem;
    }
  }
  input {
    vertical-align: top;
    background-color: #f5f5f5;
    display: inline-block;
    width: 80%;
    height: 0.54rem;
  }
}
</style>
<script>
export default {
  data () {
    return {
      searchCon: ''
    }
  },
  methods: {
    startSearch () {
      if (this.searchCon) {
        let a = encodeURI(this.searchCon)
        this.searchCon = ''
        this.$router.push({ name: 'searchResult', params: { keywords: a } })
      }
    }
  },
}
</script>