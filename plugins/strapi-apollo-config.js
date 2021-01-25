import { InMemoryCache } from 'apollo-cache-inmemory'

export default function ({ $config }) {
  return {
    httpEndpoint: $config.strapiLiveUri,
    cache: new InMemoryCache(),
  }
}
