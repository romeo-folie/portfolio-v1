<template>
  <header
    id="navbar"
    class="top-navigation"
    data-aos="animate__slideInDown animate__slow"
  >
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Header',
  components: {
    NavBar,
  },
}
</script>

<style></style>
