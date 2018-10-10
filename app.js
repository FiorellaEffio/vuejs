new Vue({
  el:'#vue-app',
  data: {
    name: 'Fiorella',
    website: 'https://thenetninja.co.uk'
  },
  methods: {
    greet: function(time) {
      return 'Good '+time+ this.name;
    }
  }
});
