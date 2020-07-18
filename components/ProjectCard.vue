<template>
  <div class="project-card" data-aos="animate__fadeInUp">
    <div class="project-card-content">
      <div class="project-links">
        <a :href="repo.url" target="_blank"><img src="/github.svg" alt="" /></a>
      </div>
      <h3>{{ repo.name }}</h3>
      <p>
        {{ repo.description }}
      </p>
      <ul class="project-stack">
        <li v-for="tag in repo.repositoryTopics.nodes" :key="tag.topic.name">
          #{{ tag.topic.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
