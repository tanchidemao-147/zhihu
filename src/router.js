import Vue from 'vue'
import VueRouter from 'vue-router'
import zy from './views/zy'


Vue.use(VueRouter)


  
 
export default new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            redirect: '/mi'
        },
        {
            path: '/login',
            component: () => import('./views/login'),

            name: 'login',
            children: [{
                path: '/mi',
                component: () => import('./components/log'),
                meta: {
                    title: '知乎-登录'
                }
            },
            {
                path: '/sj',
                component: () => import('./components/log1'),
                meta: {
                    title: '知乎-注册'
                }
            }
            ]
        },
        {
            path: '/index',
            name: 'index',
            redirect: '/shouye',
            component: zy,
            children: [
                {
                    path: "/shouye",
                    name: 'shouye',
                    meta: {
                        keepAlive: true
                    },
                    redirect: '/tuijian',
                    component: () => import('./views/shouye'),
                    children: [
                        {
                            path: "/tuijian",
                            name: 'tuijian',
                            redirect: '/tuijian1',
                            component: () => import('./views/tuijian'),
                            children: [
                                {
                                    path: "/tuijian1",
                                    name: 'tuijian1',
                                    component: () => import('./views/tuijian1'),
                                    meta: {
                                        title: '知乎-推荐',
                                        keepAlive: true
                                    }
                                },
                                {
                                    path: "/follow",
                                    name: 'follow',
                                    component: () => import('./views/follow'),
                                    meta: {
                                        title: '知乎-关注',
                                        keepAlive: true
                                    }

                                },
                                {
                                    path: "/hot",
                                    name: 'hot',
                                    component: () => import('./views/hot'),
                                    meta: {
                                        title: '知乎-热榜'
                                    }
                                }
                            ]
                        },
                        {
                            path:'/Collection',
                            name:'Collection',
                            component:()=>import('./views/Collection/index'),
                            meta: {
                                title: '知乎-收藏',
                                keepAlive: true
                                
                            }

                        }
                    ]
                },
                {
                    path:'/User',
                    name:'User',
                    redirect:'/dynamic',
                    component:()=>import('./views/user/index'),
                    meta:{
                        title:'知乎-我的主页',
                        keepAlive: true
                    },
                    children:[
                        {
                            path:'/dynamic',
                            component:()=>import('./views/user/dongtai/dynamic.vue'),
                            name:'dynamic',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        },
                        {
                            path:'/answer',
                            component:()=>import('./views/user/dongtai/answer.vue'),
                            name:'answer',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        },
                        {
                            path:'/video',
                            component:()=>import('./views/user/dongtai/video.vue'),
                            name:'video',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        },
                        {
                            path:'/questions',
                            component:()=>import('./views/user/dongtai/questions.vue'),
                            name:'questions',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        },
                        {
                            path:'/article',
                            component:()=>import('./views/user/dongtai/article.vue'),
                            name:'article',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        }, {
                            path:'/zhuanlan',
                            component:()=>import('./views/user/dongtai/zhuanlan.vue'),
                            name:'zhuanlan',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        },
                        {
                            path:'/idea',
                            component:()=>import('./views/user/dongtai/idea.vue'),
                            name:'idea',
                            meta:{
                                title:'知乎-我的主页'
                            }
                        }
                     ]
                },
                {
                    path: "/explore",
                    name: 'explore',
                    component: () => import('./views/explore'),
                    meta: {
                        title: '知乎-发现',
                        keepAlive: true
                    }
                },
                {
                    path: "/wait",
                    name: 'wait',
                    redirect: '/left',
                    component: () => import('./views/wait'),

                    children: [
                        {
                            path: "/left",
                            name: 'left',
                            redirect: '/left1',
                            component: () => import('./views/left'),
                            children: [
                                {
                                    path: "/left1",
                                    name: 'left1',
                                    component: () => import('./views/left1'),
                                    meta: {
                                        title: '知乎-新问题'
                                        ,
                                        keepAlive: true
                                    },
                                },
                                {
                                    path: "/left2",
                                    name: 'left2',
                                    component: () => import('./views/left2'),
                                    meta: {
                                        title: '知乎-人气问题'
                                        ,
                                        keepAlive: true
                                    },
                                }
                            ]
                        }

                    ]
                }
            ]

        }

    ]
});




