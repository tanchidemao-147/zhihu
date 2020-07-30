import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

export default new vuex.Store({

    state:{
        user: sessionStorage.getItem('name'),
        token: sessionStorage.getItem('name')? true:false, // 获取用户登录token;
       dong:[{name:'11'}]
    },
    mutations:{
        
    },
    actions:{

    },
    getters:{

    }

})
