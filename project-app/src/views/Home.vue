<template>
  <div class="home">
    <FilterNav @filterChanged="current = $event" :current="current" @click="filteredProjects" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />

      </div>

    </div>

  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

// @ is an alias to /src


export default {
  name: 'Home',

  components: {
    SingleProject,
    FilterNav,

  },
  data() {
    return {
      projects: [],
      current: 'all',
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
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if (this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects

    }
  }
}
</script>
