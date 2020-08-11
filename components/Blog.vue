<template>
  <section class="blog-list-section">
    <h2 v-show="posts.length">Thoughts</h2>
    <div class="blog-post-wrapper">
      <BlogPost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BlogPost from './BlogPost'

export default {
  name: 'Blog',
  components: {
    BlogPost,
  },
  computed: {
    ...mapState({
      posts: (state) => state.blogposts.posts,
    }),
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.$store.dispatch('blogposts/fetchBlogPosts')
    },
  },
}
</script>

<style></style>
