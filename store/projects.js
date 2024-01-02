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
  async [FETCH_PROJECTS]({ commit }) {
    const client = this.app.apolloProvider.defaultClient

    const response = await client.query({
      query: getProjects,
      prefetch: true,
    })

    console.log('RESPONSE ', response);

    const allRepos = response.data.user.repositories.nodes
    const allowedRepoTitles = [
      'url-shortener',
      'node-react-chat',
      'formpl-template-search',
      'clubhouse-clone',
      'creditlocus-landing-nuxt',
      'creditlocus-landing-barebones',
      'byredo-online-store',
      'Concert-Python',
      'GNPC-Scholarship-Monitor',
      'InternshipGhana',
      'portfolio-v1',
      'portfolio-v1-bare-bones',
      'incsub',
    ]

    const filteredRepos = allRepos.filter(function (repo) {
      return this.indexOf(repo.name) >= 0
    }, allowedRepoTitles)

    commit(SET_PROJECTS, filteredRepos.reverse())
  },
}
