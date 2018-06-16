"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  subscription {\n    resources {\n      name\n      lastUpdated\n      ... on ComputeNode {\n        cpu {\n          idle\n          used\n          iowait\n        }\n        memory {\n          total\n          used\n        }\n        disk {\n          total\n          used\n          free\n        }\n      }\n      ... on StorageNode {\n        disk {\n          total\n          used\n          free\n        }\n      }\n    }\n  }\n"], ["\n  subscription {\n    resources {\n      name\n      lastUpdated\n      ... on ComputeNode {\n        cpu {\n          idle\n          used\n          iowait\n        }\n        memory {\n          total\n          used\n        }\n        disk {\n          total\n          used\n          free\n        }\n      }\n      ... on StorageNode {\n        disk {\n          total\n          used\n          free\n        }\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require("graphql-tag");
var query = gql(_templateObject);

module.exports = function (wsclient) {
  return function (callback) {
    wsclient.subscribe({ query: query, variables: {} }).subscribe({
      next: function next(data) {
        console.log(data);callback(data.data.resources);
      }
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL3Jlc291cmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJzdWJzY3JpYmUiLCJ2YXJpYWJsZXMiLCJuZXh0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYWxsYmFjayIsInJlc291cmNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsTUFBTUMsUUFBUSxhQUFSLENBQVo7QUFDQSxJQUFNQyxRQUFRRixHQUFSLGlCQUFOOztBQWdDQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUFBLFNBQVksb0JBQVk7QUFDdkNDLGFBQVNDLFNBQVQsQ0FBbUIsRUFBRUosWUFBRixFQUFTSyxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsWUFBTSxvQkFBUTtBQUFFQyxnQkFBUUMsR0FBUixDQUFZQyxJQUFaLEVBQW1CQyxTQUFTRCxLQUFLQSxJQUFMLENBQVVFLFNBQW5CO0FBQThCO0FBRFosS0FBdkQ7QUFHRCxHQUpnQjtBQUFBLENBQWpCIiwiZmlsZSI6InJlc291cmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdxbCA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTtcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBzdWJzY3JpcHRpb24ge1xuICAgIHJlc291cmNlcyB7XG4gICAgICBuYW1lXG4gICAgICBsYXN0VXBkYXRlZFxuICAgICAgLi4uIG9uIENvbXB1dGVOb2RlIHtcbiAgICAgICAgY3B1IHtcbiAgICAgICAgICBpZGxlXG4gICAgICAgICAgdXNlZFxuICAgICAgICAgIGlvd2FpdFxuICAgICAgICB9XG4gICAgICAgIG1lbW9yeSB7XG4gICAgICAgICAgdG90YWxcbiAgICAgICAgICB1c2VkXG4gICAgICAgIH1cbiAgICAgICAgZGlzayB7XG4gICAgICAgICAgdG90YWxcbiAgICAgICAgICB1c2VkXG4gICAgICAgICAgZnJlZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuLi4gb24gU3RvcmFnZU5vZGUge1xuICAgICAgICBkaXNrIHtcbiAgICAgICAgICB0b3RhbFxuICAgICAgICAgIHVzZWRcbiAgICAgICAgICBmcmVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gd3NjbGllbnQgPT4gY2FsbGJhY2sgPT4ge1xuICB3c2NsaWVudC5zdWJzY3JpYmUoeyBxdWVyeSwgdmFyaWFibGVzOiB7fSB9KS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IGRhdGEgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgY2FsbGJhY2soZGF0YS5kYXRhLnJlc291cmNlcyl9XG4gIH0pO1xufTtcbiJdfQ==