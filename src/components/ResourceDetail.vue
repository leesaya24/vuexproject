<template>
  <v-layout>
    <v-flex xs12>
      <h1> 리소스 상세정보 </h1>
      
      <v-card>
         Name : {{selectedResource.name}}
         Year : {{selectedResource.year}}
         Color :{{selectedResource.color}}
        
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
    ...mapGetters('resourceInfo',['selectedResource'])
  },

  methods: {
  },

  created() {
  }
}
</script>
