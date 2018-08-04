import Vue from 'vue';
import Router from 'vue-router';
import Skills from './component/Skills.vue';
import About from './components/.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills,
    }, {
      path: '/about/:name',
      name: 'about',
      component: About,
    }
  ]
});