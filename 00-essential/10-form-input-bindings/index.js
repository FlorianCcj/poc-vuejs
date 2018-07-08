new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    checked: null,
  }
})

new Vue({
  el: '#example-3',
  data: {
    checkedNames: [],
    picked: null,
  }
})

new Vue({
  el: '#haha',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
