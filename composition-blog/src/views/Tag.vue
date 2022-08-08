<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostList :posts="postWithTag" />
            <tag-cloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />

        </div>
    </div>

</template>

<script>

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
export default {
    components: { PostList, Spinner, TagCloud, Spinner },

    setup() {

        // const tags = ref(posts)
        const route = useRoute()
        const { posts, error, load } = getPosts()
        load()
        const postWithTag = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })
        return {
            posts, error, postWithTag

        }
    }

}
</script>

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}

.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}

.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
</style>