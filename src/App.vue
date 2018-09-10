<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>

    </nav>
    <router-view />
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
</style>
