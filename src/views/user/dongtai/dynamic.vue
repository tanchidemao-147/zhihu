<template>
<div>
    <h3>我的动态</h3>
    <div v-for="(k,i) of dong" :key="i">

        <h1>{{k.name}}</h1>
    </div>




</div>
    
</template>
<script>
export default {
    data(){
        return{
             dong:[]
        }
    },
    mounted:function(){
  this.dong = this.$store.state.dong
       
    }
}
</script>
<style scoped>

</style>