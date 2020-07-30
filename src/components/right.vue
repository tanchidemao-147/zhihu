
<template>

<div class="">
    <div class="right">
       <div class="bb">
           <ul>
            <li :title="hd"><a href="#"><img src="../../image/4.png" width="40px"/><br>回答问题</a></li>
            <li :title="sp"><a href="#"><img src="../../image/5.png" width="40px"/><br>发视频</a></li>
            <li :title="wz"><a href="#"><img src="../../image/6.png" width="40px"/><br>写文章</a></li>
            <li :title="xf"><a href="#"><img src="../../image/7.png" width="40px"/><br>写想法</a></li>

           </ul>
           <div class="aa">
                <a href="#">稍后答</a>
                <a href="#">草稿箱</a>
       </div>
      </div>
   </div>  
  
<Affix :offset-top="55" class="aff">
          <div class="affix">
              <a href="#">
                  <img src="../../image/8.png"/>
                  <div class="xx">创作者中心<span>去开通--></span></div>
                  </a>
        <div class="kk">
            <div class="itm1" title="Live"><a href="#"><img src="../../image/9.png"/><br>Live</a></div>
            <div class="itm2" title="书店"><a href="#"><img src="../../image/12.png"/><br>书店</a></div>
            <div class="itm3" title="圆桌"><a href="#"><img src="../../image/13.png"/><br>圆桌</a></div>
            <div class="itm4" title="专栏"><a href="#"><img src="../../image/14.png"/><br>专栏</a></div>
            <div class="itm5" title="付费专栏"><a href="#"><img src="../../image/11.png"/><br>付费咨询</a></div>
            <div class="itm6" title="百科"><a href="#"><img src="../../image/10.png"/><br>百科</a></div>
           
        </div>
        <div class="hh">
            
            <div>
                <a href="#" @click="cz"><img src="../../image/15.jpg"/><router-link to='/Collection'>我的收藏 {{msg}}</router-link></a>
            </div>
            
            <div>
                <a href="#"><img src="../../image/16.png"/>我关注的问题</a>
            </div>
            <div>
                <a href="#"><img src="../../image/17.jpg"/>我的邀请</a>
            </div>
            <div>
                <a href="#"><img src="../../image/18.png"/>我的余额</a>
            </div>
            <div>
                <a href="#"><img src="../../image/19.png"/>站务中心</a>
            </div>
            <div>
                <a href="#"><img src="../../image/20.jpg"/>帮助中心</a>
            </div>
            <div>
                <a href="#"><img src="../../image/21.jpg"/>版权服务中心</a>
            </div>
        </div>
        <div class="nn">
            <p>刘看山 - 知乎指南 - 知乎协议 - 知乎隐私保护指引 </p>
            <p>应用 - 工作 - 申请开通知乎机构号</p>
              <p>  侵权举报 - 网上有害信息举报专区</p>
                <p>京 ICP 证 110745 号</p>
                <p>京 ICP 备 13052560 号 - 1</p>
                <p><img src="../../image/22.png" width="15px"/>京公网安备 11010802010035 号</p>
                <p>互联网药品信息服务资格证书</p>
                <p>（京）- 非经营性 - 2017 - 0067</p>
                <p>违法和不良信息举报：010-82716601</p>
                <p>儿童色情信息举报专区</p>
                <p>证照中心</p>
                <p>联系我们 @ 2020 知乎</p>
                
            </div>
          </div>
      </Affix>
    
  
   </div>
</template>
<script>
export default {
   data(){
        return{
            hd:"回答",
            sp:"视频",
            wz:"文章",
            xf:"想法",
            msg:null,
            ss:null
        }
        
    },
    methods:{
     cz(){
           this.bus.$emit('cz',this.ss)
     }
    },
   mounted() {
    this.bus.$on("sc", msg => {
      this.msg = msg.length;
      this.ss=msg
    
    })
    }
  
  
}
</script>
<style scoped>
    .right{
     box-shadow:rgb(26,26,26,.1) 0px 1px 3px ;
      background-color: #fff;
     
}
        .right a{
            color: black;
            font-size: 14px;
        }
      ul li{
          list-style: none;
          float: left;
          margin:20px;
          
}
        .aa a{
            display: inline-block;
            width: 50%;
            text-align: center;
            color: gray;
            font-size: 15px;
            line-height:50px ;
        }
        .aa{
            border-top:#f6f6f6 solid 0.5px;
            height: 50px;
        }
       .aa a:first-child{
           border-right: #f6f6f6 solid 0.75px;
       }
        ul:after{
        content:"";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .aff{
        margin: 5px 0px;
    }
    .affix{
        display: flex;
        flex-flow: column wrap;
    }
    .affix a:first-child{
     display: inline-block;
      flex: 1;
      height:50px;
      padding: 10px 17px;

    }
    .affix>a,.kk,.hh{
         box-shadow:rgb(26,26,26,.1) 0px 1px 3px ;
      background-color: #fff;
      margin: 5px 0px;
    }
    .xx{
        margin-top:-30px;
        margin-left: 30px;
        color: gray;
        font-size: 15px;

    }
    .xx span{
        float: right;
        color: blue;
    }
    .kk{
        display:flex;
        flex-flow: row wrap;
        width: 342px;
        padding: 20px;
    }
    .kk div{
        margin: 10px auto ;
        text-align: center;
        width: 100px;
        
    }
    .kk a{
       color: gray;
       font-size: 15px;
    }
    .itm1 a:hover{
        color: rgb(255, 207, 0);
    }
    .itm2 a:hover{
        color: rgb(67, 212, 128);
    }
    .itm3 a:hover{
        color: rgb(0, 132, 255);
    }
    .itm4 a:hover{
        color: rgb(15, 136, 235);
    }
    .itm5 a:hover{
        color: rgb(84, 120, 240);
    }
    .itm6 a:hover{
        color: rgb(88, 104, 209);
    }
    .hh{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        padding: 10px;
         box-shadow:rgb(26,26,26,.1) 0px 1px 3px ;
      background-color: #fff;
    }
    .hh a{
         color: gray;
        
    }
    .hh img{
         vertical-align:middle;
         margin-right: 10px;
        display: inline-block;
        
    }
    
    .nn{
        color:gray;
        font-size: 14px;
    }
   
</style>