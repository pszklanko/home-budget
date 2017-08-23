/*jshint esversion: 6 */

const home = { template: '<div>HOME {{ $route.params }}</div>' }
const needs = { template: '<div>NEEDS</div>' }
const budget = { template: '<div>BUDGET</div>' }
const about = { template: '<div>ABOUT</div>' }

const routes = [
    { path: '/home', component: home },
    { path: '/needs', component: needs },
    { path: '/budget', component: budget },
    { path: '/about', component: about }
]

const router = new VueRouter({
    routes
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<div>{{todo}}</div>'
})

new Vue({
    router,
    data: {
        message: 'SIEMA!'
    }
}).$mount("#app")