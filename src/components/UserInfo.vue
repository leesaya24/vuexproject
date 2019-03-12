<template>
<div>
  <h1> @/components/UserInfo.vue</h1>  
  <v-data-table
    :headers="headers"
    :items="allUserInfo"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <tr @click="select(props.index)">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.first_name }}</td>
        <td>{{ props.item.last_name }}</td>
        <td>{{ props.item.avatar }}</td>
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
          {text: `First Name`,value: `first_name`},
          {text: `Last Name`,value: `last_name`},
          {text: `Icon`,value: `avatar`}
        ]
    };
  },

  computed: {
    ...mapGetters('userInfo', ['allUserInfo'])
  },

  methods: {
    ...mapActions('userInfo', ['getUserInfos','selectUser']),

    select(index){
      this.selectUser(index)
    }
  },

  created() {
    //this.getUserInfos()
  }
}
</script>