<template>
  <section class="blog-list-section">
    <h2>Thoughts</h2>
    <div class="blog-post-wrapper">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  </section>
</template>

<script>
import BlogPost from './BlogPost'

export default {
  name: 'Blog',
  components: {
    BlogPost,
  },
}
</script>

<style></style>
