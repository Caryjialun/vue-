// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import '@/assets/theme-default/index.css'
import antd from 'ant-design-vue'
import './assets/icon/iconfont.css'
// import './http/http';
import './directives/clickOutside.js'
import 'ant-design-vue/dist/antd.css'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// Vue.protype.$http = http;
Vue.config.productionTip = false
Vue.use(ViewUI).use(antd)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
