<template>
  <v-container grid-list-xl>
   <h1> @/views/Home.vue </h1><br><br>
   
    <h2> 개발환경 </h2><br>
    <p>프로젝트 생성 : VeuCLI 3.5.0</p>
    <p>사용모듈 : vue, vue-router, vuex, vuetify, axios</p>
    <p>OS: windows</p>
    <p>테스트 서버: <a href="https://reqres.in" target="_blank">https://reqres.in</a></p><br>


    <h2> src 폴더 구조</h2><br>
    <p>api : 서버API 호출</p>
    <p>components :  store를 사용하는 컴포넌트 구현</p>
    <p>routes : 라우팅</p>
    <p>plugins :  vuetify 설치폴더</p>
    <p>store : redux패턴 구현 ( state, getter, action, mutation)</p>
    <p>views : 라우팅 뷰</p>

  </v-container>
</template>


<script>
import { mapActions} from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
  },

  methods: {
    ...mapActions('userInfo',['getUserInfos']),
    ...mapActions('resourceInfo',['getResourceInfos'])
  },

  created() {
    this.getUserInfos()
    this.getResourceInfos()
  }
}
</script>
