new Vue({
  el:'#vue-app',
  data: {
    x:0,
    y:0,
    age:22,
    name: 'Fiorella',
    website: 'https://thenetninja.co.uk',
    websiteTag: '<a href="https://thenetninja.co.uk">The net ninja TAG</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good '+time+ this.name;
    },
    addYear: function(inc) {
      this.age += inc;
    },
    subtractYear: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {

      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert('You clicked');
    },
    logName: function(){
      console.log("you entered your name")
    },
    logAge: function(){
      console.log("you entered your age")
    }
  }
});
