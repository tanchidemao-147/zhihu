<template>
<div>
    <div class="bg">
        <div  class="logo1"> <img src="../assets/zhi.png"></div>
       
       

      <div class="con">
           <div class="form">
              <div class="tabs">
                 <a href=""><router-link to='/sj'>注册</router-link></a>
                 <a href=""><router-link to='/mi'>登录</router-link></a>
             </div>
             <div>
                 <router-view/>
             </div>
             <div class="sm">
                 <p>未注册手机验证后自动登录，注册即代表同意<a href="">《知乎协议》</a><a href="">《隐私保护指引》</a></p>
             </div>
             <div class="qq">
                 <div class="sj">社交账号登录</div>
                 <div class="qq1">
                    <a href=""><img src="../assets/wx.jpg">微信</a>
                    <a href=""><img src="../assets/qq.png">QQ</a>
                    <a href=""><img src="../assets/wb.jpg">微博</a>
                 </div>

             </div>


                
            </div>
        </div>

        <div class='foot'>
            

          <p>知乎专栏 - 圆桌 - 发现 - 移动应用 - 联系我们 - 来知乎工作 - 注册机构号</p>
          <p>&copy;2020知乎 - 京 ICP 证 110745 号 - 京 ICP 备 13052560 号 - 1 - 京公网安备 11010802010035 号 - 出版物经营许可证</p> 
          <p>侵权举报 - 网上有害信息举报专区 - 儿童色情信息举报专区 - 违法和不良信息举报：010-82716601</p>

           

        </div>

    </div>
 </div>
</template>

<style scoped>
.bg{
    background-color:#b8e5f8 ;
    background-image: url(../assets/bg.png);
    width: 100%;
    height: 120vh;
    background-size: cover;
    overflow: hidden;
}

.con{
    width: 400px;
    height:450px;
    margin: auto;
    background-color: #fff;
    padding: 0px 20px;
}
.logo1{
    width: 128px;
    height: 81px;
    margin: 20px auto;
}
.logo1 img{
    width: 100%;
}

.tabs a{
    display: inline-block;
    color: #000;
    margin:10px 10px 10px 0px ;
    font-size: 16px;

}
.sm{
    font-size: 13px;
     color:#8590a6;
     margin-top: 40px;
     margin-bottom:20px ;
   
}.sm a{
     color:#8590a6;
}
.qq{
    border-top: 1px solid #ebebeb ;
    padding: 20px 0px;
    
}

.qq::after{
    content: '';
    display: block;
    height: 0px;
    clear: both;
    visibility: hidden;
}

.sj{
    float: left;
    font-size: 15px;
    color: #8590a6;

}
.qq1{
    float:right;
}
.qq1 img{
    vertical-align:middle;
    margin:0px 5px;
}
.qq1 a{
    display:inline-block;
    color: #8590a6;
    margin: 0px 5px;
    font-size:15px;
}
.foot{
    font:13px;
    color: #fff;
    margin: 200px auto;
    text-align: center;
}
.active{
    border-bottom:2px solid #0084ff;
}


</style>