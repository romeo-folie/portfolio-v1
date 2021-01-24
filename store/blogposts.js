/* eslint-disable */
import { getBlogPosts, getPost } from '../queries/blogqueries'

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

export const getters = {
  getPostById: (state) => (id) => {
    return state.posts.find((post) => post.id === id)
  },
}

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
  async [FETCH_POSTS]({ commit, state }) {
    if(!state.posts.length){
      commit(SET_LOADING, true)
    }

    const strapiClient = this.app.apolloProvider.clients.otherClient

    const response = await strapiClient.query({
      query: getBlogPosts,
      prefetch: true,
    })

    const posts = response.data.articles
    commit(SET_POSTS, posts)
    commit(SET_LOADING, false)
  },

  async [FETCH_POST]({ commit, getters }, id) {
    commit(CLEAR_POST)
    commit(SET_LOADING, true)

    const strapiClient = this.app.apolloProvider.clients.otherClient
    let post = getters.getPostById(id)

    if(post){
      commit(SET_POST, post)
    } else {
      const response = await strapiClient.query({
        query: getPost,
        variables: {
          id,
        },
        // fetchPolicy: 'cache-and-network',
      })
  
      post = response.data.article
      commit(SET_POST, post)
    }
    commit(SET_LOADING, false)
  }
}


