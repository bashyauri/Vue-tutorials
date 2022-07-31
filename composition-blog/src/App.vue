<template>
  <div>
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
  </div>

  <router-view />
</template>
<script>
export default {
  setup() {
    console.log('setup');
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
