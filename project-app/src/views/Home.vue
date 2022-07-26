<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />

      </div>

    </div>

  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    SingleProject
  },
  data() {
    return {
      projects: []
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:3000/projects');
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    this.projects = await response.json();

  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      })

    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  }
}
</script>
