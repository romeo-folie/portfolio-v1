export const state = () => ({})
export const mutations = {}
export const actions = {
  nuxtServerInit: async ({ dispatch }, { params }) => {
    if (params.id) {
      await dispatch('blogposts/fetchBlogPost', params.id)
    }
  },
}
