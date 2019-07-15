var vm = new Vue({
  el: "#randomGo",
  data: {
    randomList: [],
    resultList: [],
    userGo: "",
    id: 0,
    count: null
  },
  components: {
    'random-list': {
      props: ['go'],
      methods: {
        callDelGo: function(id){
          this.$emit('call-delgo',id);
        }
      },
      template: '<div><li>{{go.message}}</li><button v-on:click="callDelGo(go.id)">x</button></div>'
    }
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
    },
    delGo: function(id){
      this.randomList.splice(id,1);
      var i;
      for(i=0;i<this.randomList.length;i++){     // 遍历重排id值，我也想用map啊嘤嘤嘤
        this.randomList[i].id=i;
      }
    }
  }
});
