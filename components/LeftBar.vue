<template>
  <div class="left-bar">
    <ul
      class="social-media-nav"
      data-aos="animate__slideInLeft animate__delay-4s"
      data-aos-duration="2000"
    >
      <li>
        <a
          target="_blank"
          href="https://github.com/romeo-folie"
          rel="noreferrer noopener"
        >
          <img src="/github.svg" alt="github_icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://linkedin.com/in/romeo-nutifafa-folie-464a25160"
          rel="noreferrer noopener"
        >
          <img src="/linkedin.svg" alt="linkedin_icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://vsco.co/nutifafa-folie"
          rel="noreferrer noopener"
        >
          <img src="/vsco.svg" alt="vsco_icon" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://instagram.com/romeo__nf"
          rel="noreferrer noopener"
        >
          <img src="/instagram.svg" alt="instagram_icon" />
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
  transition-delay: 4s;
}
[data-aos].animate__animated {
  opacity: 1;
  pointer-events: inherit;
}
</style>
