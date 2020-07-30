<template>
    <div class="container">
        <div class="content">
            <right></right>
    </div>
    <div class="left">
       <keep-alive>
      <router-view  v-if="$route.meta.keepAlive" class="app-middle-content"/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" class="app-middle-content"/>
            
    </div>
    </div>
</template>
<script>
import right from '../components/right'
export default {
    
    
    components:{
        right
    }
}
</script>
<style scoped>
    .container{
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