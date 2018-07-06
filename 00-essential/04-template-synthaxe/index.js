Vue.component('todo-item-init', {
  template: '<li>This is a todo</li>'
});

var app = new Vue({
  el: '#app'
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

// --------------------------
// data, access
// --------------------------

var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes*
  alert('coucou');
})

// -------------------------
// lifecycle hook
// ---------------------

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"

// There are also other hooks which will be called at different stages of the instance’s lifecycle, such as mounted, updated, and destroyed. All lifecycle hooks are called with their this context pointing to the Vue instance invoking it.