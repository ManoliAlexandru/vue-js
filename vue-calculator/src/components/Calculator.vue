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
  // todo пропс нужно прописывать как объект
  props: ["operator"],
  methods: {
    //todo исправить название
    result(opearator) {
      // todo конкатинирование должно быть через обратные ковычки / шаблонные строки
      // todo сделать и без eval
      return eval(Number(this.x) + opearator + Number(this.y))
    }
  }
}
</script>
