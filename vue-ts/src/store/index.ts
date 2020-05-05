import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from './ActionHelper'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    title: 'this is store title',
    aHelper: new ActionHelper()
  },
  mutations: {
    
  }
})

export default store