/* eslint-disable */
import gql from 'graphql-tag'

const repoNames = [
  'LooP',
  'strict-tac-toe',
  'byredo-online-store',
  'clubhouse-clone',
  'creditlocus-landing-nuxt',
  'portfolio-v1',
];

export const getProjects = gql`
  query getProjects {
    user(login: "romeo-folie") {
      login
      ${repoNames
        .map(
          (name, index) => `
            repository${index + 1}: repository(name: "${name}") {
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
          `
        )
        .join('')}
    }
  }
`;