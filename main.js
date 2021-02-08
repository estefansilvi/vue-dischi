new Vue({
  el: '#root',
  data: {
    elencoDischi:[]
  },
mounted() {
  const self = this;
  for (var i = 0; i < 10; i++) {
    axios.get(' https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(response) {
      self.elencoDischi = response.data.response;
    });
  }
}
})
Vue.config.devtools = true
