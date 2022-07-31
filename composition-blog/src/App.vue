<template>
  <div>
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>

  <router-view />
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const p = ref(null)
    let name = 'mario'
    let age = 30
    const handleClick = () => {
      console.log('You clicked me')
    }
    return {
      name,
      age,
      handleClick,

    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
