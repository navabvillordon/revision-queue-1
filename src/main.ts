import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false



router.beforeEach(async (to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAdminAuth)){
      await store.dispatch('validateToken');
      if(!store.getters.getTokenStatus){
       next({
        path: '/login',
        query: {redirect: to.fullPath}
       })
      }else{
        next();
      next()
      }
  }else if(to.matched.some(record => record.meta.isGuest)){
    await store.dispatch('validateToken');
    
    if(store.getters.getTokenStatus){
      next({
        path: '/dashboard',
       })
    }else{
      next();
    }
    next();
  }else{
    next();
  }
})



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
