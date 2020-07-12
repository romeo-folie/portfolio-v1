<template>
  <div>
    <IntroSection />
    <AboutSection />
    <SkillSection />
    <ProjectSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection'
import AboutSection from '@/components/AboutSection'
import SkillSection from '@/components/SkillSection'
import ProjectSection from '@/components/ProjectSection'
import ContactSection from '@/components/ContactSection'

export default {
  components: {
    IntroSection,
    AboutSection,
    SkillSection,
    ProjectSection,
    ContactSection,
  },
}
</script>

<style></style>
