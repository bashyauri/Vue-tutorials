<template>
  <div>
    <h1>Home</h1>
    <!-- <input type="text" v-model="search">
    <p>Search term - {{ search }}</p>

    <div v-for="name in matchingNames" :key="name">
      {{ name }}

    </div>
    <button @click="handleClick">Stop watching</button> -->

  </div>

  <router-view />
</template>
<script>
// import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  // setup() {
  //   const search = ref('')
  //   const names = ref(['bashar', 'fatima', 'lukman', 'indo', 'sadiq'])
  //   const stopwatch = watch(search, () => {
  //     console.log('watch function ran')
  //   })
  //   const stopEffect = watchEffect(() => {
  //     console.log('Watch Effect function ran', search.value)
  //   })
  //   const matchingNames = computed(() => {
  //     return names.value.filter((name) => name.includes(search.value))
  //   })
  //   const handleClick = () => {
  //     stopwatch();
  //     stopEffect();

  //   }
  //   return {
  //     names,
  //     search,
  //     matchingNames,
  //     handleClick
  //   }
  // }

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
