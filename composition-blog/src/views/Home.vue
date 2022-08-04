<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list :posts="posts" />
    </div>
    <div v-else>
      Loading...

    </div>


  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  components: { PostList },
  name: 'Home',
  setup() {

    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let response = await fetch('http://localhost:3000/posts')
        if (!response.ok) {
          throw Error("Not successful")
        }
        posts.value = await response.json();
      } catch (err) {
        error.value = err.message
        console.console.log(error.value);
      }
    }
    load();

    return {
      posts, error
    }
  }
}


</script>
