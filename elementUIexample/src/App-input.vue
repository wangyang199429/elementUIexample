<template>
  <div id="app">
    <hm-input
      placeholder="输入用户名"
      v-model="username"
      :myvalue.sync="myvalue"
      clearable
    ></hm-input>
    <hm-input
      placeholder="请输入密码"
      v-model="password"
      :myvalue.sync="myvalue"
      showPassword
    ></hm-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: '',
      password: '',
      // 用sync测试双向绑定
      myvalue: '11'
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
