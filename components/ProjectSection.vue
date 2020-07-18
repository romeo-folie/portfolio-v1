<template>
  <section id="projects" class="project-section">
    <h2>Some of my work</h2>
    <div class="project-grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :repo="project"
      ></ProjectCard>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProjectCard from './ProjectCard'

export default {
  name: 'ProjectSection',
  components: {
    ProjectCard,
  },
  computed: {
    ...mapState({
      projects: (state) => state.projects.projects,
    }),
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    getProjects() {
      this.$store.dispatch('projects/fetchProjects')
    },
  },
}
</script>

<style></style>
