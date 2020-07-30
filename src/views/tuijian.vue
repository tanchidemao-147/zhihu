<template>
    <div class="left">
        <div class="nav">
            <div><a @click="finish()"><router-link to="/tuijian1">推荐</router-link></a></div>
            <div><a  @click="finish()"><router-link to="/follow">关注</router-link></a></div>
            <div><a  @click="finish()"><router-link to="/hot">热榜</router-link></a></div>
        </div>
        <div>
            <keep-alive>
      <router-view  v-if="$route.meta.keepAlive" class="app-middle-content"/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive" class="app-middle-content"/>
            
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
        margin: 25px;
    }
    .active{
       
        border-bottom: solid 2px #0084ff;
    }
</style>