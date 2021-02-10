Vue.component("calculate", {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  template: "#calc-template",
  props: ["operator"],
  methods: {
    result(operator) {
      return eval(this.x + operator + this.y)
    //  не применять в домашних условиях, работают профессионалы
    }
  }
})

const app = new Vue({
  el: "#calculator",
})