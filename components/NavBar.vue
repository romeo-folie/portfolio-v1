<template>
  <nav class="navbar">
    <div
      class="brand"
      data-aos="animate__fadeInDown animate__delay-1s animate__slower"
    >
      <a href="/"> {rnf} </a>
    </div>

    <ul
      class="navlist"
      data-aos="animate__fadeInDown animate__delay-1s animate__slower"
    >
      <li><nuxt-link class="nav-link" to="/#about">About</nuxt-link></li>
      <li><nuxt-link class="nav-link" to="/#skills">Skills</nuxt-link></li>
      <li><nuxt-link class="nav-link" to="/#projects">Work</nuxt-link></li>
      <li><nuxt-link class="nav-link" to="/#contact">Contact</nuxt-link></li>
      <li><nuxt-link class="nav-link" to="/blog">Blog</nuxt-link></li>
    </ul>

    <div
      class="dropdown-menu"
      data-aos="animate__fadeInDown animate__delay-1s animate__slower"
    >
      <a
        class="dropdown-link"
        onclick="showSideNav()"
        href="javascript:void(0);"
        ><img src="/menu.svg" alt="menu_icon"
      /></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style></style>
