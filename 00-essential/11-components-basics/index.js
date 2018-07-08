new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

// Define a new component called button-counter
Vue.component('button-counter', {
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
  data: function () {
    return {
      count: 0
    }
  },
})

new Vue({ el: '#component-demo' })
new Vue({ el: '#components-demo' })

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

new Vue({
  el: '.vue',
  data: {posts: []},
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})

// EXEMEPL
Vue.component('tab-home', { 
	template: '<div>Home component</div>' 
})
Vue.component('tab-posts', { 
	template: '<div>Posts component</div>' 
})
Vue.component('tab-archive', { 
	template: '<div>Archive component</div>' 
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})
// END EXEMPL