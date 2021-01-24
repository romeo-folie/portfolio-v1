<template>
  <BlogPostView :post="post" />
</template>

<script>
import { mapState } from 'vuex'
import BlogPostView from '@/components/BlogPostView'

export default {
  components: {
    BlogPostView,
  },
  computed: {
    ...mapState({
      post: (state) => state.blogposts.post,
    }),
  },
  mounted() {
    this.getPost()
  },
  methods: {
    getPost() {
      this.$store.dispatch('blogposts/fetchBlogPost', this.$route.params.id)
    },
  },
}
</script>

<style></style>
