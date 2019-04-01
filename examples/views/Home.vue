<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <p>fsdsd</p>
    <!-- <p>{{msg | formatBank}}</p>

    <p v-swipeleft='swipeleft'>我调用的是左滑动指令</p>
    <p v-swiper='swiper'>我调用的是滑动指令</p> -->
    <div >
      <!-- <img src="../assets/比财@2x.png" v-imgload alt="">
      <img src="../assets/比财@2x.png" v-imgload alt="">
      <img src="../assets/比财@2x.png" v-imgload alt="">
      <img src="../assets/比财@2x.png" v-imgload alt=""> -->
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
// import { timeFormate, getWeek ,formatBank} from 'hjm-vue-filters'
// Vue.filter('timeFormate', timeFormate)
// Vue.filter('getWeek', getWeek)
// Vue.filter('formatBank', formatBank)
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:"312312314143141413213"
    }
  },
  methods: {
    swipeleft() {
        console.log('左滑动')
    },
    swiper() {
        // 通过event拿到坐标初始量和移动量
        console.log(event.starDis)
        console.log(event.moveDis)
        console.log('我是移动事件')
    }
}
}
</script>
