import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../css/common.css"
import echarts from './plugins/echarts';
import "./china"
import tabs from "./components/tabs"

Vue.use(tabs)
Vue.config.productionTip = false

Vue.use(echarts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
