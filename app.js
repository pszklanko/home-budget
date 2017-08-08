const home = { template: '<div>HOME</div>' }
const needs = { template: '<div>NEEDS</div>' }

const routes = [
    { path: '/home', component: home },
    { path: '/needs', component: needs }
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