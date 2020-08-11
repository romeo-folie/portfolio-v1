/* eslint-disable */
import gql from 'graphql-tag'

export const getBlogPosts = gql`
  query getBlogPosts {
    articles(sort: "published_at:DESC") {
      id
      title
      image {
        name
        url
      }
      content
      published_at
    }
  }
`
export const getPost = gql`
  query getPost($id: ID!) {
    article(id: $id) {
      id
      title
      image {
        name
        url
      }
      content
      published_at
    }
  }
`
