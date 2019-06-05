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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2luc3RhbmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsInZhcmlhYmxlcyIsIm5leHQiLCJkYXRhIiwiaW5zdGFuY2VzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjtBQUNBLE1BQU1DLFFBQVFGLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQWxCOztBQXFDQUcsT0FBT0MsT0FBUCxHQUFpQkMsWUFBWUMsWUFBWTtBQUN2Q0QsV0FBU0UsU0FBVCxDQUFtQixFQUFFTCxLQUFGLEVBQVNNLFdBQVcsRUFBcEIsRUFBbkIsRUFBNkNELFNBQTdDLENBQXVEO0FBQ3JERSxVQUFNQyxRQUFRSixTQUFTSSxLQUFLQSxJQUFMLENBQVVDLFNBQW5CO0FBRHVDLEdBQXZEO0FBR0QsQ0FKRCIsImZpbGUiOiJpbnN0YW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncWwgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7XG5jb25zdCBxdWVyeSA9IGdxbGBcbiAgc3Vic2NyaXB0aW9uIGluc3RhbmNlcyB7XG4gICAgaW5zdGFuY2VzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBhcHAge1xuICAgICAgICBuYW1lXG4gICAgICAgIHZlcnNpb25cbiAgICAgIH1cbiAgICAgIHN0b3JhZ2VCdWNrZXRcbiAgICAgIHN0YXJ0ZWRCeSB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgdXNlcm5hbWVcbiAgICAgICAgZW1haWxcbiAgICAgICAgcGljdHVyZVxuICAgICAgfVxuICAgICAgc3RhdGVcbiAgICAgIGRlc2lyZWRTdGF0ZVxuICAgICAgc3RhdHVzXG4gICAgICBzZXJ2aWNlcyB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgZnFkblxuICAgICAgICBpcFxuICAgICAgICBzdGF0ZVxuICAgICAgICBlcnJvcnNcbiAgICAgICAgY29udGFpbmVyIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgbm9kZVxuICAgICAgICB9XG4gICAgICAgIHBvcnRzXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdzY2xpZW50ID0+IGNhbGxiYWNrID0+IHtcbiAgd3NjbGllbnQuc3Vic2NyaWJlKHsgcXVlcnksIHZhcmlhYmxlczoge30gfSkuc3Vic2NyaWJlKHtcbiAgICBuZXh0OiBkYXRhID0+IGNhbGxiYWNrKGRhdGEuZGF0YS5pbnN0YW5jZXMpXG4gIH0pO1xufTtcbiJdfQ==