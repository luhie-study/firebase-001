<template>
  <div class="container">
    <div class="card">
      <div class="card-hearder">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="newItem.name" />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="newItem.price" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item" />
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
    name: 'EditItem'
  },
  data() {
    return {
      items: [],
      newItem: {}
    }
  },
  created() {
    console.log(this.$route.params.id)
    db.ref('items/'+this.$route.params.id).once('value')
    .then(snapshot => {
      this.newItem = snapshot.val()
    })
  },
  methods: {
    updateItem() {
      db.ref('items')
        .child(this.$route.params.id)
        .set(this.newItem)
        .then(this.$router.push('/index'))
        .catch(err => alert(err))
    }
  }
}
</script>