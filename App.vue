<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data(){
    return {
      msg: 'hello ,gaoxuerong'
    }
  }
})
</script>
<style scoped>
  h1 {
    color: red;
  }
</style>
