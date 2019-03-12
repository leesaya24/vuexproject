<template>
  <div>
    <h1> @/components/ResourceInfo.vue </h1>  
    <v-data-table
      :headers="headers"
      :items="allResource"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="select(props.index)">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.year }}</td>
          <td>{{ props.item.color }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      headers: [
          {text: `ID`,value: `id`},
          {text: `Name`,value: `name`},
          {text: `Year`,value: `year`},
          {text: `Color`,value: `color`},

        ]
    };
  },

  computed: {
    ...mapGetters('resourceInfo', ['allResource'])
  },

  methods: {
    ...mapActions('resourceInfo', ['getResourceInfos', 'selectResource']),

    select(index){
      this.selectResource(index)
    }
  },

  created() {
    //this.getResourceInfos()
  }
}
</script>