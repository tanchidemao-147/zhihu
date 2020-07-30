<template>
  <div class="winde">
    <div class="tou">
      <div class="card">
        <img class="fm" />
      </div>
      <div class="carduser">
        <div class="cardusercente">
          <div class="tx">
            <img src="../../assets/wyb.jpg" width="160px" />
          </div>
          <div class="cente">
            <h1>
              <span class="name">一条咸鱼</span>
              <span class="qm">个性签名</span>
            </h1>
            <div v-if="show" class="jd">
              <p><Icon type="briefcase" size='16px'></Icon>软件开发</p>
            </div>
            <div v-else>
              <div><span class="hy">所在行业</span><span>软件开发</span></div>


            </div>
            <div>
              <a @click="sw"><span :class='show?"down":"up"'></span>{{show?"查看":"收起"}}详细信息</a>
              <a >编辑个人资料</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dong">

      <div>
        <div class="ti">
          <div>
            <router-link to="/dynamic"><span>动态</span></router-link> 
            <router-link to="/answer"><span >回答</span></router-link>
            <router-link to="/video"> <span >视频</span></router-link>
            <router-link to="/questions"><span >提问</span></router-link>
            <router-link to="/article"><span >文章</span></router-link>
            <router-link to="/zhuanlan"><span >专栏</span></router-link>
            <router-link to="/idea"><span >想法</span></router-link>
            <router-link to="/answer"><span >更多 <span class="down"></span></span></router-link>
        </div>
       <div><router-view></router-view></div>
        
       </div>




      </div>
      <div class="le">
        <div> <a href="#" class="zx">
                  <img src="../../assets/1.png"/>
                  <div class="xx">创作者中心<span>去开通--></span></div>
                  </a>
        </div>
        <div class="guanzu">
          <a href="">关注了
            <p>0</p>
          </a>
          <a href="">关注者
            <p>0</p>
          </a>
        </div>

        <div class="sou">
          <a ><span>关注的话题</span><span>0</span></a>
          <a ><span>关注的专栏</span><span>0</span></a>
           <a ><span>关注的问题</span><span>0</span></a>
            <a ><span>关注的收藏夹</span><span>0</span></a>
          <p>个人主页背浏览0次</p>

        </div>


        <div class="nn">
            <p>刘看山 - 知乎指南 - 知乎协议 - 知乎隐私保护指引 </p>
            <p>应用 - 工作 - 申请开通知乎机构号</p>
              <p>  侵权举报 - 网上有害信息举报专区</p>
                <p>京 ICP 证 110745 号</p>
                <p>京 ICP 备 13052560 号 - 1</p>
                <p><img src="../../assets/22.png" width="15px"/>京公网安备 11010802010035 号</p>
                <p>互联网药品信息服务资格证书</p>
                <p>（京）- 非经营性 - 2017 - 0067</p>
                <p>违法和不良信息举报：010-82716601</p>
                <p>儿童色情信息举报专区</p>
                <p>证照中心</p>
                <p>联系我们 @ 2020 知乎</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../../assets/user.css'
export default {
  data(){
    return{
      show:true
    }
  },
  methods:{
    sw(){
      this.show=!this.show
     
    }
  }
}
</script>
