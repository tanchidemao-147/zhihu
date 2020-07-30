<template>
<div>
 <div class="img">
                  <div @click="jia()" :class="[ztt?'child':'child2']"><a   ><span :class="[ztt?'sj':'sj2']"></span>{{ztt?'赞同':'已赞同'}}{{zhan}}</a></div>
                  <div :class="[jss?'jj':'down']" @click="js()"><a  ><span :class="[jss?'js':'js2']"></span></a></div>   
                  <div ><a><img src="../../image/24.jpg"/>添加评论</a></div>
                  <div> 
                       <Dropdown trigger="click">
                        <a href="#"><img src="../../image/25.jpg"/>分享</a>
                        <Dropdown-menu slot="list">
                        <Dropdown-item style='text-align:center'><a  @click="fz()">复制链接</a></Dropdown-item>
                        <Dropdown-item style='text-align:center'>新浪微博</Dropdown-item>
                        <Dropdown-item style='text-align:center'>微信扫一扫</Dropdown-item>
                          <Dropdown-item><img src='../assets/qrcode.png' width="80px"></Dropdown-item>
                        </Dropdown-menu>
                     </Dropdown>
                 </div>
                  <div><a @click='sc()' ><img src="../../image/26.jpg"/>{{scc?'收藏':'已收藏'}}</a></div>
                  <div><a href="#"><img src="../../image/27.png"/>举报</a></div>
                  <div><a href="#">...</a></div>
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
            jss:true,
          
        
           

        }
    },
    props:{
        zhan:Number,
    

            scc:Boolean,
              ztt:Boolean
         
    },
    methods:{
        fz(){
           this.$Message.info('链接复制成功');
        },
      
      
        sc(){
          
           
            this.$emit("sc");
        },
        jia(){
            
            
         
           this.$emit('jia')
        },
        js(){
            this.jss=!this.jss
           
        }

    }
    
}
</script>
<style scoped>
.img{
        display:flex;
        margin:10px 10px    ;
         
    }
    .img a{
        color: black;  
        
    }
    .img>div{
        margin:10px;
    }
   .img img{
       vertical-align:middle;
   }
   .child{
       margin-left: 0px;
       background-color:rgba(0,132,255,0.2);
       width: 80px;
       height: 30px;
       text-align: center;
      line-height: 30px;
      position: relative;
   }
    .child{
       margin-left: 0px;
       background-color:rgba(0,132,255,0.2);
       width: 80px;
       height: 30px;
       text-align: center;
      line-height: 30px;
      position: relative;   border-radius:3px; 
   }
    .child2{
       margin-left: 0px;
       background-color:rgba(0,132,255,1);
       width: 80px;
       height: 30px;
       text-align: center;
      line-height: 30px;
      position: relative;  border-radius:3px; 
   }
   .child a{
       color: #0084ff;
       
   }
   .child2 a{
       color: #fff;
   }
  
   .jj{
       width: 36px;
       background-color: rgba(0,132,255,0.2);
       border-radius:2px;
       position: relative;
       right: 15px;
   }
   .sj{
       border:5px solid #0084ff;
      border-top-color: transparent;
      border-left-color:transparent ;
      border-right-color:transparent ;
        position: absolute;
        left:10px;
        bottom: 12px;
   }
    .sj2{
       border:5px solid #fff;
      border-top-color: transparent;
      border-left-color:transparent ;
      border-right-color:transparent ;
        position: absolute;
        left:5px;
        bottom: 12px;
   }
   .js{
         border:5px solid #0084ff;
      border-bottom-color: transparent;
      border-left-color:transparent ;
      border-right-color:transparent ;
       position: absolute;
       left:12px;
       top: 12px;
   }
   .down{
     width: 36px;
       background-color: rgba(0,132,255,1);
       border-radius:2px;
       position: relative;
       right: 15px;
   }.js2{
       border:5px solid #fff;
      border-bottom-color: transparent;
      border-left-color:transparent ;
      border-right-color:transparent ;
       position: absolute;
       left:12px;
       top: 12px;
   }

</style>