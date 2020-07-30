<template>
  <div>
    <div class="sc">
      <h2>收藏</h2>
    </div>
    <div v-if="login">
      <gu></gu>
    </div>

    <div v-else>
      <div v-if='length==0||length==null' class="he">
       <p>你还没有收藏文章哦</p>
      </div>
      <div v-else>
            <p class="pd">共{{length}}个收藏</p>
              <div v-for="(k,i) in msg" :key="i">
              <div class="bg" v-if='k.exef'>
               <h2>{{k.tit}}</h2>
                <div class="pai">
                  <img :src='k.img' width="190px">
                <p class="show">{{k.content}}</p>
                
              </div>
              <div class="showbut">
              <a href="#" @click.stop.prevent="show1(k)">
              阅读全文
              <span class="down"></span>
            </a>
          </div>
        </div>


        <div v-else class="bg">
            <h2>{{k.tit}}</h2>
            <p class="size">   <img :src='k.img' width="90%" style="display:block">{{k.ps+":"+k.content}}</p>
            <div class="hidbut">
              <a href="#" class="sq" @click.stop.prevent="hid(k)">
                收起
                <span class="up"></span>
              </a>
            </div>
        </div>

       <show :zhan="k.zhan"  @jia="jia(k)" @sc="sc(k)" :scc='k.scc' :ztt='k.ztt'></show>
      </div>

      </div>

    </div>

  </div>
</template>
<script>
import show from "../../components/gong";
import gu from "../../components/gujia";
export default {
  data() {
    return {
      login: true,
      msg: [],
      length: null,
       sc1: []
    };
  },
  components: {
    gu,
    show
  },
  methods: { 
      sc(i) {
      i.scc = !i.scc;
      if (i.scc) {
        this.sc1.splice(i,1);
        
      }
    this.bus.$emit('sc',this.sc1)
    },
       jia(i) {
      i.ztt = !i.ztt;
      if (i.ztt) {
        i.zhan -= 1;
        console.log(i.ztt);  
      } else {
        i.zhan += 1;
         console.log(i.ztt);  
      }
    },
      show1: function(i) {
      i.exef = false;
    },
    hid: function(i) {
      i.exef = true;
    }
    },
  beforeMount: function() {
    setTimeout(() => {
      this.login = false;
    }, 500);
  },
  mounted: function() {

    this.bus.$on("cz", msg => {
      this.msg = msg;
      this.length = msg.length;
    });
  }
};
</script>
<style scoped>
.he{
  height: 200px; 
   text-align: center;
}
.he p{
  margin-top: 100px;
  font-size: 20px;
  color: rgb(144, 144, 144);

}
.down {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: solid 1px;
  border-bottom: solid 1px;
  transform: rotate(45deg);
  margin-bottom: 3px;
}
.show {
  overflow: hidden;
  text-overflow: clip;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
}

.pd {
  border-bottom: 1px #f6f6f6 solid;
  padding: 10px 20px;
}
.bg {
  padding: 20px;
}
.bg > * {
  margin: 5px 0px;
}
.sc {
  padding: 25px;
  border-bottom: 1px #f6f6f6 solid;
}

.up {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-left: solid 1px;
  border-top: solid 1px;
  transform: rotate(45deg);
  margin-top: 3px;
}.size{
font-size:16px;
}
</style>