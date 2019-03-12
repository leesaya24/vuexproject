<template>
  <v-layout>
    <v-flex xs12>
      <h1> ResourceDetailInfo Component </h1>
      
      <v-card
      :color="selectedResource.color"
      >
         <v-card-title>
            <h2> {{selectedResource.name}}</h2>
          </v-card-title>
          <v-card-text>
            <h3> {{selectedResource.color}} </h3>
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
    ...mapGetters('resourceInfo',['selectedResource'])
  },

  methods: {
  },

  created() {
  }
}
</script>
