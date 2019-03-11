<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <UserInfo/>
        <UserDetail/>
      </v-flex>
      <v-flex xs6>
        <ResourceInfo/>
        <ResourceDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import UserDetail from '@/components/UserDetail'
import ResourceInfo from '@/components/ResourceInfo'
import ResourceDetail from '@/components/ResourceDetail'

export default {
  components: {
    UserInfo,
    UserDetail,
    ResourceInfo,
    ResourceDetail
  }
}
</script>


