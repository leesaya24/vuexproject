<template>
  <v-layout>
    <v-flex xs12>
      <h1> 유저상세 정보 </h1>
      
      <v-card>
         <img :src="selectedUser.avatar">  
         First Name : {{selectedUser.first_name}}
         Last Name : {{selectedUser.last_name}}
        
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapGetters} from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters('userInfo',['selectedUser'])
  },

  methods: {
  },

  created() {
  }
}
</script>
