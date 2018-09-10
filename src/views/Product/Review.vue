<template>
  <div class="product-list">
    <h1>レビュー一覧</h1>
    <ul>
      <li v-for="{id,name} in list" :key="id">
        <router-link :to="`/product/${id}`">{{name}}</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  import reviews from '@/store/review.js'

  export default {
    name: "ProductList",
    computed: {
      list: () => reviews.fetch()
    }
  }
</script>

<style scoped>

</style>
