<template>
    <div class="slider">
        <div class="img">
            <ul class="imgList">
                <li>
                    <img src="/images/01.jpg" />
                </li>
                <li>
                    <img src="/images/02.jpg" />
                </li>
                <li>
                    <img src="/images/03.jpg" />
                </li>
                <li>
                    <img src="/images/04.jpg" />
                </li>
                <li>
                    <img src="/images/05.jpg" />
                </li>
                <li>
                    <img src="/images/01.jpg" />
                </li>
            </ul>
        </div> 
        <div class="tabList">
            <ul class="Nav">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>    
        </div>   
    </div>
</template>
<script>
    (function(){
        var oimg = document.querySelector('.imgList');
        var aimgLi = documebt.querySelectorAll('.imgList li');
        var atab = document.querySelectorAll('.Nav li');
        var len =  aimgLi.length;
        index = 0;
        index_ = 0;
        count = 0;
        function throttle(fn,time){
            var startTime = new Date();
            return  function(){
                var time_ = (((new Date() - startTime) >= time) && (count === index));
                if(time_){
                    fn.apply(this);
                    startTime = new Date();
                    setTimeout(function(){
                        count = index;
                    },1000);   
                }
            }
        }
        function btnTab(){
            var t = new Date();
                direction;
            for(var i=0,tabLen = atab.length;i<tabLen;i++){
                (function(i){
                    atab[i].onclick = function(){
                        if((new Date() - t >= 1000) && (count === index)){
                            index_ = index;
                            i - index > 0 ? direction = true : direction = false;
                        }
                    }
                })
            }
        } 
    })();
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    .img{
        width:8.28rem;
        height:5.52rem;
        position:relative;
        overflow:hidden;
    }
    .img ul{
        height:100%;
        position:relative;
    }
    .img li{
        float:left;
        position:absolute;
        left:0;
    }
    .img li img{
        width:7.50rem;
        height:5rem;
        border:0;
        display:block;
    }
</style>
