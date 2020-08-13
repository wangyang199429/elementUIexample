<template>
  <div id="app">
    <!-- <hm-input
      placeholder="请输入用户名"
      type="username"
      name="username"
      v-model="username"
      :value="username"
      clearable
    ></hm-input>
    <hm-input
      placeholder="请输入用户名"
      type="password"
      name="password"
      v-model="password"
      showPassword
    ></hm-input> -->

    <!-- switch -->

    <!-- <hm-switch
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name="username1"
    ></hm-switch>
    <hm-switch
      v-model="active"
      active-color="#13ce66"
      inactive-color="#ff4949"
      name="username2"
    ></hm-switch> -->

    <!-- radio -->
    <!-- <hm-radio
      label="1"
      v-model="gender"
    >男</hm-radio>
    <hm-radio
      label="0"
      v-model="gender"
    >女</hm-radio> -->

    <!-- radio-group -->
    <!-- <hm-radio-group v-model="gender">
      <hm-radio label="1">男</hm-radio>
      <hm-radio label="0">女</hm-radio>
    </hm-radio-group> -->

    <!-- chekbox -->
    <hm-checkbox v-model="active">是否选中</hm-checkbox>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: 'sd',
      password: '',
      active: true,
      gender: '1'
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
.hm-input {
  width: 180px;
}
</style>
