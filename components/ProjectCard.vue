<template>
  <div class="project-card" data-aos="animate__fadeInUp">
    <div class="project-card-content">
      <div class="project-links">
        <a
          v-if="repo.homepageUrl"
          :href="repo.homepageUrl"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img id="link" src="/link.svg" alt="link" />
        </a>
        <a :href="repo.url" target="_blank" rel="noreferrer noopener"
          ><img src="/github.svg" alt=""
        /></a>
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
