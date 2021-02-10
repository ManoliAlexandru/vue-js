<template>
  <div id="app">
    <Calculatror operator="+" />
    <Calculatror operator="-" />
    <Calculatror operator="*" />
    <Calculatror operator="/" />
  </div>
</template>

<script>
import Calculatror from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculatror
  }
}
</script>

<style>

</style>
