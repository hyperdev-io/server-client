const gql = require("graphql-tag");
const query = gql`
  subscription instances {
    instances {
      id
      name
      app {
        name
        version
      }
      storageBucket
      startedBy
      state
      desiredState
      status
      services {
        name
        fqdn
        ip
        state
        errors
        container {
          id
          name
          created
          node
        }
        ports
      }
    }
  }
`;

module.exports = wsclient => callback => {
  wsclient.subscribe({ query, variables: {} }).subscribe({
    next: data => callback(data.data.instances)
  });
};
