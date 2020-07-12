<template>
  <div>
    <Header />
    <LeftBar />
    <RightBar />
    <Aside />
    <div class="content-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import LeftBar from '@/components/LeftBar'
import RightBar from '@/components/RightBar'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    LeftBar,
    RightBar,
    Aside,
    Footer,
  },
}
</script>

<style></style>
