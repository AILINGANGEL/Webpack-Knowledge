// import './style.css';
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Bus from './vue-bus.js';
import './style.css';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Bus);
const routes = [{
    path: '/index',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/about',
     meta: {
        title: '介绍页'
    },
    component: (resolve) => require(['./views/about.vue'], resolve)
},{
    path: '/demo',
     meta: {
        title: '锚点页'
    },
    component: (resolve) => require(['./views/demo.vue'], resolve)
},{
    path: '/user/:id',
     meta: {
        title: '个人主页'
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
},{
    path: '/func',
     meta: {
        title: '函数组件'
    },
    component: (resolve) => require(['./views/func.vue'], resolve)
}, {
    path: '*',
    redirect: '/index'
}]

const RouterConfig = {
    mode: 'history', //hash
    routes: routes
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

router.afterEach((to, from, next) => {
    window.scrollTo(0,0); //回到页面顶端
});

const moduleA = {
    state: {},
    mutations: {
        a(state){
            //state是moduleA的state
        }
    },
    actions: {},
    getters: {
        a(state, getters, rootState) {
            //rootState就是根的state
        }
    }
}

const moduleB = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}

const store = new Vuex.Store({
    // state中的数据只能读取不能修改
    state: {
        count: 0,
        list: [1, 5, 8 , 10, 20]
    },
    mutations: {
        // 这里面不要去异步操作数据
        increment(state, n=1) {
            state.count += n;
        },
        decrease(state, n=1) {
            state.count -=n;
        }
    },
    getters: {
        // getters可以依赖其他的getter
        filterList: (state, getters) => {
            return state.list.filter(item=>item<10);
        }
    },
    actions: {
        // 做异步操作,不直接修改state,通过mutations来修改数据
        increment(context, callback) {
            //pending/resolved/rejected
            // const p = new Promise((resolve, reject)=>{
            //     const random = Math.random();
            //     if (random > 0.5) {
            //         resolve(random);
            //     } else {
            //         reject(random);
            //     }
            // });

            // p.then(val=>{
            //     console.log(val);
            // }).catch(val => {
            //     console.log(val);
            // })


            //异步代码xxxx
            // context.commit('increment');
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    context.commit('increment');
                    resolve();
                }, 1000)
            })
            // setTimeout(()=>{
            //     callback();
            // }, 1000);
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
});

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
})
