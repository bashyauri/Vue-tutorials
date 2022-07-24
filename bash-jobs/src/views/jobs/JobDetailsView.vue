<template>
    <div v-if="job">

        <h1>{{ job.title }}</h1>
        <p>The Job Id is {{ id }}</p>
        <p>{{ job.details }}</p>


    </div>
    <div v-else>
        <p>Loading Paragragh</p>

    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return { job: null }
    },
    async mounted() {
        const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        this.job = await response.json();





    }

}
</script>

<style>
</style>