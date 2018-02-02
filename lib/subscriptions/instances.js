"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  subscription instances {\n    instances {\n      id\n      name\n      app {\n        name\n        version\n      }\n      storageBucket\n      startedBy\n      state\n      desiredState\n      status\n      services {\n        name\n        fqdn\n        ip\n        state\n        errors\n        container {\n          id\n          name\n          created\n          node\n        }\n        ports\n      }\n    }\n  }\n"], ["\n  subscription instances {\n    instances {\n      id\n      name\n      app {\n        name\n        version\n      }\n      storageBucket\n      startedBy\n      state\n      desiredState\n      status\n      services {\n        name\n        fqdn\n        ip\n        state\n        errors\n        container {\n          id\n          name\n          created\n          node\n        }\n        ports\n      }\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require("graphql-tag");
var query = gql(_templateObject);

module.exports = function (wsclient) {
  return function (callback) {
    wsclient.subscribe({ query: query, variables: {} }).subscribe({
      next: function next(data) {
        return callback(data.data.instances);
      }
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2luc3RhbmNlcy5qcyJdLCJuYW1lcyI6WyJncWwiLCJyZXF1aXJlIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwid3NjbGllbnQiLCJzdWJzY3JpYmUiLCJ2YXJpYWJsZXMiLCJuZXh0IiwiY2FsbGJhY2siLCJkYXRhIiwiaW5zdGFuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjtBQUNBLElBQU1DLFFBQVFGLEdBQVIsaUJBQU47O0FBZ0NBRyxPQUFPQyxPQUFQLEdBQWlCO0FBQUEsU0FBWSxvQkFBWTtBQUN2Q0MsYUFBU0MsU0FBVCxDQUFtQixFQUFFSixZQUFGLEVBQVNLLFdBQVcsRUFBcEIsRUFBbkIsRUFBNkNELFNBQTdDLENBQXVEO0FBQ3JERSxZQUFNO0FBQUEsZUFBUUMsU0FBU0MsS0FBS0EsSUFBTCxDQUFVQyxTQUFuQixDQUFSO0FBQUE7QUFEK0MsS0FBdkQ7QUFHRCxHQUpnQjtBQUFBLENBQWpCIiwiZmlsZSI6Imluc3RhbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdxbCA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTtcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxuICBzdWJzY3JpcHRpb24gaW5zdGFuY2VzIHtcbiAgICBpbnN0YW5jZXMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGFwcCB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgfVxuICAgICAgc3RvcmFnZUJ1Y2tldFxuICAgICAgc3RhcnRlZEJ5XG4gICAgICBzdGF0ZVxuICAgICAgZGVzaXJlZFN0YXRlXG4gICAgICBzdGF0dXNcbiAgICAgIHNlcnZpY2VzIHtcbiAgICAgICAgbmFtZVxuICAgICAgICBmcWRuXG4gICAgICAgIGlwXG4gICAgICAgIHN0YXRlXG4gICAgICAgIGVycm9yc1xuICAgICAgICBjb250YWluZXIge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICBub2RlXG4gICAgICAgIH1cbiAgICAgICAgcG9ydHNcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gd3NjbGllbnQgPT4gY2FsbGJhY2sgPT4ge1xuICB3c2NsaWVudC5zdWJzY3JpYmUoeyBxdWVyeSwgdmFyaWFibGVzOiB7fSB9KS5zdWJzY3JpYmUoe1xuICAgIG5leHQ6IGRhdGEgPT4gY2FsbGJhY2soZGF0YS5kYXRhLmluc3RhbmNlcylcbiAgfSk7XG59O1xuIl19