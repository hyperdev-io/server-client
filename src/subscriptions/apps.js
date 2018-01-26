const gql = require("graphql-tag");
const query = gql`
  subscription apps {
    apps {
      id
      name
      version
      dockerCompose
      bigboatCompose
      tags
    }
  }
`;

module.exports = wsclient => callback => {
  wsclient.subscribe({ query, variables: {} }).subscribe({
    next: data => callback(data.data.apps)
  });
};
