// 为组件提供 install 方法，供组件对外按需引入
import LpdAddnum from './src/addNum'
LpdAddnum.install = Vue => {
  Vue.component(LpdAddnum.name, LpdAddnum)
}
export default LpdAddnum
