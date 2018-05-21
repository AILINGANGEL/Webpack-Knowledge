// import './style.css';
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import './style.css';
Vue.use(VueRouter);
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
    path: '/user/:id',
     meta: {
        title: '个人主页'
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
},{
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

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
