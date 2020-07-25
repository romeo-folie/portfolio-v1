<template>
  <section class="post-view">
    <div class="post-content-wrapper">
      <div class="title-date">
        <h3>{{ post.title }}</h3>
        <span>{{ $moment(post.published_at).format('MMM DD') }}</span>
      </div>

      <img v-if="post.image" :src="imageUrl" :alt="post.image.name" />

      <div class="article-wrapper">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-if="post.content" v-html="$md.render(post.content.toString())"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostView',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      if (this.post.image) {
        return this.$config.strapiBaseUri + this.post.image.url
      }
      return ''
    },
  },
}
</script>

<style></style>
