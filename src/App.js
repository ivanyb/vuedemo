// import Vue from 'vue'
// import App from './App.vue'
var Vue = require('vue')
var App = require('./App.vue')

//使用vue-router路由则不能使用new Vue() 而要使用 Vue.extend() 来创建一个根路由
var VueRouter = require('vue-router') //导入包
// //1.0 在Vue中使用VueRouter对象
Vue.use(VueRouter);

//2.0 加载4个导航组件
import newlz from 'comp/newlz/newlz'
import newend from 'comp/newend/newend'
import pushlz from 'comp/pushlz/pushlz'
import pushend from 'comp/pushend/pushend'


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
    routes: [
        { path: '/newlz', component: newlz },
        { path: '/newend', component: newend }
        ,
        { path: '/pushlz', component: pushlz }
        ,
        { path: '/pushend', component: pushend }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router:router, //使用路由对象实例
    template: '<App/>',
    components: { App }
})

