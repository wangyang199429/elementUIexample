<template>
  <div id="app">
    <hm-button @click="visible=true">dialog</hm-button>
    <!-- sync修饰符是一个语法糖 -->
    <hm-dialog
      width='60%'
      :visible.sync="visible"
    >
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <hm-button type="primary">取消</hm-button>
        <hm-button>确定</hm-button>
      </template>
    </hm-dialog>
    <hm-button @click="anim=!anim">动画</hm-button>
    <transition name="ani-fade">
      <div v-if="anim">
        <h1>动画</h1>
        <h1>动画</h1>
        <h1>动画</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      anim: false,
      visible: false,
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
.hm-button {
  margin: 10px;
}
.ani-fade-enter-active {
  animation: ani-fade-in 1.5s;
}
.ani-fade-leave-active {
  animation: ani-fade-out 1.5s;
}
@keyframes ani-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes ani-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
