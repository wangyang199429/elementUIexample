<template>
  <div id="app">
     <hm-switch placeholder="请输入用户名" :value='value'></hm-switch>
    <hm-form :model="model">
      <hm-form-item label="用户名">
        <hm-input
          placeholder="请输入用户名"
          v-model="model.username"
        ></hm-input>
      </hm-form-item>
    </hm-form>
    <hm-form :model="model.active">
      <hm-form-item label="选择">
        <hm-switch placeholder="请输入用户名"></hm-switch>
      </hm-form-item>
    </hm-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value: true,
      model: {
        username: '',
        active: true
      }
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
