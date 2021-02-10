<template>
  <div id="app">
    <input type="text" v-model="x">
    <button>{{operator}}</button>
    <input type="text" v-model="y">
    <button>{{result(operator)}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "",
      y: ""
    }
  },
  props: ["operator"],
  methods: {
    result(opearator) {
      return eval(Number(this.x) + opearator + Number(this.y))
    }
  }
}
</script>