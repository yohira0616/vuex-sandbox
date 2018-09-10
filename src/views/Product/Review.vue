<template>
  <div class="product-list">
    <h1>レビュー一覧</h1>
    <ul>
      <li v-for="review in list" :key="review.id">
        <router-link :to="`/product/${review.pruductId}/review/${review.id}`">{{review.name}}さんのレビュー</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import reviews from '@/api/reviews.js'

  export default {
    computed: {
      list: () => reviews.fetch()
    }
  }
</script>

<style scoped>

</style>
