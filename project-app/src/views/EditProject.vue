<template>
    <h1>Edit project</h1>
    <form @submit.prevent="handleUpdate">
        <label>Title:</label>
        <input type="text" v-model="title" required />
        <label>Details:</label>
        <textarea v-model="details"></textarea>
        <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: "",
            details: "",
            uri: `http://localhost:3000/projects/${this.id}`,
        }
    },
    async mounted() {
        const response = await fetch(this.uri)
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        this.title = data.title;
        this.details = data.details;


    },
    methods: {
        async handleUpdate() {
            const response = await fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: this.title,
                    details: this.details
                })
            });
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }
            // this.$emit('update', this.project.id)
            this.$router.push('/')

        }
    }

}
</script>

<style>
</style>