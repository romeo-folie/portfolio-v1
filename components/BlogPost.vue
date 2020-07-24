<template>
  <div class="blog-post">
    <div class="date-tl">
      <h3 class="date">
        JUL 15
        <br />
        <span>2020</span>
      </h3>
      <div class="vertical-line"></div>
    </div>
    <div class="post-text">
      <h3>First attempt at designing a blog</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
        voluptatibus nemo et ipsum, fugit necessitatibus possimus facere iste
        earum ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum, necessitatibus?
      </p>
      <nuxt-link to="/blog/post/1">Read more</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
}
</script>

<style></style>
