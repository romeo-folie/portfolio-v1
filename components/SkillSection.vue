<template>
  <section
    id="skills"
    class="skill-section"
    data-aos="animate__flipInX"
    data-aos-duration="2000"
  >
    <h2>Skills</h2>
    <p>
      In my current role where I mostly ship code for the web and mobile, here's
      some of the technologies that I work with regularly.
    </p>
    <div class="skill-categories-wrapper">
      <div class="skill-category">
        <h3>Design</h3>
        <input
          class="skill-range"
          min="1"
          max="100"
          value="80"
          type="range"
          disabled
        />
        <ul class="tool-list">
          <li>Adobe XD</li>
          <li>Figma</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Frontend</h3>
        <input
          class="skill-range"
          min="1"
          max="100"
          value="85"
          type="range"
          disabled
        />
        <ul class="tool-list">
          <li>HTML & (S)CSS</li>
          <li>Dart ▹ Flutter</li>
          <li>Typescript ▹ Vue</li>
          <li>Typescript ▹ React</li>
          <li>Typescript ▹ React Native</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Backend</h3>
        <input
          class="skill-range"
          min="1"
          max="100"
          value="90"
          type="range"
          disabled
        />
        <ul class="tool-list">
          <li>Typescript ▹ Node</li>
          <li>PHP ▹ Laravel</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div class="skill-category">
        <h3>Infrastructure</h3>
        <input
          class="skill-range"
          min="1"
          max="100"
          value="90"
          type="range"
          disabled
        />
        <ul class="tool-list">
          <li>Heroku</li>
          <li>Docker</li>
          <li>GCP</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillSection',
}
</script>

<style scoped>
[data-aos] {
  visibility: hidden;
}

[data-aos].animate__animated {
  visibility: visible;
}
</style>
