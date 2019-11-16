import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: []
  },
  mutations: {
    getCategory(state, data) {
      state.category = data;
    }
  },
  actions: {
    getData(store) {
      axios({
        method: 'get',
        url: '/static/category.json', //引入静态json
      }).then(res => {
        store.commit('getCategory', res.data)
      })
    }
  },
  modules: {}
})
