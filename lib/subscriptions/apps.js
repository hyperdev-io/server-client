"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  subscription apps {\n    apps {\n      id\n      name\n      version\n      dockerCompose\n      bigboatCompose\n      tags\n    }\n  }\n"], ["\n  subscription apps {\n    apps {\n      id\n      name\n      version\n      dockerCompose\n      bigboatCompose\n      tags\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require("graphql-tag");
var query = gql(_templateObject);

module.exports = function (wsclient) {
  return function (callback) {
    wsclient.subscribe({ query: query, variables: {} }).subscribe({
      next: function next(data) {
        return callback(data.data.apps);
      }
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2FwcHMuanMiXSwibmFtZXMiOlsiZ3FsIiwicmVxdWlyZSIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIndzY2xpZW50Iiwic3Vic2NyaWJlIiwidmFyaWFibGVzIiwibmV4dCIsImNhbGxiYWNrIiwiZGF0YSIsImFwcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaO0FBQ0EsSUFBTUMsUUFBUUYsR0FBUixpQkFBTjs7QUFhQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUFBLFNBQVksb0JBQVk7QUFDdkNDLGFBQVNDLFNBQVQsQ0FBbUIsRUFBRUosWUFBRixFQUFTSyxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsWUFBTTtBQUFBLGVBQVFDLFNBQVNDLEtBQUtBLElBQUwsQ0FBVUMsSUFBbkIsQ0FBUjtBQUFBO0FBRCtDLEtBQXZEO0FBR0QsR0FKZ0I7QUFBQSxDQUFqQiIsImZpbGUiOiJhcHBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBhcHBzIHtcbiAgICBhcHBzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICB2ZXJzaW9uXG4gICAgICBkb2NrZXJDb21wb3NlXG4gICAgICBiaWdib2F0Q29tcG9zZVxuICAgICAgdGFnc1xuICAgIH1cbiAgfVxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSB3c2NsaWVudCA9PiBjYWxsYmFjayA9PiB7XG4gIHdzY2xpZW50LnN1YnNjcmliZSh7IHF1ZXJ5LCB2YXJpYWJsZXM6IHt9IH0pLnN1YnNjcmliZSh7XG4gICAgbmV4dDogZGF0YSA9PiBjYWxsYmFjayhkYXRhLmRhdGEuYXBwcylcbiAgfSk7XG59O1xuIl19