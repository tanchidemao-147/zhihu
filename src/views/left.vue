<template>
    <div class="left">
        <div class="nav">
            <router-link to="/left1"><div><a href="" @click="finish()">新问题</a></div></router-link>
            <router-link to="/left2"><div><a href="" @click="finish()">人气问题</a></div></router-link>
            <div><a href="" @click="finish()">潜力问题</a></div>
            <div><a href="" @click="finish()">人人答</a></div>
        </div>
        <div> 
            <router-view />
         
   
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        finish(){
      this.$Loading.finish();
    }
    }
}
</script>
<style scoped>
    .nav div a{
        color: black;
        font-size: 16px;
    }
    .nav{
        display: flex;
        border-bottom: 1px solid #f0f2f7;
    }
    .nav div{
        margin: 20px 15px;
        border-radius: 15px;
        background-color:rgba(133,144,166,.12);
        
    }
    .nav div a{
        font-size: 14px;
        display: inline-block;
        padding: 3px 8px;
        color: #444;
    }
    .active{
        
        color:#0084ff;
       
        border-bottom:1px #0084ff solid;
    }
</style>