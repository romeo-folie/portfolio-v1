<template>
  <section
    id="projects"
    class="project-section"
    data-aos="animate__bounceIn animate__slow"
  >
    <h2>Some of my work</h2>
    <div class="project-grid">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
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
      projects: (state) => state.projects,
    }),
  },
  mounted() {
    // this.getProjects()
  },
  methods: {
    getProjects() {
      this.$store.dispatch('projects/fetchProjects')
    },
  },
}
</script>

<style></style>
