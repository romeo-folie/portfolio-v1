<!-- eslint-disable -->

<template>
  <section class="post-view">
    <client-only>
    <div class="post-content-wrapper">
      <div class="title-date">
        <h3>{{ post.title }}</h3>
        <span>{{ $moment(post.published_at).format('MMM DD') }}</span>
      </div>

      <img v-if="post.image" :src="post.image.url" :alt="post.image.name" />

      <div class="article-wrapper">
          <article
            v-if="post.content"
            v-html="$md.render(post.content.toString())"
          ></article>
      </div>
    </div>
  </client-only>
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
