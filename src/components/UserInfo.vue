<template>
  <div>
    <h1>유저리스트</h1>
    <v-list>
      <v-list-tile
        v-for="(info, index) in allUserInfo"
        :key="index"
        avatar
        @click="onListTileItemClick(index)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ info.id }} : {{info.first_name}}</v-list-tile-title>
          <!-- <v-list-tile-sub-title>{{ info.last_name }}</v-list-tile-sub-title> -->
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters('userInfo', ['allUserInfo','firstUserID'])
  },

  methods: {
    ...mapActions('userInfo', ['getUserInfos','selectUser']),

    onListTileItemClick(index){
      this.selectUser(index)
    }
  },

  created() {
    this.getUserInfos()
  }
}
</script>

