<template>
    <div>
        <div v-if="login">
      <gu></gu>
        </div>


<div v-else class="from">
    <div v-for="(i,k) in hot" :key="k">
        <div class="for">
            <div><h2>{{k+1}}</h2></div>
            <div class="on"><h2>{{i.tit}}</h2>
            <div class="num">
                <span><img src="../../image/38.jpg"/>{{i.num}}万热度</span>
            <a href="#"><img src="../../image/25.jpg"/>分享</a>
            </div>
            </div>
            <div class="in"><img :src=i.img></div>
        </div>
    </div>
</div>




    </div>
</template>
<script>
import gu from "../components/gujia"
export default {
    data(){
        return{
            login:true,
            hot:[
                {
                    tit:"有什么不烂大街的端午祝福语?",
                    img:require('../../image/zongzi.jpg'),
                    num:4870
                },
                 {
                    tit:"为什么牛萌萌明明吸毒了，却辟谣称自己未吸毒?这是什么心理？",
                    img:require('../../image/39.jpg'),
                    num:5800
                },
                 {
                    tit:"如何看待农家女23年前疑悲凉地顶替上大学，班主任称[我女儿没有你聪慧，无奈让他顶替你]?",
                    img:require('../../image/40.jpg'),
                    num:487
                },
              
                 {
                    tit:"我初中生，用手机拍出这样程度的摄影作品，什么水平?能不能比肩专业?",
                    img:require('../../image/41.jpg'),
                    num:330
                },
                 {
                    tit:"屈臣氏是如何让消费者一生黑的?",
                    img:require('../../image/42.jpg'),
                    num:480
                },
                {
                    tit:"如何评价鞠婧玮的口罩比脸大一圈?",
                    img:require('../../image/43.jpg'),
                    num:1100
                },
               
                {
                    tit:"解放军仪仗队参加2020年俄罗斯红场阅兵，这次阅兵有什么亮点?",
                    img:require('../../image/44.gif'),
                    num:950
                },
                   {
                    tit:"如何看待互联网大厂程序员因厌恶编程，辞去月薪2w+的工作去当司机?",
                    
                    num:3600
                },
                 {
                    tit:"孩子想买苹果手机，我强制他买华为支持国产品牌，这样做合适吗?",
                    
                    num:2900
                },
            ],
            
        }
    },
    methods:{
    },
    beforeMount: function() {
          setTimeout(() => {
            this.login=false
          }, 500);
        },
    
    components:{
        gu
    }
    
}
</script>
<style scoped>

            .for{
                display: flex;
                padding: 20px 20px 20px 30px;
                justify-content:space-between;
                border-top: #f6f6f6 1px solid;
            }
            .in{
                width:190px;
                height: 105px;
                border-radius: 5px;
                overflow: hidden;
            }
            .in img{
                width: 100%;
                height: 100%;
            }
            .on{
                width: 415px;
                height: 105px;
                position: relative;
            }
            .num span,a{
                    color: gray;
                    display: inline-block;
                    margin-right: 30px;
            }
            .num img{
                vertical-align: middle;
            }
            .num{
                position:absolute;
                bottom: 5px;
            }
            .for>div:first-child h2{
                color: #ff9607;
            }
           
</style>