const gql = require("graphql-tag");

module.exports = {
  startInstance: gql`
    mutation startInstance(
      $name: String!
      $appName: String!
      $appVersion: String!
      $parameters: JSON
      $options: Options
    ) {
      startInstance(
        name: $name
        appName: $appName
        appVersion: $appVersion
        parameters: $parameters
        options: $options
      ) {
        id
      }
    }
  `,
  stopInstance: gql`
    mutation stopInstance($name: String!) {
      stopInstance(name: $name) {
        id
        name
      }
    }
  `,
  createOrUpdateApp: gql`
    mutation createOrUpdateApp(
      $name: String!
      $version: String!
      $dockerCompose: String!
      $bigboatCompose: String!
    ) {
      createOrUpdateApp(
        name: $name
        version: $version
        dockerCompose: $dockerCompose
        bigboatCompose: $bigboatCompose
      ) {
        id
        name
        version
        dockerCompose
        bigboatCompose
        tags
      }
    }
  `,
  removeApp: gql`
    mutation removeApp($name: String!, $version: String!) {
      removeApp(name: $name, version: $version)
    }
  `,
  deleteBucket: gql`
    mutation deleteBucket($name: String!) {
      deleteBucket(name: $name)
    }
  `,
  copyBucket: gql`
    mutation copyBucket($sourceName: String!, $destinationName: String!) {
      copyBucket(sourceName: $sourceName, destinationName: $destinationName) {
        id
        name
        isLocked
      }
    }
  `
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tdXRhdGlvbnMuanMiXSwibmFtZXMiOlsiZ3FsIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGFydEluc3RhbmNlIiwic3RvcEluc3RhbmNlIiwiY3JlYXRlT3JVcGRhdGVBcHAiLCJyZW1vdmVBcHAiLCJkZWxldGVCdWNrZXQiLCJjb3B5QnVja2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNQyxRQUFRLGFBQVIsQ0FBWjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxpQkFBZUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBREo7QUFvQmZLLGdCQUFjTCxHQUFJOzs7Ozs7O0dBcEJIO0FBNEJmTSxxQkFBbUJOLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTVCUjtBQWtEZk8sYUFBV1AsR0FBSTs7OztHQWxEQTtBQXVEZlEsZ0JBQWNSLEdBQUk7Ozs7R0F2REg7QUE0RGZTLGNBQVlULEdBQUk7Ozs7Ozs7OztBQTVERCxDQUFqQiIsImZpbGUiOiJtdXRhdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncWwgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdGFydEluc3RhbmNlOiBncWxgXG4gICAgbXV0YXRpb24gc3RhcnRJbnN0YW5jZShcbiAgICAgICRuYW1lOiBTdHJpbmchXG4gICAgICAkYXBwTmFtZTogU3RyaW5nIVxuICAgICAgJGFwcFZlcnNpb246IFN0cmluZyFcbiAgICAgICRwYXJhbWV0ZXJzOiBKU09OXG4gICAgICAkb3B0aW9uczogT3B0aW9uc1xuICAgICkge1xuICAgICAgc3RhcnRJbnN0YW5jZShcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgYXBwTmFtZTogJGFwcE5hbWVcbiAgICAgICAgYXBwVmVyc2lvbjogJGFwcFZlcnNpb25cbiAgICAgICAgcGFyYW1ldGVyczogJHBhcmFtZXRlcnNcbiAgICAgICAgb3B0aW9uczogJG9wdGlvbnNcbiAgICAgICkge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgc3RvcEluc3RhbmNlOiBncWxgXG4gICAgbXV0YXRpb24gc3RvcEluc3RhbmNlKCRuYW1lOiBTdHJpbmchKSB7XG4gICAgICBzdG9wSW5zdGFuY2UobmFtZTogJG5hbWUpIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgY3JlYXRlT3JVcGRhdGVBcHA6IGdxbGBcbiAgICBtdXRhdGlvbiBjcmVhdGVPclVwZGF0ZUFwcChcbiAgICAgICRuYW1lOiBTdHJpbmchXG4gICAgICAkdmVyc2lvbjogU3RyaW5nIVxuICAgICAgJGRvY2tlckNvbXBvc2U6IFN0cmluZyFcbiAgICAgICRiaWdib2F0Q29tcG9zZTogU3RyaW5nIVxuICAgICkge1xuICAgICAgY3JlYXRlT3JVcGRhdGVBcHAoXG4gICAgICAgIG5hbWU6ICRuYW1lXG4gICAgICAgIHZlcnNpb246ICR2ZXJzaW9uXG4gICAgICAgIGRvY2tlckNvbXBvc2U6ICRkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlOiAkYmlnYm9hdENvbXBvc2VcbiAgICAgICkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHZlcnNpb25cbiAgICAgICAgZG9ja2VyQ29tcG9zZVxuICAgICAgICBiaWdib2F0Q29tcG9zZVxuICAgICAgICB0YWdzXG4gICAgICB9XG4gICAgfVxuICBgLFxuICByZW1vdmVBcHA6IGdxbGBcbiAgICBtdXRhdGlvbiByZW1vdmVBcHAoJG5hbWU6IFN0cmluZyEsICR2ZXJzaW9uOiBTdHJpbmchKSB7XG4gICAgICByZW1vdmVBcHAobmFtZTogJG5hbWUsIHZlcnNpb246ICR2ZXJzaW9uKVxuICAgIH1cbiAgYCxcbiAgZGVsZXRlQnVja2V0OiBncWxgXG4gICAgbXV0YXRpb24gZGVsZXRlQnVja2V0KCRuYW1lOiBTdHJpbmchKSB7XG4gICAgICBkZWxldGVCdWNrZXQobmFtZTogJG5hbWUpXG4gICAgfVxuICBgLFxuICBjb3B5QnVja2V0OiBncWxgXG4gICAgbXV0YXRpb24gY29weUJ1Y2tldCgkc291cmNlTmFtZTogU3RyaW5nISwgJGRlc3RpbmF0aW9uTmFtZTogU3RyaW5nISkge1xuICAgICAgY29weUJ1Y2tldChzb3VyY2VOYW1lOiAkc291cmNlTmFtZSwgZGVzdGluYXRpb25OYW1lOiAkZGVzdGluYXRpb25OYW1lKSB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgaXNMb2NrZWRcbiAgICAgIH1cbiAgICB9XG4gIGBcbn07XG4iXX0=