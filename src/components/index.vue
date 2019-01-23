<template>
    <div>
        <serch></serch>
        <home></home> 
    </div>
    
</template>
<script>
    import serch from './serch.vue';
    import home from './home.vue';
    export default {
        components:{
            serch,
            home,
            }
    }
</script>
<style>
    @import "../assets/css/index.css";
</style>
