<template>
    <div class="app">
        <index></index>
       
    <router-view  />
        <Back-top class="but"></Back-top>
    </div>
</template>
<script>
import index from './index'
export default {
    components:{
        index
    }
    
}
</script>
<style scoped>
        .app{
            padding-top: 50px;
        }
        .but{
  opacity: 0.5;
}
</style>