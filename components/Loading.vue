<template>
  <div class="loader-wrapper">
    <div v-if="loading" class="sk-wave sk-center">
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

/* eslint-disable */
export default {
  data: () => ({}),
  computed: {
    ...mapState({
      loading: (state) => state.blogposts.loading,  
    }),
  },
}
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
