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
            bio
            avatarUrl
            repositories(first: 30, privacy: PUBLIC) {
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
                repositoryTopics(first: 5) {
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
    })
    commit(SET_PROJECTS, response.data.user.repositories.nodes)
  },
}
