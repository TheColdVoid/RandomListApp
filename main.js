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
        onRemoveGo: function(message){
          this.$emit('remove-go',message);
        }
      },
      template: '<div><li>{{go}}</li><button v-on:click="onRemoveGo(go)">x</button></div>'
    }
  },
  methods: {
    addToList: function() {
      this.randomList.push(this.userGo);
      this.userGo = null;
    },
    showResult: function() {
      this.resultList = randomChoice(this.count,this.randomList);
    },
    removeGo: function(message){
      this.randomList = this.randomList.filter(it => it !== message);

      }
    }
  })
