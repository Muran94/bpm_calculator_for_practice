Vue.component('bpm-info', {
  props: ['bpm'],
  template: '<tr>'+
  '<td class="checkbox" :class="{ done: bpm.done }" v-on:click="bpm.done = !bpm.done"></td>' +
  '<td :class="{ done: bpm.done }">{{ bpm.speed }}</td>' +
  '<td :class="{ done: bpm.done }">{{ bpm.bpm }}</td>' +
  '</tr>'
})
var vm = new Vue({
  el: "#bpm_calc_app",
  data: {
    original_bpm: null,
    bpm_list: []
  },
  methods: {
    calc: function() {
      this.bpm_list = []; // 一度リストをリセットする
      for (var mul_num = 0.5; mul_num <= 2.0; mul_num += 0.25) {
        this.bpm_list.push({
          speed: mul_num.toFixed(2) + "倍速",
          bpm: Math.round(this.original_bpm * mul_num),
          done: false
        })
      }
    }
  }
})
