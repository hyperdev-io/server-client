"use strict";

var _templateObject = _taggedTemplateLiteral(["\n    mutation startInstance(\n      $name: String!\n      $appName: String!\n      $appVersion: String!\n      $parameters: JSON\n      $options: Options\n    ) {\n      startInstance(\n        name: $name\n        appName: $appName\n        appVersion: $appVersion\n        parameters: $parameters\n        options: $options\n      ) {\n        id\n      }\n    }\n  "], ["\n    mutation startInstance(\n      $name: String!\n      $appName: String!\n      $appVersion: String!\n      $parameters: JSON\n      $options: Options\n    ) {\n      startInstance(\n        name: $name\n        appName: $appName\n        appVersion: $appVersion\n        parameters: $parameters\n        options: $options\n      ) {\n        id\n      }\n    }\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n    mutation stopInstance($name: String!) {\n      stopInstance(name: $name) {\n        id\n        name\n      }\n    }\n  "], ["\n    mutation stopInstance($name: String!) {\n      stopInstance(name: $name) {\n        id\n        name\n      }\n    }\n  "]),
    _templateObject3 = _taggedTemplateLiteral(["\n    mutation createOrUpdateApp(\n      $name: String!\n      $version: String!\n      $dockerCompose: String!\n      $bigboatCompose: String!\n    ) {\n      createOrUpdateApp(\n        name: $name\n        version: $version\n        dockerCompose: $dockerCompose\n        bigboatCompose: $bigboatCompose\n      ) {\n        id\n        name\n        version\n        dockerCompose\n        bigboatCompose\n        tags\n      }\n    }\n  "], ["\n    mutation createOrUpdateApp(\n      $name: String!\n      $version: String!\n      $dockerCompose: String!\n      $bigboatCompose: String!\n    ) {\n      createOrUpdateApp(\n        name: $name\n        version: $version\n        dockerCompose: $dockerCompose\n        bigboatCompose: $bigboatCompose\n      ) {\n        id\n        name\n        version\n        dockerCompose\n        bigboatCompose\n        tags\n      }\n    }\n  "]),
    _templateObject4 = _taggedTemplateLiteral(["\n    mutation removeApp($name: String!, $version: String!) {\n      removeApp(name: $name, version: $version)\n    }\n  "], ["\n    mutation removeApp($name: String!, $version: String!) {\n      removeApp(name: $name, version: $version)\n    }\n  "]),
    _templateObject5 = _taggedTemplateLiteral(["\n    mutation deleteBucket($name: String!) {\n      deleteBucket(name: $name)\n    }\n  "], ["\n    mutation deleteBucket($name: String!) {\n      deleteBucket(name: $name)\n    }\n  "]),
    _templateObject6 = _taggedTemplateLiteral(["\n    mutation copyBucket($sourceName: String!, $destinationName: String!) {\n      copyBucket(sourceName: $sourceName, destinationName: $destinationName) {\n        id\n        name\n        isLocked\n      }\n    }\n  "], ["\n    mutation copyBucket($sourceName: String!, $destinationName: String!) {\n      copyBucket(sourceName: $sourceName, destinationName: $destinationName) {\n        id\n        name\n        isLocked\n      }\n    }\n  "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gql = require("graphql-tag");

module.exports = {
  startInstance: gql(_templateObject),
  stopInstance: gql(_templateObject2),
  createOrUpdateApp: gql(_templateObject3),
  removeApp: gql(_templateObject4),
  deleteBucket: gql(_templateObject5),
  copyBucket: gql(_templateObject6)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsiZ3FsIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGFydEluc3RhbmNlIiwic3RvcEluc3RhbmNlIiwiY3JlYXRlT3JVcGRhdGVBcHAiLCJyZW1vdmVBcHAiLCJkZWxldGVCdWNrZXQiLCJjb3B5QnVja2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGlCQUFlSixHQUFmLGlCQURlO0FBb0JmSyxnQkFBY0wsR0FBZCxrQkFwQmU7QUE0QmZNLHFCQUFtQk4sR0FBbkIsa0JBNUJlO0FBa0RmTyxhQUFXUCxHQUFYLGtCQWxEZTtBQXVEZlEsZ0JBQWNSLEdBQWQsa0JBdkRlO0FBNERmUyxjQUFZVCxHQUFaO0FBNURlLENBQWpCIiwiZmlsZSI6Im11dGF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdxbCA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0YXJ0SW5zdGFuY2U6IGdxbGBcbiAgICBtdXRhdGlvbiBzdGFydEluc3RhbmNlKFxuICAgICAgJG5hbWU6IFN0cmluZyFcbiAgICAgICRhcHBOYW1lOiBTdHJpbmchXG4gICAgICAkYXBwVmVyc2lvbjogU3RyaW5nIVxuICAgICAgJHBhcmFtZXRlcnM6IEpTT05cbiAgICAgICRvcHRpb25zOiBPcHRpb25zXG4gICAgKSB7XG4gICAgICBzdGFydEluc3RhbmNlKFxuICAgICAgICBuYW1lOiAkbmFtZVxuICAgICAgICBhcHBOYW1lOiAkYXBwTmFtZVxuICAgICAgICBhcHBWZXJzaW9uOiAkYXBwVmVyc2lvblxuICAgICAgICBwYXJhbWV0ZXJzOiAkcGFyYW1ldGVyc1xuICAgICAgICBvcHRpb25zOiAkb3B0aW9uc1xuICAgICAgKSB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBzdG9wSW5zdGFuY2U6IGdxbGBcbiAgICBtdXRhdGlvbiBzdG9wSW5zdGFuY2UoJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgIHN0b3BJbnN0YW5jZShuYW1lOiAkbmFtZSkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBjcmVhdGVPclVwZGF0ZUFwcDogZ3FsYFxuICAgIG11dGF0aW9uIGNyZWF0ZU9yVXBkYXRlQXBwKFxuICAgICAgJG5hbWU6IFN0cmluZyFcbiAgICAgICR2ZXJzaW9uOiBTdHJpbmchXG4gICAgICAkZG9ja2VyQ29tcG9zZTogU3RyaW5nIVxuICAgICAgJGJpZ2JvYXRDb21wb3NlOiBTdHJpbmchXG4gICAgKSB7XG4gICAgICBjcmVhdGVPclVwZGF0ZUFwcChcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgdmVyc2lvbjogJHZlcnNpb25cbiAgICAgICAgZG9ja2VyQ29tcG9zZTogJGRvY2tlckNvbXBvc2VcbiAgICAgICAgYmlnYm9hdENvbXBvc2U6ICRiaWdib2F0Q29tcG9zZVxuICAgICAgKSB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgICBkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlXG4gICAgICAgIHRhZ3NcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHJlbW92ZUFwcDogZ3FsYFxuICAgIG11dGF0aW9uIHJlbW92ZUFwcCgkbmFtZTogU3RyaW5nISwgJHZlcnNpb246IFN0cmluZyEpIHtcbiAgICAgIHJlbW92ZUFwcChuYW1lOiAkbmFtZSwgdmVyc2lvbjogJHZlcnNpb24pXG4gICAgfVxuICBgLFxuICBkZWxldGVCdWNrZXQ6IGdxbGBcbiAgICBtdXRhdGlvbiBkZWxldGVCdWNrZXQoJG5hbWU6IFN0cmluZyEpIHtcbiAgICAgIGRlbGV0ZUJ1Y2tldChuYW1lOiAkbmFtZSlcbiAgICB9XG4gIGAsXG4gIGNvcHlCdWNrZXQ6IGdxbGBcbiAgICBtdXRhdGlvbiBjb3B5QnVja2V0KCRzb3VyY2VOYW1lOiBTdHJpbmchLCAkZGVzdGluYXRpb25OYW1lOiBTdHJpbmchKSB7XG4gICAgICBjb3B5QnVja2V0KHNvdXJjZU5hbWU6ICRzb3VyY2VOYW1lLCBkZXN0aW5hdGlvbk5hbWU6ICRkZXN0aW5hdGlvbk5hbWUpIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBpc0xvY2tlZFxuICAgICAgfVxuICAgIH1cbiAgYFxufTtcbiJdfQ==