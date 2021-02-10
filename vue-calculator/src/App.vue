<template>
<!--  todo темплейт должен быть между тегом скрипт и тегом стайл-->
  <div id="app">
<!--    todo название компонентов в нижнем регистре + underscore-->
    <Calculatror operator="+" />
    <Calculatror operator="-" />
    <Calculatror operator="*" />
    <Calculatror operator="/" />
  </div>
</template>

<script>
import Calculatror from './components/Calculator.vue'
// todo исправить название

export default {
  name: 'App',
  components: {
    Calculatror
  }
}
</script>

<style>

</style>
