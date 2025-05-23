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
    });

    const userData = response.data.user;
  
    const repositories = Object.keys(userData)
      .filter(key => key.startsWith('repository'))
      .map(key => userData[key])
      .filter(repo => repo !== null);
    
    commit(SET_PROJECTS, repositories)
  },
}
