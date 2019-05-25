<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="writeUserData">
          <div class="forem-group">
            <label>Item Name:</label>
            <input tpye="text" class="form-control" v-model="newItem.name" />
          </div>
          <div class="forem-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="newItem.price" />
          </div>
          <div class="forem-group">
            <input type="submit" class="btn btn-primary" value="Add Item" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/config/db'

export default {
  components: {
    name: 'AddItem'
  },
  // firebase: {
  //   items: db.ref('items')
  // },
  data() {
    return {
      newItem: {
        name: '',
        price: ''
      }
    }
  },
  methods: {
    writeUserData() {
      const newPostKey = db.ref().child('items').push().key;
      db.ref('items').push({
        name: this.newItem.name,
        price: this.newItem.price
      }).key
      this.newItem.name = ''
      this.newItem.price = ''
      this.$router.push('/index')
    },
    addItem() {
      // this.$firebaseRefs.items.push({
      //   name: this.newItem.name,
      //   price: this.newItem.price
      // })
      this.newItem.name = ''
      this.newItem.price = ''
      this.$router.push('/index')
    }
  }
}
</script>