<template>
<div class="mi">

            <div>
                <input class="xt" type="text" placeholder="用户名" v-model="deng.name" >
            </div>
            <div>
                <input class="xt" :type=ty placeholder="密码" v-model="deng.pwd">
            </div>
            <div class='wz'><a >忘记密码?</a><a @click="show" ><span class="xs" :class="{act:mm}"></span>显示密码</a></div>
               <div><i-button type="primary" long @click="yz()" >登录</i-button></div> 

</div>
</template>
<script>
import SHA1 from 'sha1'
export default {
    data(){
        return{
             mm:false,
            ty:'password',
            deng:{
                 name:null,
                 pwd:null,
            },
        }
    },

    methods:{
          show(){
            this.mm=!this.mm
            if(this.mm){
                this.ty='text'
            }else{
                 this.ty='password'
            }

        }
        ,
        yz(){
            var id="A6046863718795"
           var key="E24C8A23-FA7A-7B28-9BEA-BF7D5EEF3140" 
    var now = Date.now();
    var appKey = SHA1(id+"UZ"+key+"UZ"+now)+"."+now

            let {name,pwd}=this.deng
            if(!name||!pwd) {
                this.$Message.warning('不能为空')
                return
                }
            this.$axios({
                method:"post",
                url:'https://d.apicloud.com/mcm/api/user/login',
                headers:{
               "X-APICloud-AppId": id ,
            "X-APICloud-AppKey": appKey 
               },
                data:{username:name,password:pwd}
            }).then(res=>{
                
                if(res.data.ttl=='1209600'){
                 
                    sessionStorage.setItem('name',name);
                    this.$router.push('/index')
                }

            },err=>{
                 this.$Message.error('账号或密码不正确')
                console.log(err)
            })
          
        }
    }
    
}
</script>
<style scoped>
.xt{
    border: none;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    height: 40px;
    font-size: 15px;
}

.wz{
    display: flex;
    justify-content: space-between;
}.wz a{
    font-size: 15px;
}
.wz a:last-child{
    color: #8590a6 ;
}
.mi>div{
margin: 20px auto;
}
.xs{

display: inline-block;
height: 13px;
width: 13px;
margin-right: 5px;
border: gray 1px solid;

}
.act{
    background-color:#2d8cf0;
}
</style>