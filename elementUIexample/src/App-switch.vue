<template>
  <div id="app">
    <hm-switch v-model="active"></hm-switch>
    <hm-switch
      v-model="active1"
      active-color='red'
      inactive-color="green"
    ></hm-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: false,
      active1: false
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  .hm-input {
    width: 230px;
  }
}
</style>
