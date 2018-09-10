<template>
  <div class="edit-form">
    <input type="text" v-model="message" />

  </div>
</template>

<script>
  export default {
    name: "EditForm",
    computed: {
      message: {
        get() {
          return this.$store.getters.message
        },
        set(value) {
          this.$store.dispatch('doUpdate', value)
        }
      }
    }
  }
</script>

<style scoped>

</style>
