<template>
  <div class="home">
    <post-list v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  components: { PostList },
  name: 'Home',
  setup() {
    const showPosts = ref(true)
    const posts = ref([{
      title: 'Welcome to the blog', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sequi doloremque possimus eligendi repudiandae! Molestias recusandae soluta architecto accusamus debitis reiciendis minima vel ad! Ad fugiat ex ab iste exercitationem!', id: 1
    }, {
      title: 'top CSS tips', body: 'lorem ipsum', id: 2
    }
    ])


    return {
      posts, showPosts
    }
  }
}


</script>
