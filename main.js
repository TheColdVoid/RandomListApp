var vm = new Vue({
  el: "#randomGo",
  data: {
    randomList: [{ message: "gogogogogogo!" }, { message: "que!" }],
    resultList: [],
    userGo: "",
    id: 1,
    count: null
  },
  methods: {
    addToList: function() {
      this.randomList.push({ message: this.userGo, id: this.id++ });
      this.userGo = null;
    },
    randomChoice: function(count,arrayGo) {
      var arrangedList;
      return arrangedList;//输出随机排好的数组
    },
    showResult: function() {
      this.resultList = randomChoice(this.count,this.randomList);
    }
  }
});
