import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import store from './vuex'
import axios from 'axios'


Vue.use(iview)

Vue.prototype.$axios=axios

Vue.prototype.bus=new Vue()


router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // ...
  if (to.path === '/mi'||to.path==='/sj') { // 如果是登录页面路径，就直接next()
      next()
    } else { // 其他页面路径
      let token=sessionStorage.getItem('name')
     if (token==null||token=="") { // 如果token不存在或者为空
      next({ path: '/mi' }) // 则跳转到登录页
     
     }else{
    next()
    }
    }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  iview,
  
  render: h => h(App),
}).$mount('#app')
