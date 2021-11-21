import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../css/common.css"
import echarts from './plugins/echarts';
// import '../node_modules/echarts/map/js/china.js' // 引入中国地图
import "./china"
import '../node_modules/echarts/map/js/world.js' // 引入世界地图
import tabs from "./components/tabs"

Vue.use(tabs)
Vue.config.productionTip = false

Vue.use(echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
