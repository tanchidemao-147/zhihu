
<template>
<div id='app'>
  <router-view></router-view>
  
</div>
</template>
<script>

export default {
  

}

</script>
<style scoped>
     #app{
       background-color: #f6f6f6;
      
     }
     #app:after{
       content: "";
       display: block;
       height: 0px;
       clear:both ;
       visibility: hidden;
     }
     
</style>