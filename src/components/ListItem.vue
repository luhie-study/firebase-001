<template>
  <div>
    <h1>List Item</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th collspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item['.key']">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="{ name: 'Edit', params: { id: item['.key'] } }" class="btn btn-warning">
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '@/config/db'

export default {
  components: {
    name: 'ListItem'
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    getItemFromDB() {
      db.ref('items').on('value', snapshot => this.items = snapshot.val())
    }
  },
  created() {
    this.getItemFromDB()
  }
}
</script>