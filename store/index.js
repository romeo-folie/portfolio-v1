export const state = () => ({})
export const mutations = {}
export const actions = {
  async nuxtServerInit({ dispatch }, { params }) {
    if (params.id) {
      console.log("id ", params.id)
      await dispatch('blogposts/fetchBlogPost', params.id)
    }
  },
}
