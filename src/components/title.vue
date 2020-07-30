<template>
<div>
     <div v-for="(i,k) in item" :key="k">
                <div class="tit">
                    <h2>{{i.name}}</h2>
                    <div class="btn">
                        <a href="#">写回答</a>
                        <a href="#">关注问题</a>
                        <a href="#">稍后答</a>
                        <span>{{hd}}个回答 - {{ll}}个浏览</span>
                    </div>
                </div>
            </div>
</div>
</template>
<script>
import SHA1 from 'sha1'
export default {
    data(){
        return{
            hd:0,
            ll:0,
            item:[]
        }
    },
      methods:{
        api(){
              var id="A6046863718795"
           var key="E24C8A23-FA7A-7B28-9BEA-BF7D5EEF3140" 
    var now = Date.now();
    var appKey = SHA1(id+"UZ"+key+"UZ"+now)+"."+now

            this.$axios({
                method:"get",
                url:'https://d.apicloud.com/mcm/api/role?filter={"where":{},"skip":0,"limit":100}',
                  headers:{
               "X-APICloud-AppId": id ,
            "X-APICloud-AppKey": appKey 
               },
            })
            .then(res=>{
                console.log(res)
              this.item=res.data.reverse()
              
                
            },err=>{
                console.log(err)
            })
        }
    },
    mounted:function(){
       this.api()
    }
}
</script>
<style scoped>
        .tit{
            padding: 5px;
            margin: 10px;
            border-bottom:1px solid #f6f6f6;
        }
        .btn{
            margin:20px 0px;
        }
        .btn>*{
            display: inline-block;
        }
        .btn a{
            margin: 0px 20px;
            font-size: 14px;
            color:gray;
        }
        .btn a:first-child{
            border:1px solid #0084ff ;
            color: #0084ff;
            width: 94px;
            line-height: 28px;
            text-align: center;
            border-radius: 3px;
            
        }
        h2{
            margin-left: 15px;
        }
        .btn span{
            float: right;
        }
</style>