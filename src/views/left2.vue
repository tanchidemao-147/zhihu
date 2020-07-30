<template>
    <div>
        <div v-if="login">
            <gu></gu>
           
        </div>
        <div v-else>
           <tit></tit>
        </div>
    </div>
</template>
<script>
import gu from '../components/gujia'
import tit from '../components/title1'
export default {
    components:{
        tit,
        gu
    },
    data(){
        return{
            login:true,

           
        }

    },
  
     beforeMount: function() {
          setTimeout(() => {
            this.login=false
          }, 500);
        },
    
     
}
</script>
<style scoped>

</style>