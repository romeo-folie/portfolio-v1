/* eslint-disable */
import { getProjects } from '../queries/projectqueries'

// action types
export const FETCH_PROJECTS = 'fetchProjects'

// mutation types
const SET_PROJECTS = 'setProjects'

export const state = () => ({
  projects: [],
})

export const mutations = {
  [SET_PROJECTS]: (state, payload) => {
    state.projects = payload
  },
}

export const actions = {
  async [FETCH_PROJECTS] ({ commit }) {
    const client = this.app.apolloProvider.defaultClient

    const response = await client.query({
      query: getProjects,
      prefetch: true,
    })
    
    const allRepos = response.data.user.repositories.nodes
    const allowedRepoTitles = ['Concert-Python', 'GNPC-Scholarship-Monitor', 'InternshipGhana', 'portfolio-v1', 'portfolio-v1-bare-bones']
    
    const filteredRepos = allRepos.filter(function(repo) {
      return this.indexOf(repo.name) >= 0
    }, allowedRepoTitles)

    commit(SET_PROJECTS, filteredRepos)
  },
}
