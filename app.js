Vue.component('todo-item', {
    props: ['todo'],
    template: '<div>{{todo}}</div>'
})

new Vue({
    el: '.app',
    data: {
        message: 'SIEMA!'
    }
})