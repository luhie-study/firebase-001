<template>
  <div class="container" id="app">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Add' }">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'List' }">All Item</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
  
}
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
<style lang="scss">
  .gap {
    margin-top: 50px;
  }
</style>

