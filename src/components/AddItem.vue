<template>
  <h1>Add item</h1>
</template>

<script>
import create from '@/lib/api/crypto'
export default {
  components: {
    name: 'AddItem'
  },
  data() {
    return {
      secret: 'This is secret key',
      _id: 'my name is By'
    }
  },
  methods: {
    encryption() {
      const secret = 'This is secret key asdfasdfasdfasdfasdfasdf';
      const _id = 'my name is By';
      create(secret, _id)
    }
  },
  created() {
    this.encryption()

  }

}
</script>