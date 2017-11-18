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
    invalid: null,
    bpm_list: []
  },
  methods: {
    calc: function() {
      this.bpm_list = []; // 一度リストをリセットする
      if (this.original_bpm.match(/^[0-9]{1,3}$/)) {
        this.invalid = false;
      } else {
        this.invalid = true;
        return;
      }
      for (var mul_num = 0.6; mul_num <= 2.0; mul_num += 0.2) {
        this.bpm_list.push({
          speed: mul_num.toFixed(1) + "倍速",
          bpm: Math.round(this.original_bpm * mul_num),
          done: false
        })
      }
    }
  }
})
