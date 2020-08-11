<template>
  <div class="blog-post">
    <div class="date-tl">
      <h3 class="date">
        {{ $moment(post.published_at).format('MMM DD') }}
        <br />
        <span>{{ $moment(post.published_at).format('YYYY') }}</span>
      </h3>
      <div class="vertical-line"></div>
    </div>
    <div class="post-text">
      <h3>
        <nuxt-link :to="{ name: 'blog-id', params: { id: post.id } }">{{
          post.title
        }}</nuxt-link>
      </h3>
      <p>
        {{ post.content }}
      </p>
      <nuxt-link :to="{ name: 'blog-id', params: { id: post.id } }"
        >Read more</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
