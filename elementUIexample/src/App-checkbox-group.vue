<template>
  <div id="app">
      <hm-checkbox v-model='active'>是否选中</hm-checkbox>
    <hm-checkbox-group v-model='hobby'>是否选中
      <hm-checkbox label="抽烟">抽烟</hm-checkbox>
      <hm-checkbox label="喝酒">喝酒</hm-checkbox>
      <hm-checkbox label="烫头">烫头</hm-checkbox>
    </hm-checkbox-group>

    <!-- <hm-checkbox v-model="hobby">是否选中</hm-checkbox>s -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: true,
      hobby: ['抽烟']
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
