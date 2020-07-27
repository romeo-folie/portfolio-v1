<template>
  <section class="blog-list-section">
    <h2 v-show="posts.length">Thoughts</h2>
    <div class="blog-post-wrapper">
      <BlogPost v-for="(post, index) in posts" :key="index" :post="post" />
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
    // this.$nextTick(() => {
    this.getPosts()
    // this.$nuxt.$loading.finish()
    // })
  },
  methods: {
    getPosts() {
      // this.$nuxt.$loading.start()
      this.$store.dispatch('blogposts/fetchBlogPosts')
    },
  },
}
</script>

<style></style>
