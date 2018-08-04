const POMODOR_STATES = {
  WORK: 'work',
  REST: 'rest'
};

const STATES = {
  STARTED: 'started',
  STOPPED: 'stopped',
  PAUSED: 'paused',
}

const WORKING_TIME_LENGTH_IN_MINUTES = 1;
const RESTING_TIME_LENGTH_IN_MINUTES = 5;

new Vue({
  el: '#app',
  data: {
    state: STATES.STOPPED,
    minute: WORKING_TIME_LENGTH_IN_MINUTES,
    second: 0,
    pomodoroState: POMODOR_STATES.WORK,
    timestamp: 0,
  },
  computed: {
    title: function() {
      return this.pomodoroState === POMODOR_STATES.WORK ? 'Work!' : 'Rest!';
    },
    min: function() {
      return this.minute < 10 ? '0' + this.minute : this.minute;  
    },
    sec: function() {
      return this.second < 10 ? '0' + this.second : this.second;  
    },
    catImgSrc: function() {
      return 'http://thecatapi.com/api/images/get?type=gif&size=med&ts=' + this.timestamp;
    },
  },
  methods: {
    start: function() {
      this.state = STATES.STARTED;
      this._tick();
      this.interval = setInterval(this._tick, 1000);
    },
    pause: function() {
      this.state = STATES.PAUSED;
      clearInterval(this.interval);
    },
    stop: function() {
      this.state = STATES.STOPPED;
      clearInterval(this.interval);
      this.pomodoroState = POMODOR_STATES.WORK;
      this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
      this.second = 0;
    },

    _tick: function() {
      if (this.second % 10 === 0) {
        this.timestamp = new Date().getTime();
      }
      if (this.second !== 0) {
        this.second--;
        return;
      }
      if (this.minute !== 0) {
        this.minute--;
        this.second = 59;
        return;
      }
      this.pomodoroState = this.pomodoroState === POMODOR_STATES.WORK ? POMODOR_STATES.REST : POMODOR_STATES.WORK;
      this.minute = this.pomodoroState === POMODOR_STATES.WORK ? WORKING_TIME_LENGTH_IN_MINUTES : RESTING_TIME_LENGTH_IN_MINUTES;
    }
  }
})