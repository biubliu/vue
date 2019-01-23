<template>
    <div>
        消息
    </div>
</template>
<script>
    import store from '../store';
    export default {
        beforeRouteEnter(to,from,next){
            if(store.state.user.auth){
                next();
            }else{
                next('/login');
            }
        }
    }
</script>
    