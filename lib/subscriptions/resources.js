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
    next: data => callback(data.data.resources)
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL3Jlc291cmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsInZhcmlhYmxlcyIsIm5leHQiLCJkYXRhIiwicmVzb3VyY2VzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjtBQUNBLE1BQU1DLFFBQVFGLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQjs7QUFnQ0FHLE9BQU9DLE9BQVAsR0FBaUJDLFlBQVlDLFlBQVk7QUFDdkNELFdBQVNFLFNBQVQsQ0FBbUIsRUFBRUwsS0FBRixFQUFTTSxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsVUFBTUMsUUFBUUosU0FBU0ksS0FBS0EsSUFBTCxDQUFVQyxTQUFuQjtBQUR1QyxHQUF2RDtBQUdELENBSkQiLCJmaWxlIjoicmVzb3VyY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiB7XG4gICAgcmVzb3VyY2VzIHtcbiAgICAgIG5hbWVcbiAgICAgIGxhc3RVcGRhdGVkXG4gICAgICAuLi4gb24gQ29tcHV0ZU5vZGUge1xuICAgICAgICBjcHUge1xuICAgICAgICAgIGlkbGVcbiAgICAgICAgICB1c2VkXG4gICAgICAgICAgaW93YWl0XG4gICAgICAgIH1cbiAgICAgICAgbWVtb3J5IHtcbiAgICAgICAgICB0b3RhbFxuICAgICAgICAgIHVzZWRcbiAgICAgICAgfVxuICAgICAgICBkaXNrIHtcbiAgICAgICAgICB0b3RhbFxuICAgICAgICAgIHVzZWRcbiAgICAgICAgICBmcmVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC4uLiBvbiBTdG9yYWdlTm9kZSB7XG4gICAgICAgIGRpc2sge1xuICAgICAgICAgIHRvdGFsXG4gICAgICAgICAgdXNlZFxuICAgICAgICAgIGZyZWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSB3c2NsaWVudCA9PiBjYWxsYmFjayA9PiB7XG4gIHdzY2xpZW50LnN1YnNjcmliZSh7IHF1ZXJ5LCB2YXJpYWJsZXM6IHt9IH0pLnN1YnNjcmliZSh7XG4gICAgbmV4dDogZGF0YSA9PiBjYWxsYmFjayhkYXRhLmRhdGEucmVzb3VyY2VzKVxuICB9KTtcbn07XG4iXX0=