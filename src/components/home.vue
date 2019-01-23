<template>
    <div class="nav">
        <ul class="tabs">
            <li v-for="(title,index) in tabTitle" @click="cur=index" :class="{active:cur==index}" :key="index">{{title}}</li>
        </ul>
        <recommend v-show="cur===0"></recommend>
        <suite v-show="cur===1"></suite>
        <house v-show="cur===2"></house>
        <activity v-show="cur===3"></activity>
    </div>
</template>
<script>
    import recommend from './recommend';
    import suite from './suite';
    import house from './house';
    import activity from './activity';
    export default {
        name: 'newCreate',
        components:{
            recommend,
            suite,
            house,
            activity
        },
        data(){
            return {
                tabTitle:['推荐','家具','家居','活动'],
                cur:0,
            }
        },
    } 
</script>

<style>
    @import "../assets/css/index.css";
</style>

