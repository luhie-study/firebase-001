<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">add</router-link> |
      <router-link to="/edit">edit</router-link> |
      <router-link to="/index">list</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

