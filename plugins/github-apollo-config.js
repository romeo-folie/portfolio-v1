import { InMemoryCache } from 'apollo-cache-inmemory'

export default function ({ $config }) {
  return {
    cache: new InMemoryCache(),
    httpEndpoint: 'https://api.github.com/graphql',
    getAuth: () => `Bearer ${$config.apiToken}`,
  }
}
