const gql = require("graphql-tag");
const query = gql`
  subscription {
    resources {
      name
      lastUpdated
      ... on ComputeNode {
        cpu {
          idle
          used
          iowait
        }
        memory {
          total
          used
        }
        disk {
          total
          used
          free
        }
      }
      ... on StorageNode {
        disk {
          total
          used
          free
        }
      }
    }
  }
`;

module.exports = wsclient => callback => {
  wsclient.subscribe({ query, variables: {} }).subscribe({
    next: data => { console.log(data); callback(data.data.resources)}
  });
};
