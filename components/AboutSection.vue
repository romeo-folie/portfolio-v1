<template>
  <section
    id="about"
    class="about-section"
    data-aos="animate__pulse"
    data-aos-duration="2000"
  >
    <div class="about-text">
      <h2>
        About Me
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        <br />
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <a href="#cv-download" class="cv-download-btn">
        Download CV
      </a>
    </div>

    <div class="about-image"></div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
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
