<template>
  <section
    id="about"
    class="about-section"
    data-aos="animate__pulse animate__delay-1s"
    data-aos-duration="2000"
    data-aos-mirror="true"
  >
    <div class="about-text">
      <h2>
        About Me
      </h2>
      <p>
        Hi my name is Romeo. I'm a Ghana based freelance software engineer who
        enjoys solving problems and bringing ideas to life with code.
        <br />
        <br />
        I spend most of my time building software that runs on the web and
        mobile with tools like react, vue, and react-native. My primary aim is
        to deliver performant, robust, and aesthetically pleasing software to my
        clients and users.
        <br />
        <br />
        Aside programming, I love music, workouts, and all forms of art. Reach
        out for a chat whenever.
      </p>

      <a
        href="https://drive.google.com/file/d/1SLhvPyl8mjYekDlYQRld2jzqQkKP7PUI/view?usp=sharing"
        target="_blank"
        class="cv-download-btn"
        rel="noopener noreferrer"
      >
        View CV
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

a.bewsys-link {
  color: #fff;
  text-decoration: none;
}
</style>
