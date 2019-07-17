var vm = new Vue({
  el: "#randomGo",
  data: {
    currList: [],
    resultList: [],
    newGo: "",
    id: 0,
    count: 1
  },
  components: {
    'random-list': {
      props: ['go'],
      methods: {
        onRemoveGo: function(message){
          this.$emit('remove-go',message);
        }
      },
      template: '<div><p>{{go}}</p><button v-on:click="onRemoveGo(go)">x</button></div>'
    }
  },
  methods: {
    addToList: function() {
      this.currList.push(this.newGo);
      this.newGo = "";
    },
    randomChoice: function(count,arrayGo) {
      var arrangedList;
      return arrangedList;//输出随机排好的数组
    },
    setResult: function() {
      this.resultList = randomChoice(this.count,this.currList);
    },
    removeGo: function(message){
      this.currList = this.currList.filter(it => it !== message);

      }
    }
  })
