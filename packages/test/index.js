// 为组件提供 install 方法，供组件对外按需引入
import LpdTest from './src/test'
LpdTest.install = Vue => {
  Vue.component(LpdTest.name, LpdTest)
}
export default LpdTest
