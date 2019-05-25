<template>
  <div>
    <h1>List Item</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Action</th>
          <th>ect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" :key="item.key">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <router-link :to="{ name: 'Edit', params: { id: item.key } }" class="btn btn-warning">
              Edit
            </router-link>
          </td>
          <td>
            <button @click="deleteItem(item.key)" class="btn btn-danger"> Delete</button>
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
      console.log('start get item')
      db.ref('items').on('value', snapshot => {
        if(this.items != null) this.items = []
        snapshot.forEach(childSnapshot => {
          const childData = childSnapshot.val()
          childData['key'] = childSnapshot.key
          this.items.push(childData)
        })
      })
    },
    deleteItem(key) {
      db.ref('items').child(key).remove()
    }
  },
  created() {
    this.getItemFromDB()
  }
}
</script>