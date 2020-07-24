<template>
  <aside id="side-nav" class="side-menu">
    <div class="aside-content-wrapper">
      <div class="btn-container">
        <a href="javascript:void(0);" onclick="hideSideNav()"
          ><img src="/x.svg" alt="close_icon"
        /></a>
      </div>

      <nav class="side-navbar">
        <ul class="side-navlist">
          <li>
            <a class="nav-link" href="#about" onclick="hideSideNav()">About</a>
          </li>
          <li>
            <a class="nav-link" href="#skills" onclick="hideSideNav()"
              >Skills</a
            >
          </li>
          <li>
            <a class="nav-link" href="#projects" onclick="hideSideNav()"
              >Work</a
            >
          </li>
          <li>
            <a class="nav-link" href="#contact" onclick="hideSideNav()"
              >Contacts</a
            >
          </li>
          <li>
            <nuxt-link class="nav-link" to="/blog" onclick="hideSideNav()"
              >Blog</nuxt-link
            >
          </li>
        </ul>
      </nav>

      <ul class="side-social-media-nav">
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
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
}
</script>

<style scoped>
[data-aos] {
  visibility: hidden;
}
[data-aos] {
  visibility: visible;
}
</style>
