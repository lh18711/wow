<template>
  <div>
    <header>
      <search></search>
    </header>
    <div class="content">
      <div class="tab1"
           v-for="(item, index) in list"
           :key="index">
        <img :src="item.img"
             alt="">
        <ul>
          <li v-for="(v, i) in item.list"
              :key="i">
            <router-link :to="{name:'categoryDetail',params: {id: v.id,name:v.name,type:item.type}}">
              <span>{{v.name}}</span>
              <i class="iconfont">&#xe6d7;</i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import search from '../../components/search'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    search
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios({
        method: 'get',
        url: '/static/category.json', //引入静态json
      }).then(res => {
        this.list = res.data;
        console.log(this.list)
      })
    }
  },
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  box-sizing: border-box;
  padding: 0rem 0.2rem 0rem 0.2rem;
}
.content {
  margin: 0rem auto 0;
  background: #fff;
  padding: 0rem 0.3rem 1rem;
  .tab1 {
    margin: 0.2rem 0rem 0rem;
    img {
      width: 100%;
      display: block;
    }
    ul {
      overflow: hidden;
      li {
        overflow: hidden;
        line-height: 0.98rem;
        font-size: 0.3rem;
        color: #000;
        border-bottom: 1px solid #eaeaea;
        text-indent: 0.3rem;
        span {
          float: left;
          color: #202020;
          overflow: hidden;
          width: 80%;
        }
        i {
          float: right;
          color: #ccc;
        }
      }
    }
  }
}
</style>