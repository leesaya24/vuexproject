<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <UserInfo/>
      </v-flex>
      <v-flex xs6>
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


