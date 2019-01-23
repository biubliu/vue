import axios from 'axios';
import store from '../store';
import * as types from '../store/types';

axios.interceptors.request.use(function(config){
    store.dispatch(types.VIEW_LOADING,true)
    return config;
},function(error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    store.dispatch(types.VIEW_LOADING,false)
    return response;
},function(error){
    return Promise.reject(error);
});


export default {
    install:function(Vue){
        Vue.prototype.$http = axios;
        window.axios = axios;//全局暴露
    }
}