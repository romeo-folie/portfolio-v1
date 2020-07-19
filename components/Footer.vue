<template>
  <footer class="footer">
    <div
      class="footer-content-wrapper"
      data-aos="animate__fadeInUp"
      data-aos-anchor-placement="center-bottom"
    >
      <ul id="social-media-nav-bottom" class="social-media-nav-bottom">
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
            href="https://instagram.com/romeo__nf"
            rel="noreferrer noopener"
          >
            <img src="/instagram.svg" alt="instagram_icon" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/rxnf_"
            rel="noreferrer noopener"
          >
            <img src="/twitter.svg" alt="twitter_icon" />
          </a>
        </li>
      </ul>
      <h3>
        &#169; Romeo Nutifafa Folie - 2020
      </h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
[data-aos] {
  visibility: hidden;
}

[data-aos].animate__animated {
  visibility: visible;
}
</style>
