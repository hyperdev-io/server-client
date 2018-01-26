const gql = require("graphql-tag");
const query = gql`
  subscription buckets {
    buckets {
      id
      name
      isLocked
    }
  }
`;

module.exports = wsclient => callback => {
  wsclient.subscribe({ query, variables: {} }).subscribe({
    next: data => callback(data.data.buckets)
  });
};
