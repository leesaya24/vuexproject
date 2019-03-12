<template>
  <v-layout>
    <v-flex xs12>
      <h1> @/components/UserDetail.vue</h1>
      
      <v-card>
         <img :src="selectedUser.avatar">  
          <v-card-title>
            <h2>{{selectedUser.first_name}} {{selectedUser.last_name}} </h2>
          </v-card-title>
          <v-card-text>
            <h5> ImageURL : {{selectedUser.avatar}} </h5>
          </v-card-text>
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
