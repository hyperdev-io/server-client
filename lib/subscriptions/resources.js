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
    next: data => {
      console.log(data);callback(data.data.resources);
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL3Jlc291cmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJjYWxsYmFjayIsInN1YnNjcmliZSIsInZhcmlhYmxlcyIsIm5leHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc291cmNlcyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTUMsUUFBUSxhQUFSLENBQVo7QUFDQSxNQUFNQyxRQUFRRixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBbEI7O0FBZ0NBRyxPQUFPQyxPQUFQLEdBQWlCQyxZQUFZQyxZQUFZO0FBQ3ZDRCxXQUFTRSxTQUFULENBQW1CLEVBQUVMLEtBQUYsRUFBU00sV0FBVyxFQUFwQixFQUFuQixFQUE2Q0QsU0FBN0MsQ0FBdUQ7QUFDckRFLFVBQU1DLFFBQVE7QUFBRUMsY0FBUUMsR0FBUixDQUFZRixJQUFaLEVBQW1CSixTQUFTSSxLQUFLQSxJQUFMLENBQVVHLFNBQW5CO0FBQThCO0FBRFosR0FBdkQ7QUFHRCxDQUpEIiwiZmlsZSI6InJlc291cmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdxbCA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTtcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBzdWJzY3JpcHRpb24ge1xuICAgIHJlc291cmNlcyB7XG4gICAgICBuYW1lXG4gICAgICBsYXN0VXBkYXRlZFxuICAgICAgLi4uIG9uIENvbXB1dGVOb2RlIHtcbiAgICAgICAgY3B1IHtcbiAgICAgICAgICBpZGxlXG4gICAgICAgICAgdXNlZFxuICAgICAgICAgIGlvd2FpdFxuICAgICAgICB9XG4gICAgICAgIG1lbW9yeSB7XG4gICAgICAgICAgdG90YWxcbiAgICAgICAgICB1c2VkXG4gICAgICAgIH1cbiAgICAgICAgZGlzayB7XG4gICAgICAgICAgdG90YWxcbiAgICAgICAgICB1c2VkXG4gICAgICAgICAgZnJlZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuLi4gb24gU3RvcmFnZU5vZGUge1xuICAgICAgICBkaXNrIHtcbiAgICAgICAgICB0b3RhbFxuICAgICAgICAgIHVzZWRcbiAgICAgICAgICBmcmVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gd3NjbGllbnQgPT4gY2FsbGJhY2sgPT4ge1xuICB3c2NsaWVudC5zdWJzY3JpYmUoeyBxdWVyeSwgdmFyaWFibGVzOiB7fSB9KS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IGRhdGEgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgY2FsbGJhY2soZGF0YS5kYXRhLnJlc291cmNlcyl9XG4gIH0pO1xufTtcbiJdfQ==