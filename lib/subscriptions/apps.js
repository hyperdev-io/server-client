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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2FwcHMuanMiXSwibmFtZXMiOlsiZ3FsIiwicmVxdWlyZSIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIndzY2xpZW50IiwiY2FsbGJhY2siLCJzdWJzY3JpYmUiLCJ2YXJpYWJsZXMiLCJuZXh0IiwiZGF0YSIsImFwcHMiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaO0FBQ0EsTUFBTUMsUUFBUUYsR0FBSTs7Ozs7Ozs7Ozs7Q0FBbEI7O0FBYUFHLE9BQU9DLE9BQVAsR0FBaUJDLFlBQVlDLFlBQVk7QUFDdkNELFdBQVNFLFNBQVQsQ0FBbUIsRUFBRUwsS0FBRixFQUFTTSxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsVUFBTUMsUUFBUUosU0FBU0ksS0FBS0EsSUFBTCxDQUFVQyxJQUFuQjtBQUR1QyxHQUF2RDtBQUdELENBSkQiLCJmaWxlIjoiYXBwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdxbCA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTtcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBzdWJzY3JpcHRpb24gYXBwcyB7XG4gICAgYXBwcyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgdmVyc2lvblxuICAgICAgZG9ja2VyQ29tcG9zZVxuICAgICAgYmlnYm9hdENvbXBvc2VcbiAgICAgIHRhZ3NcbiAgICB9XG4gIH1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gd3NjbGllbnQgPT4gY2FsbGJhY2sgPT4ge1xuICB3c2NsaWVudC5zdWJzY3JpYmUoeyBxdWVyeSwgdmFyaWFibGVzOiB7fSB9KS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IGRhdGEgPT4gY2FsbGJhY2soZGF0YS5kYXRhLmFwcHMpXG4gIH0pO1xufTtcbiJdfQ==