export default function ({ $config }) {
  return {
    httpEndpoint: 'https://api.github.com/graphql',
    getAuth: () => `Bearer ${$config.apiToken}`,
  }
}
