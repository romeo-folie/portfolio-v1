<template>
  <aside id="side-nav" class="side-menu">
    <div class="aside-content-wrapper">
      <div class="btn-container">
        <a href="javascript:void(0);" onclick="hideSideNav()">&#120;</a>
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
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <ul class="side-social-media-nav">
        <li>
          <a href="#github">
            <img src="assets/github.svg" alt="github_icon" />
          </a>
        </li>
        <li>
          <a href="#instagram">
            <img src="assets/instagram.svg" alt="instagram_icon" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <img src="assets/twitter.svg" alt="twitter_icon" />
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

<style></style>
