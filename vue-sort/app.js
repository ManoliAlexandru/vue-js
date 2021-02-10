const app = new Vue({
  el: "#app",
  data() {
    return {
      items: [
        {name: "laptop", price: 234},
        {name: "smarthone", price: 3222},
        {name: "smarthone", price: 3222},
        {name: "smarthone", price: 3222},
        {name: "smarthone", price: 3222},
      ],
      selectedLang: ""
    }
  },
  watch: {
    selectedLang () {
      this.printSelectedLang();
    }
  },
  methods: {
    printSelectedLang () {
      console.log(this.selectedLang)
      console.log(1 + 1)
    },
    sort() {
      const qwe = this.items.sort((a,b) => a.price - b.price)
    }
  }
})
