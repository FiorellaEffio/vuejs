new Vue({
  el:'#vue-app',
  data: {
    name: 'Fiorella',
    website: 'https://thenetninja.co.uk',
    websiteTag: '<a href="https://thenetninja.co.uk">The net ninja TAG</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good '+time+ this.name;
    }
  }
});
