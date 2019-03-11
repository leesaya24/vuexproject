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




  // 모듈 구조설계할때 참고할수있는 소스다. 
  // https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart
  // rootstate 라는 놈은 일종의 다른 store를 접근하기 위한 컨셉이구나.

  // 테이블 뷰
  //https://appdividend.com/2018/05/08/vuex-axios-get-request-tutorial-with-example/