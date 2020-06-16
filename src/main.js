// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./vuex/store"
import '@/mock/mockDemo'
import axios from "axios"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// 全局mixin
Vue.mixin({
  data(){
    return{
      mixinAll:"全局mixin"
    }
  }
})
// 自定义选项合并策略
// Vue.config.optionMergeStrategies.data = function(a,b){
//   return b
// }
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
