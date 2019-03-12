<template>
  <v-container grid-list-xl>
   <h1> @/views/Home.vue </h1>
   
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
