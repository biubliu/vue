//loading主入口

import loading from './components/loading.vue';
export default {
   install:function(Vue){
       console.log('install123',Vue);
       Vue.component('loading',loading);//注册到全局 
   } 
}