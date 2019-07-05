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
      stateful
      startedBy {
        name
        username
        email
        picture
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2luc3RhbmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsInZhcmlhYmxlcyIsIm5leHQiLCJkYXRhIiwiaW5zdGFuY2VzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjtBQUNBLE1BQU1DLFFBQVFGLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFsQjs7QUFzQ0FHLE9BQU9DLE9BQVAsR0FBaUJDLFlBQVlDLFlBQVk7QUFDdkNELFdBQVNFLFNBQVQsQ0FBbUIsRUFBRUwsS0FBRixFQUFTTSxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsVUFBTUMsUUFBUUosU0FBU0ksS0FBS0EsSUFBTCxDQUFVQyxTQUFuQjtBQUR1QyxHQUF2RDtBQUdELENBSkQiLCJmaWxlIjoiaW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBpbnN0YW5jZXMge1xuICAgIGluc3RhbmNlcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgYXBwIHtcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICB9XG4gICAgICBzdG9yYWdlQnVja2V0XG4gICAgICBzdGF0ZWZ1bFxuICAgICAgc3RhcnRlZEJ5IHtcbiAgICAgICAgbmFtZVxuICAgICAgICB1c2VybmFtZVxuICAgICAgICBlbWFpbFxuICAgICAgICBwaWN0dXJlXG4gICAgICB9XG4gICAgICBzdGF0ZVxuICAgICAgZGVzaXJlZFN0YXRlXG4gICAgICBzdGF0dXNcbiAgICAgIHNlcnZpY2VzIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBmcWRuXG4gICAgICAgIGlwXG4gICAgICAgIHN0YXRlXG4gICAgICAgIGVycm9yc1xuICAgICAgICBjb250YWluZXIge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICBub2RlXG4gICAgICAgIH1cbiAgICAgICAgcG9ydHNcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gd3NjbGllbnQgPT4gY2FsbGJhY2sgPT4ge1xuICB3c2NsaWVudC5zdWJzY3JpYmUoeyBxdWVyeSwgdmFyaWFibGVzOiB7fSB9KS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IGRhdGEgPT4gY2FsbGJhY2soZGF0YS5kYXRhLmluc3RhbmNlcylcbiAgfSk7XG59O1xuIl19