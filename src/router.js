import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

import index from './components/index';
import sort from './components/sort';
import buycar from './components/buycar';
import news from './components/news';
import user from './components/user';
import login from './components/login';
import res from './components/res';
export default new Router({
  routes: [
    {
      path: '/index', 
      component:index
    },
    {
      path:'/',
      redirect:'/index'//配置型跳转
    },
    {
      path:'/sort',
      name:sort,
      component:sort
    },
    {
      path:'/buycar',
      name:buycar,
      component:buycar
    },
    {
      path:'/news',
      name:news,
      component:news
    },
    {
      path:'/user',
      name:user,
      component:user
    },
    {
      path:'/login',
      name:login,
      component:login
    },
    {
      path:'/res',
      name:res,
      component:res
    }
  ]
})
