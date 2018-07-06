Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasError: false,
    classObject1: {
      active: true,
      'text-danger': false
    },
    activeClass: 'active',
    errorClass: 'text-danger'
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

new Vue({
  el: '#style',
  data: {
    activeColor: 'red',
  fontSize: 30,
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
  }
})
