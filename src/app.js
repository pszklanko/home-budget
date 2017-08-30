/*jshint esversion: 6 */

import './styles.css';

import 'bootstrap';

import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoItem from './todoItem.vue';
import routes from './router.js';

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

new Vue({
    router,
    data: {
        message: 'SIEMA!'
    },
    components: { TodoItem }
}).$mount("#app")