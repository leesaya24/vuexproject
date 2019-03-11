<template>
  <div>
    <h1>리소스 리스트</h1>
    <v-list>
      <v-list-tile
        v-for="(info, index) in allResource"
        :key="index"
        avatar
        @click="onListTileItemClick(index)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{info.name}}</v-list-tile-title>
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
    ...mapGetters('resourceInfo', ['allResource'])
  },

  methods: {
    ...mapActions('resourceInfo', ['getResourceInfos', 'selectResource']),

    onListTileItemClick(index){
      this.selectResource(index)
    }
  },

  created() {
    this.getResourceInfos()
  }
}
</script>

