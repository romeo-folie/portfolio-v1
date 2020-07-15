<template>
  <div class="left-bar">
    <ul
      class="social-media-nav"
      data-aos="animate__slideInLeft"
      data-aos-duration="2000"
    >
      <li>
        <a href="#github">
          <img src="/github.svg" alt="github_icon" />
        </a>
      </li>
      <li>
        <a href="#instagram">
          <img src="/instagram.svg" alt="instagram_icon" />
        </a>
      </li>
      <li>
        <a href="#twitter">
          <img src="/twitter.svg" alt="twitter_icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
}
</script>

<style scoped>
[data-aos] {
  opacity: 0;
  visibility: hidden;
  transition-delay: 2.2s;
}
[data-aos].animate__animated {
  opacity: 1;
  visibility: visible;
  pointer-events: inherit;
}
</style>
