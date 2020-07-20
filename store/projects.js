/* eslint-disable */
import gql from 'graphql-tag'

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
      query: gql`
        query getProjects {
          user(login: "romeo-folie") {
            repositories(first: 20, privacy: PUBLIC) {
              nodes {
                name
                url
                stargazers {
                  totalCount
                }
                owner {
                  login
                }
                forks {
                  totalCount
                }
                homepageUrl
                description
                repositoryTopics(first: 3) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      `,
      prefetch: true,
    })
    
    const allRepos = response.data.user.repositories.nodes
    const allowedRepoTitles = ['Concert-Python', 'GNPC-Scholarship-Monitor', 'InternshipGhana']
    
    const filteredRepos = allRepos.filter(function(repo) {
      return this.indexOf(repo.name) >= 0
    }, allowedRepoTitles)

    commit(SET_PROJECTS, filteredRepos)
  },
}
