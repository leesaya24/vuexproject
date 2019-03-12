<template>
  <v-container grid-list-xl>
     <h1> @/views/Resource.vue </h1>
    <v-layout row wrap>
      <v-flex xs12>
        <ResourceInfo/>
      </v-flex>
      <v-flex xs12>
        <ResourceDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResourceInfo from '@/components/ResourceInfo'
import ResourceDetail from '@/components/ResourceDetail'

export default {
  components: {
    ResourceInfo,
    ResourceDetail
  }
}
</script>


