<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <ResourceInfo/>
      </v-flex>
      <v-flex xs6>
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


