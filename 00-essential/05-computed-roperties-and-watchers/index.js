var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter will be cached until no change
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    }
  },
  methods: {
    reverseMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
});

console.log(vm.reversedMessage); // => 'olleH'
vm.message = 'Goodbye';
console.log(vm.reversedMessage); // => 'eybdooG'

// computed vs watched

var vm1 = new Vue({
  el: '#demoWatch',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

var vm2 = new Vue({
  el: '#demoComputed',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})
