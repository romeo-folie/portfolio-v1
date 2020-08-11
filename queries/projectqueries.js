/* eslint-disable */
import gql from 'graphql-tag'

export const getProjects = gql`
  query getProjects {
    user(login: "romeo-folie") {
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
`
