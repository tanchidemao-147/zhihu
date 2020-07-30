<template>
  <div class="logo">
      <h1><img src="../../image/32.png"/>最新专题</h1>
      <div v-for="(i,v) in array" :key="v" class="he">
          <div class="index">
              <div class="for">

                  <a href="#"><img :src=i.img></a>
                  
              </div>
              <div class="tit">
                  <h2>{{i.title}}</h2>
                  <a href="#" @click="like(i)" class="but" :class="{like:i.like}">{{i.con}}</a>

                  <span>{{i.num}}浏览</span>
              </div>
              <div class="con">
                <div>
                  <a href="#">{{i.tit1}}</a>
                  <span>{{i.content1}}</span>
                </div>
                <div>
                  <a href="#">{{i.tit2}}</a>
                  <span>{{i.content2}}</span>
                </div>
                <div>
                  <a href="#">{{i.tit3}}</a>
                  <span>{{i.content3}}</span>
                </div>
              </div>
          </div>
        </div>
        <div class="final">
          <div>
          <a href="#">查看更多专题 ></a>
          </div>
  </div>
  <h1><img src="../../image/33.png">专栏</h1>
  <div  class="start">
  <div v-for="i in json" :key="i.id">
    <div>
      <div class="middle">
        <a href="#"><img :src=i.img></a>
        <h3>{{i.title}}</h3>
        <span>{{i.gz}}关注 - {{i.num}}文章</span>
        <p>{{i.content}}</p>
        <a href="#" class="but">进入专栏</a>
      </div>
    </div>
  </div>
  </div>
        <div class="final">
            <a href="#">查看更多专栏 ></a>
        </div>
        <p class="last">刘看山 . 知乎指南 . 知乎协议 . 应用 . 工作 . 练习我们 &copy;2020 知乎</p>
  </div>
</template>
<script>
export default {
  methods:{
        like(i){
          i.like=!i.like
          if(i.like){
            i.con="已关注"
          }else{
            i.con="关注专题"
          }
          
        }
  },
    data(){
      return{
        json:[
          {
              id:5,
              img:require("../../image/34.png"),
              title:"在职研究生",
              content:"十年树木，百年树人",
              num:0,
              gz:0,

        },
          {
              id:6,
              img:require("../../image/35.png"),
              title:"电商淘宝视觉营销",
              content:"产品进入视线--信息传递到大脑-产生购买欲望-形成购买",
              num:0,
              gz:0,
        },
          {
              id:7,
              img:require("../../image/36.png"),
              title:"抽屉电影",
              content:"说电影，也说事情",
              num:0,
              gz:0,

        },
          {
              id:8,
              img:require("../../image/37.png"),
              title:"DogeGamer",
              content:"DOTA2 赛事回顾",
              num:0,
              gz:0,

        }
        ],
        array:[
          {
          title:"驶向未来| 汽车新十年",
          img:require("../../image/28.png"),
          num:0,
          tit1:"未来[新趋势]",
          content1:"智能汽车+新零售业态，是趋势还是伪命题？",
          tit2:"技术[新势力]",
          content2:"该如何评价新能源汽车的电池性能和安全性？",
          tit3:"驾驶[新体验]",
          content3:"买了新能源车后，你在日常出行上有哪些变化？",
          like:false,
          con:"关注专题",
          
        },
          {
          title:"直击WWDC 2020",
          img:require("../../image/29.png"),
          num:0,
          tit1:"大会现场一览",
          content1:"苹果WWDC 2020发布会上划了这些重点",
          tit2:"最具野心的芯片计划",
          content2:"高性能+低功耗，这就是苹果对Mac转用自...",
          tit3:"iOS有大变化",
          content3:"iOS 14有哪些亮点和槽点?",
          like:false,
          con:"关注专题",
          
        },
          {
          title:"小蓝书.母婴用品选购指南",
          img:require("../../image/30.png"),
          num:0,
          tit1:"普通奶粉",
          content1:"婴儿可以喂很浓稠的奶粉吗？",
          tit2:"特殊奶粉",
          content2:"氨基酸配方奶粉能长期吃吗？",
          tit3:"辅食零食",
          content3:"如何给孩子选择成品果泥？",
          like:false,
          con:"关注专题",
          
        },
          {
          title:"这个视频了不起| 第一期",
          img:require("../../image/31.png"),
          num:0,
          tit1:"[今日无新闻]",
          content1:"大家都都在看|《三体 2》日本开售，线下脱...",
          tit2:"[沙雕聚集地]",
          content2:"沙雕聚集地|魔法不裂：你见过如此沙雕的HP嘛",
          tit3:"本周优秀视频捕手",
          content3:"人民网",
          like:false,
          con:"关注专题",
          
        }
        ]
      }
    }
}
</script>
<style scoped>
    .logo{
      width: 1100px;
      margin:0px auto;
    }
    .he{
      width:490px ;
      display: inline-block;
      margin-left:25px;
    }
    h1 img{
      vertical-align: middle;
    }
    h1{
      margin: 30px 0px;
    }
    .index{
      width: 490px;
      height: 450px;
      margin: 0px 10px 10px 0px;
      border-radius: 4px;
      box-shadow: 0px 1px 3px 0px rgba(26, 26, 26, 0.2);
      background-color: #ffffff;
      overflow: hidden;
      display: inline-block;
    }
    .for{
      height: 200px;
      width: 100%;
      overflow: hidden;
    }
    .tit{
      padding: 20px 0px;
      margin: 0px 30px;
      border-bottom: 1px solid #ebebeb;
      height: 100px;
    }
    .tit a{
      float: right;
    }
    .tit h2{
      color: black;
    }
    .but{
      display: inline-block;
      height: 34px;
      font-size:14px;
      border-radius: 3px;
      font-weight: 600;
      width: 88px;
      background-color: rgba(0,132,255,0.2);
      color:#0084ff;
      text-align: center;
      line-height: 34px;

    }
    .like{
      color: gray;
      background-color:hsla(0,0%, 60%,0.2)!important;
      display: inline-block;
      height: 34px;
      font-size:14px;
      border-radius: 3px;
      font-weight: 600;
      width: 88px;
      text-align: center;
      line-height: 34px;
    }
    .con{
      margin: 0px 20px;
      font-size: 15px;
      padding: 20px 0px;
    }
    .con a,span{
      display: inline-block;
    }
    .con span{
      margin-left: 20px;
    }
    .con div{
      margin: 10px 0px;
    }
    .con a{
      background-color:#f6f6f6;
      border-radius: 5px;
      color: #8590a6;
      height: 24px;
      
      text-align: center;
    }
    .final{
      display:flex;
     justify-content: center;
      
    }
    .final a{
     display: inline-block;
     background-color: #ffffff;
      border-radius: 25px;
      height: 48px;
      font-size: 18px;
      box-shadow: 0px 1px 3px 0px rgba(26, 26, 26, 0.2);
      padding:10px 20px;
      color: gray;
      margin: 20px auto;
      
    }
    .start{
      display:flex;
      margin: 30px;
      flex-direction: row;
      
    }
    .start>div{
       box-shadow: 0px 1px 3px 0px rgba(26, 26, 26, 0.2);
       height: 313px;
       width: 240px;
       background-color: #ffffff;
       margin: 15px;
       padding: 20px;
      
    }
    .start a:first-child{
      display: inline-block;
      width:80px;
      height: 80px;
      
    }
    .start img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .start span{
      color: gray;
    }
    .start p{
      margin: 20px 0px;
    }
    .middle{
    text-align: center;
    }
    .last{
        text-align: center;
        margin: 100px 0px;
    }
</style>