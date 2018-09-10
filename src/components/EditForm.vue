<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate"/>

  </div>
</template>

<script>
  export default {
    name: "EditForm",
    computed: {
      message() {
        return this.$store.getters.message
      }
    },
    methods: {
      doUpdate(event) {
        this.$store.dispatch('doUpdate', event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>
