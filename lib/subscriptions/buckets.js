"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  subscription buckets {\n    buckets {\n      id\n      name\n      isLocked\n    }\n  }\n"], ["\n  subscription buckets {\n    buckets {\n      id\n      name\n      isLocked\n    }\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require("graphql-tag");
var query = gql(_templateObject);

module.exports = function (wsclient) {
  return function (callback) {
    wsclient.subscribe({ query: query, variables: {} }).subscribe({
      next: function next(data) {
        return callback(data.data.buckets);
      }
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzY3JpcHRpb25zL2J1Y2tldHMuanMiXSwibmFtZXMiOlsiZ3FsIiwicmVxdWlyZSIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIndzY2xpZW50Iiwic3Vic2NyaWJlIiwidmFyaWFibGVzIiwibmV4dCIsImNhbGxiYWNrIiwiZGF0YSIsImJ1Y2tldHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaO0FBQ0EsSUFBTUMsUUFBUUYsR0FBUixpQkFBTjs7QUFVQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUFBLFNBQVksb0JBQVk7QUFDdkNDLGFBQVNDLFNBQVQsQ0FBbUIsRUFBRUosWUFBRixFQUFTSyxXQUFXLEVBQXBCLEVBQW5CLEVBQTZDRCxTQUE3QyxDQUF1RDtBQUNyREUsWUFBTTtBQUFBLGVBQVFDLFNBQVNDLEtBQUtBLElBQUwsQ0FBVUMsT0FBbkIsQ0FBUjtBQUFBO0FBRCtDLEtBQXZEO0FBR0QsR0FKZ0I7QUFBQSxDQUFqQiIsImZpbGUiOiJidWNrZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuY29uc3QgcXVlcnkgPSBncWxgXG4gIHN1YnNjcmlwdGlvbiBidWNrZXRzIHtcbiAgICBidWNrZXRzIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBpc0xvY2tlZFxuICAgIH1cbiAgfVxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSB3c2NsaWVudCA9PiBjYWxsYmFjayA9PiB7XG4gIHdzY2xpZW50LnN1YnNjcmliZSh7IHF1ZXJ5LCB2YXJpYWJsZXM6IHt9IH0pLnN1YnNjcmliZSh7XG4gICAgbmV4dDogZGF0YSA9PiBjYWxsYmFjayhkYXRhLmRhdGEuYnVja2V0cylcbiAgfSk7XG59O1xuIl19