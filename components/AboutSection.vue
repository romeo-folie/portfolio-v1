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
        Hi my name is Romeo. I'm an Accra based software engineer and I love to
        solve problems and bring ideas to life with code.
        <br />
        <br />
        I spend most of my time building software that runs on the web and
        mobile. My primary aim is to deliver functional, robust, and
        aesthetically pleasing software to my users.
        <br />
        <br />
        Aside programming, I love to workout, cook, and read. I'm always down
        for a chat on anything tech and engineering so, feel free to reach out
        to discuss those or any opportunities you might have for me.
        <br />
        <br />
        I currently work with
        <a
          href="https://bewsys.com"
          class="bewsys-link"
          target="_blank"
          rel="noopener noreferrer"
          >bewsys</a
        >
        where we build custom life changing software solutions.
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
