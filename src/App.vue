<template>
  <div id="app">
    <div class="bottom-tap">
      <ul class="clearfix">
        <li>
          <i></i>
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <i></i>
          <router-link to="/sort">分类</router-link>
        </li>
        <li>
          <i></i>
          <router-link to="/buycar">购物车</router-link>
        </li>
        <li>
          <i></i>
          <router-link to="/news">消息</router-link>
        </li>
        <li>
          <i></i>
          <router-link to="/user">我</router-link>
        </li>
    </ul>
    </div> 
    <loading v-show="Loading"></loading>
    <router-view></router-view>
  </div>
</template>
<script>
  import index from './components/index.vue';
  import { mapGetters } from 'vuex';
  export default {
    name:'app',
    components:{index},
    computed:mapGetters([
      'Loading'
    ]),
    // watch:{
    //   $router:{//路由监听
    //     handler:function(to){
    //       let path = to.path;
    //       if(){

    //       }
    //     },
    //     immediate:true
    //   }
    // }
  }

</script>
<style>
    @import './assets/css/public.css';
    @import './assets/css/app.css';
</style>
