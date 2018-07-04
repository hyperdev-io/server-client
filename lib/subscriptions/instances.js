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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2luc3RhbmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsInZhcmlhYmxlcyIsIm5leHQiLCJkYXRhIiwiaW5zdGFuY2VzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjtBQUNBLE1BQU1DLFFBQVFGLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQjs7QUFnQ0FHLE9BQU9DLE9BQVAsR0FBaUJDLFlBQVlDLFlBQVk7QUFDdkNELFdBQVNFLFNBQVQsQ0FBbUIsRUFBRUwsS0FBRixFQUFTTSxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsVUFBTUMsUUFBUUosU0FBU0ksS0FBS0EsSUFBTCxDQUFVQyxTQUFuQjtBQUR1QyxHQUF2RDtBQUdELENBSkQiLCJmaWxlIjoiaW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBpbnN0YW5jZXMge1xuICAgIGluc3RhbmNlcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXBwIHtcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICB9XG4gICAgICBzdG9yYWdlQnVja2V0XG4gICAgICBzdGFydGVkQnlcbiAgICAgIHN0YXRlXG4gICAgICBkZXNpcmVkU3RhdGVcbiAgICAgIHN0YXR1c1xuICAgICAgc2VydmljZXMge1xuICAgICAgICBuYW1lXG4gICAgICAgIGZxZG5cbiAgICAgICAgaXBcbiAgICAgICAgc3RhdGVcbiAgICAgICAgZXJyb3JzXG4gICAgICAgIGNvbnRhaW5lciB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgY3JlYXRlZFxuICAgICAgICAgIG5vZGVcbiAgICAgICAgfVxuICAgICAgICBwb3J0c1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSB3c2NsaWVudCA9PiBjYWxsYmFjayA9PiB7XG4gIHdzY2xpZW50LnN1YnNjcmliZSh7IHF1ZXJ5LCB2YXJpYWJsZXM6IHt9IH0pLnN1YnNjcmliZSh7XG4gICAgbmV4dDogZGF0YSA9PiBjYWxsYmFjayhkYXRhLmRhdGEuaW5zdGFuY2VzKVxuICB9KTtcbn07XG4iXX0=