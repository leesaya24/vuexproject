<template>
  <v-container grid-list-xl>
     <h1> @/views/Home.vue </h1>
    <v-layout row wrap>
      <v-flex xs12>
        <UserInfo/>
      </v-flex>
      <v-flex xs12>
        <UserDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import UserDetail from '@/components/UserDetail'

export default {
  components: {
    UserInfo,
    UserDetail
  }
}
</script>


