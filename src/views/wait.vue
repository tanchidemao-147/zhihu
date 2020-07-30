<template>
    <div class="logo">
        <div class="content">
            <right></right>
    </div>
    <div class="left">
    <router-view></router-view>
    </div>
    </div>
</template>
<script>
import right from "../components/right"

export default {
    components:{
        right
    }
}
</script>
<style scoped>
     .logo{
        width:1100px;
        margin: 0px auto;
        padding:10px;
    }
    .container:after{
        content:"";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .content{
       
        
        float: right;
    }
    .left{
        box-shadow:rgb(26,26,26,.1) 0px 1px 3px ;
      background-color: #fff;
       margin-right: 10px; 
       width: 720px;
       float: left;
      
    }
</style>