<template>
  <div id="app">
    <!-- <hm-radio
      label="1"
      v-model="gender"
    > 男</hm-radio>
    <hm-radio
      label="0"
      v-model="gender"
    > 女</hm-radio> -->
     <hm-radio
        label="1"
        v-model="gender"
      > 男</hm-radio>
      <hm-radio
        label="0"
        v-model="gender"
      > 女</hm-radio>
    <hm-radio-group  v-model="gender">
      <hm-radio
        label="1"
      > 男</hm-radio>
      <hm-radio
        label="0"
      > 女</hm-radio>
    </hm-radio-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      gender: '1'
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
