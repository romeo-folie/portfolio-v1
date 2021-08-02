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
    <a
      v-if="allProjects.length > limit"
      href="javascript:void(0)"
      class="more-btn"
      @click="loadMorePosts"
    >
      More
      <img src="/arrow-down.svg" alt="arrow-down" />
    </a>
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
  data() {
    return {
      increment: 3,
      limit: 6,
    }
  },
  computed: {
    ...mapState({
      allProjects: (state) => state.projects.projects,
    }),
    projects() {
      const all = this.allProjects
      return all.slice(0, this.limit)
    },
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    getProjects() {
      this.$store.dispatch('projects/fetchProjects')
    },
    loadMorePosts(e) {
      e.preventDefault()

      this.limit = this.limit + this.increment
    },
  },
}
</script>

<style></style>
