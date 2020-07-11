<template>
  <header id="navbar" class="top-navigation">
    <nav class="navbar">
      <div class="brand">
        <a href="#">
          {rnf}
        </a>
      </div>

      <ul class="navlist">
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#skills">Skills</a></li>
        <li><a class="nav-link" href="#projects">Work</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
      </ul>

      <div class="dropdown-menu">
        <a
          class="dropdown-link"
          onclick="showSideNav()"
          href="javascript:void(0);"
          >&#9776;</a
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style></style>
