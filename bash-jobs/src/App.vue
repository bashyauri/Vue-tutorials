<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{
          name: 'about'
        }">About</RouterLink>
        <router-link :to="{
          name: 'jobs'
        }">Jobs</router-link>
      </nav>
    </div>
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </header>


  <router-view />
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'home' })

    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)

    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;

}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;

}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {


  .logo {
    margin: 0 2rem 0 0;
  }



  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
  }
}
</style>
