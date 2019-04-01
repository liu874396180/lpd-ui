<!--test.vue-->
import { clearInterval } from 'timers';
<template>
  <div class="lpd-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
  name: 'LpdAddnum', // 这个名字很重要，它就是未来的标签名<lpd-test></lpd-test>，坑了我一下
  data () {
    return {
      num: 0,
      stop:false
    }
  },
  methods: {
    handleClick () {
        this.stop = !this.stop;
        if(this.stop){
            window.timeInter =  setInterval(()=>{
                this.num++
            },1000)
        }else{
            clearInterval(window.timeInter)
        }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.lpd-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>
