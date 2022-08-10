<template>
    <div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="post" class="post">
            <h3>{{ post.title }}</h3>
            <p class="pre">{{ post.body }}</p>
            <div v-for="tag in post.tags" :key="tag">#{{ tag }}</div>
            <button class="btn-delete" @click="handleDelete">Delete</button>


        </div>
        <div v-else>
            <Spinner />

        </div>

    </div>


</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
    props: ['id'],
    components: { Spinner },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        const { post, error, load } = getPost(route.params.id)
        load()
        const handleDelete = async () => {
            await projectFirestore.collection('posts')
                .doc(route.params.id)
                .delete()
            router.push({
                name: "Home"
            })
        }
        return { post, error, handleDelete }

    }
}
</script>


<style scoped>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}

.btn-delete {
    margin: 10px auto;
}
</style>
