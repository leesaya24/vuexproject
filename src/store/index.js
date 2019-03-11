import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import resourceInfo from './modules/resourceInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userInfo,
        resourceInfo
    }
  })




