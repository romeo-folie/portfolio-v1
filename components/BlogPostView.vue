<!-- eslint-disable -->

<template>
  <section class="post-view">
    <client-only>
    <div class="post-content-wrapper">
      <div class="title-date">
        <h3>{{ post.title }}</h3>
        <span v-if="post.published_at">{{ $moment(post.published_at).format('MMM DD') }}</span>
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
}
</script>

<style></style>
