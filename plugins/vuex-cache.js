import createVuexCache from 'vuex-cache'

export default function ({ store }) {
  const options = {
    timeout: 2 * 60 * 60 * 1000,
  }

  const setupVuexCache = createVuexCache(options)

  window.onNuxtReady(() => setupVuexCache(store))
}
