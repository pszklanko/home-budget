<template>
  <div>{{todo}}</div>
</template>

<script>
export default {
    props: ['todo'],
  data () {
      return {
          todoo: 'AAA'
      }
  }
}
</script>

<style>

</style>

// Vue.component('todo-item', {
    // props: ['todo'],
    // template: '<div>{{todo}}</div>'
// })