<template>
  <div id="app">
    <div class="row">
    <hm-button plain rouond type="success" @click="fn">按钮</hm-button>
    <hm-button plain rouond type="primary">按钮</hm-button>
    <hm-button plain rouond type="info">按钮</hm-button>
    <hm-button plain rouond type="danger">按钮</hm-button>
    <hm-button plain rouond type="warning">按钮</hm-button>
    </div>
    <div class="row">
    <hm-button plain icon="hm-icon-check" rouond type="success">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond type="primary">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond type="info">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond type="danger">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond type="warning">按钮</hm-button>
    </div>
    <div class="row">
    <hm-button plain icon="hm-icon-check" rouond disabled type="success">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond disabled type="primary">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond disabled type="info">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond disabled type="danger">按钮</hm-button>
    <hm-button plain icon="hm-icon-check" rouond disabled type="warning">按钮</hm-button>
    </div>
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
  methods: {
    fn (e) {
      console.log(e)
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
.hm-button{
  margin:10px;
}
</style>
