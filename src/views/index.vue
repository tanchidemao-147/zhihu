<template>
  <div>
    <div class="show" v-show="show"> 
        <div class="up">
            <textarea class="text" placeholder="写下你的问题，准确地描述问题更容易得到解答..." v-model="jk"></textarea>
            <i-button type="default" @click="close()" class="dt">取消</i-button>
            <i-button type="info" @click="fabu()" class="dt">发布问题</i-button>   
        </div>
    </div>

    <div class="navbar">
      <div class="content" v-if="ss">
        <div class="logo">
          <h1>知乎</h1>
        </div>

        <ul>
          <li>
            <a href @click="finish()">
              <router-link to="/tuijian1">首页</router-link>
            </a>
          </li>
          <li>
            <a href @click="finish()">
              <router-link to="/explore">发现</router-link>
            </a>
          </li>
          <li>
            <a href @click="finish()">
              <router-link to="/left1">等你来答</router-link>
            </a>
          </li>
        </ul>

        <div class="ll">
          <i-input icon="ios-search" class="input" placeholder="请输入你想了解的问题..."></i-input>
          <i-button type="info" @click="add()" class="dd">提问</i-button>
        </div>

        <div class="image">
          <div>
            <a href="#">
              <img src="../../image/1.png" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="../../image/2.png" />
            </a>
          </div>
          <div>
            <Dropdown>
              <a href="#">
                <router-link to='/User' style="border:none;">
                <img src="../../image/3.jpg" width="30px" /></router-link>
              </a>
              <Dropdown-menu slot="list" class="inde">
                <Dropdown-item class="inde">
                
               <a href="#" @click="exit()">退出</a>
                </Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div v-else class="content">
          <div v-html="html" class="ht" @click="add1($event)">

          </div>
      </div>

    </div>    
  </div>
</template>
<script>
import SHA1 from 'sha1'
export default {
  data() {
    return {
      ss: true,
      jk:"",
      show:false,
      html:`
          <div>

              <h1>知乎</h1>  
              <a href="#" class="a1">推荐</a>
              <a href="#" class="a2">关注</a>
              <a href="#" class="a3">热榜</a>
             
              </div>
              <div>
              <input type="search" placeholder="请输入你想了解的问题...">
              <button>提问</button>
              </div>
      `
      
    };
  },

  methods: {
    finish() {
      this.$Loading.finish();

    },
    exit() {
      this.$router.push("/mi");
      sessionStorage.removeItem('name');
    },
    add() {
    this.show=true
    },
     add1(e) {
       console.log(e.target.className)
       if(e.target.nodeName=='BUTTON'){
        this.show=true
       }if(e.target.nodeName=='A'&&e.target.className=="a1"){
         this.$router.push("/tuijian1")
       }if(e.target.nodeName=='A'&&e.target.className=="a2"){
         this.$router.push("/follow")
       }if(e.target.nodeName=='A'&&e.target.className=="a3"){
         this.$router.push("/hot")
       }if(e.target.nodeName=='A'&&e.target.className=="a4"){
         this.$router.push("/left1#")
       }if(e.target.nodeName=='A'&&e.target.className=="a5"){
         this.$router.push("/left2#")
       }
       
    },
    close(){
      this.show=false
      this.jk=null
    },
    fabu(){
        var id="A6046863718795"
           var key="E24C8A23-FA7A-7B28-9BEA-BF7D5EEF3140" 
    var now = Date.now();
    var appKey = SHA1(id+"UZ"+key+"UZ"+now)+"."+now


    this.$axios({
                method:"post",
                url:'https://d.apicloud.com/mcm/api/role',
                headers:{
               "X-APICloud-AppId": id ,
            "X-APICloud-AppKey": appKey 
               },
                data:{name:this.jk}
            }).then(res=>{
               console.log(res)
                this.show=false;
                
            },err=>{
               
                console.log(err)
            })
            this.jk=null
    },
     handleScroll(e){
       let dir=e.deltaY>0?`down`:`up`
       if(dir==`down`){
             this.ss=false
             
       }else{
         this.ss=true
       }
     },
  },
   mounted(){
     
     window.addEventListener(`mousewheel`,this.handleScroll,false)
   },
   watch:{
     $route(to){
       if(to.path=="/tuijian1"||to.path=="/follow"||to.path=="/hot"){
            this.html=`
           <div>
              <h1>知乎</h1>
              <a href="#" class="a1">推荐</a>
              <a href="#" class="a2">关注</a>
              <a href="#" class="a3">热榜</a>
              </div>
              <div>
              <input type="search" placeholder="请输入你想了解的问题...">
              <button>提问</button>
              </div>
         `
        }else
        if(to.path=="/explore"){
         this.html=`
           <div>
              <h1>知乎</h1>
              <a href="#">最新专题</a>
              <a href="#">专栏</a>
              
              </div>
              <div>
              <input type="search" placeholder="请输入你想了解的问题...">
              <button>提问</button>
              </div>
         `
        }else
        if(to.path=="/left1"||to.path=="/left2"){
          this.html=`
           <div>
              <h1>知乎</h1>
              <a href="#" class="a4">新问题</router-link></a>
              <a href="#" class="a5">人气问题</a>
              <a href="#">潜力问题</a>
              <a href="#">人人答</a>
              </div>
              <div>
              <input type="search" placeholder="请输入你想了解的问题...">
              <button>提问</button>
              </div>
         `
        }else if(to.path=="/Collection"){
           this.html=`
           <div>
              <h1>知乎</h1>
              
              <h2 class='h2'>收藏</h2>
              </div>
              <div>
              <input type="search" placeholder="请输入你想了解的问题...">
              <button>提问</button>
              </div>
         `
        }
     }
   }
    
};
</script>
<style scoped>
.show{
  width: 100%;
  height: 100%;
  z-index:300;
  background:rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  
 
}
.up{
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  width:536px;
  height: 240px;
  opacity: 1;
  top: 40%;
  left: 40%;
  padding: 20px;
}
.dt{
  float:right;
  margin-top: 10px;
  margin-left: 20px;
}
.text{
  width: 100%;
  height: 70%;
  font-size: 15px;
}
ul {
  margin: 0px 40px;
  overflow: hidden;
  width: 300px;
  display: inline-block;
}
ul li {
  float: left;
  margin: 0px 18px;
  font-family: "微软雅黑";
  list-style: none;
  line-height: 50px;
}
ul li a {
  color: gray;
  font-size: 15px;
}
ul li a:hover {
  color: black;
}
.logo {
  color: rgb(0, 132, 255);
  float: left;
  display: block-inline;
  line-height: 50px;
  font-size: 16px;
}

.navbar {
  box-shadow: rgb(26, 26, 26, 0.1) 0px 1px 3px;
  background-color: #fff;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 200;
}

.ll {
  display: inline-block;
  position: absolute;
  height: 50px;
  padding: 10px 0px;
}
.dd {
  margin: 0px 15px;
}
.image {
  float: right;
  padding: 10px 0px;
  height: 50px;
}
.image div {
  display: inline-block;
  margin: 0px 20px;
}
.content {
  margin: 0px auto;
  width: 1100px;
  height: 50px;
  transition: opacity 0.2s;
}

.active {
  border-bottom: solid 2px #0084ff;
}
.inde {
  width: 20px;
  margin: 0px auto;
  line-height: 0px;
  text-align: center;
  font-size: 15px;
}

.input {
  width: 300px;
  transition: waidth 0.3s;
}
.gg {
  height: 50px;
}

</style>
<style>
.h2{
  display:inline-block;
  margin: 0px 40px;
}
    .ht{  
        display:flex;
        justify-content: space-between;
        height: 50px;
        
    }
    .ht h1{
      color: #0084ff;
       display: inline-block;
       font-size: 2.7em;
    }
    .ht a{
      display: inline-block;
      font-size: 15px;
      color:black;
     line-height: 50px;
      margin:0px 30px;
     
    }
    .ht input{
      height: 30px;
      width: 300px;
      margin: 10px 20px;
      border-radius: 3px;
      border:1px solid #dcdee2;
      color: gray;
    }
    .ht button{
      height: 30px;
      background-color: #0084ff;
      color: #fff;
      width: 60px;
      border-radius: 3px;
      border: #0084ff 1px solid;
    }
   
</style>