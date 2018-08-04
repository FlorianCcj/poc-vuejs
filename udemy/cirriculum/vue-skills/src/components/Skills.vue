<template>
  <div class="hello">
    Skills {{ name }}

    {{ btnState ? 'The button is disabled' : 'The button is active'}}

    <button v-on:click="changeName" v-bind:disabled="btnState"> Change name </button>
    <div class="holder">

      <form @submit.prevent="addSkill">
      <input 
        type="text" 
        placeholder="Enter a skill you have..." 
        v-model="skill"
        v-validate="'min:5'"
        name="skill"
      /> 
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      </transition>
      <input type="checkbox" id="checkbox" v-model="checked" />
      {{ skill }}
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data, index) in skills" :key='index'> 
          {{ index }}. {{ data.skill }}
          <i class="fa fa-minus-cicle" v-on:click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>
      <p v-if="skills.length >= 1"> You have more than 1 skill</p>
      <p v-else> You have less than or equal to 1 skill</p>
    </div>

    <div v-bind:class="{ alert: !showAlert, 'another-class': showClass }"></div>
    <div v-bind:class="alertObject"></div>
    <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, heigth: bgHeigth }"></div>

    <p>These are the skills that you posses.</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: {
  },
  data() {
    return {
      name: 'Coursetro',
      btnState: true,
      skill: '',
      checked: false,
      skills: [
        {skill: 'Vue.js'},
        {skill: 'Frontend Developper'},
      ],
      showAlert: true,
      showClass: true,
      alertObject: {
        alert: true,
        'another-class': true,
      },
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeigth: '30px',
    }
  },
  methods: {
    changeName() {},
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill});
          this.skill = '';
        } else {
          // eslint-disable-next-line
          console.log('Not valid');
        }
      });
      // eslint-disable-next-line
      console.log('This checkbox value is: ' + this.checked);
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped>
</style>
