<template>
  <div class="review-detail">
    <h1>{{id}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {id: Number},
    computed: mapGetters('review', ['detail']),
    watch: {
      id: {
        handler() {
          this.$store.dispatch('review/load', this.id)
        }, immediate: true
      }
    },
    beforeDestroy() {
      this.$store.dispatch('review/destroy')
    }
  }
</script>

<style scoped>

</style>
