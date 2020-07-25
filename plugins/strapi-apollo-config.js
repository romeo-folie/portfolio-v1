export default function ({ $config }) {
  return {
    httpEndpoint: $config.strapiLiveUri,
  }
}
