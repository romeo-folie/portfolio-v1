/* eslint-disable */
import gql from 'graphql-tag'

// action types
const FETCH_POSTS = 'fetchBlogPosts'
const FETCH_POST = 'fetchBlogPost'

// mutation types
const SET_POSTS = 'setBlogPosts'
const SET_POST = 'setBlogPost'
const SET_LOADING = 'setLoading'
const CLEAR_POST = 'clearPost'


export const state = () => ({
  posts: [],
  post: {},
  loading: false,
})

export const mutations = {
  [SET_POSTS]: (state, payload) => {
    state.posts = payload
  },
  [SET_POST]: (state, payload) => {
    state.post = payload
  },
  [SET_LOADING]: (state, payload) => {
    state.loading = payload
  },
  [CLEAR_POST]: (state) => {
    state.post = {}
  }
}

export const actions = {
  async [FETCH_POSTS]({ commit }) {
    commit(SET_LOADING, true)
    const strapiClient = this.app.apolloProvider.clients.otherClient

    const response = await strapiClient.query({
      query: gql`
        query getBlogPosts {
          articles (sort: "published_at:DESC") {
            id
            title
            content
            published_at
          }
        }
      `,
      prefetch: true,
    })

    const posts = response.data.articles
    commit(SET_POSTS, posts)
    commit(SET_LOADING, false)
  },

  async [FETCH_POST]({ commit }, id) {
    commit(CLEAR_POST)
    commit(SET_LOADING, true)
    const strapiClient = this.app.apolloProvider.clients.otherClient

    const response = await strapiClient.query({
      query: gql`
        query getPost($id: ID!) {
          article(id: $id) {
            id
            title
            image{
              name
              url
            }
            content
            published_at
          }
        }
      `,
      variables: {
        id,
      },
    })

    const post = response.data.article
    commit(SET_POST, post)
    commit(SET_LOADING, false)
  }
}
