<template>
  <div class="right-bar">
    <a
      href="mailto:romeofolie1@gmail.com"
      data-aos="animate__slideInRight animate__delay-4s"
      data-aos-duration="2000"
      >romeofolie1@gmail.com</a
    >
  </div>
</template>

<script>
export default {
  name: 'RightBar',
}
</script>

<style scoped>
[data-aos] {
  opacity: 0;
  transition-delay: 4s;
}
[data-aos].animate__animated {
  opacity: 1;
}
</style>
