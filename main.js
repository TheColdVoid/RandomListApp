class Go {
  constructor(userGo) {
    this.message = userGo;
    this.id = vm.id++;
  }
}
var vm = new Vue({
  el: "#randomGo",
  data: {
    randomList: [{ message: "gogogogogogo!" }, { message: "que!" }],
    userGo: null,
    id: 1
  },
  methods: {
    addToList: function() {
      this.randomList.push(new Go(this.userGo));
      this.userGo = null;
    },
    randomChoice: function() {},
    randomResult: function() {
      // this.randomList = randomChoice();
      alert("hahaXD");
    }
  }
});
