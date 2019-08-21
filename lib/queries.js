const gql = require("graphql-tag");

module.exports = {
  appsQuery: gql`
    {
      apps {
        id
        name
        version
        dockerCompose
        bigboatCompose
        tags
      }
    }
  `,
  instancesQuery: gql`
    {
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
          fqdn {
            public
            private
          }
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
  `,
  serviceLogsQuery: gql`
    query getServiceLogs($instanceName: String!, $serviceName: String!) {
      instances(name: $instanceName) {
        services(name: $serviceName) {
          logs
        }
      }
    }
  `,
  bucketsQuery: gql`
    {
      buckets {
        id
        name
        isLocked
        size
      }
    }
  `,
  dataStoresQuery: gql`
    {
      datastores {
        id
        name
        percentage
        total
        used
        createdAt
      }
    }
  `,
  resourcesQuery: gql`
    {
      resources {
        id
        name
        lastCheck
        isUp
        description
        details
      }
    }
  `,
  appstoreAppsQuery: gql`
    {
      appstoreApps {
        name
        version
        image
        dockerCompose
        bigboatCompose
      }
    }
  `,
  currentUserQuery: gql`
    {
      currentUser {
        name
        email
        picture
        roles
      }
    }
  `
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sIm5hbWVzIjpbImdxbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwc1F1ZXJ5IiwiaW5zdGFuY2VzUXVlcnkiLCJzZXJ2aWNlTG9nc1F1ZXJ5IiwiYnVja2V0c1F1ZXJ5IiwiZGF0YVN0b3Jlc1F1ZXJ5IiwicmVzb3VyY2VzUXVlcnkiLCJhcHBzdG9yZUFwcHNRdWVyeSIsImN1cnJlbnRVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVdKLEdBQUk7Ozs7Ozs7Ozs7O0dBREE7QUFhZkssa0JBQWdCTCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWJMO0FBb0RmTSxvQkFBa0JOLEdBQUk7Ozs7Ozs7O0dBcERQO0FBNkRmTyxnQkFBY1AsR0FBSTs7Ozs7Ozs7O0dBN0RIO0FBdUVmUSxtQkFBaUJSLEdBQUk7Ozs7Ozs7Ozs7O0dBdkVOO0FBbUZmUyxrQkFBZ0JULEdBQUk7Ozs7Ozs7Ozs7O0dBbkZMO0FBK0ZmVSxxQkFBbUJWLEdBQUk7Ozs7Ozs7Ozs7R0EvRlI7QUEwR2ZXLG9CQUFrQlgsR0FBSTs7Ozs7Ozs7OztBQTFHUCxDQUFqQiIsImZpbGUiOiJxdWVyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYXBwcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgICBkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlXG4gICAgICAgIHRhZ3NcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGluc3RhbmNlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgaW5zdGFuY2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBhcHAge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB2ZXJzaW9uXG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZUJ1Y2tldFxuICAgICAgICBzdGFydGVkQnkge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgcGljdHVyZVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlXG4gICAgICAgIGRlc2lyZWRTdGF0ZVxuICAgICAgICBzdGF0dXNcbiAgICAgICAgc2VydmljZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBmcWRuIHtcbiAgICAgICAgICAgIHB1YmxpY1xuICAgICAgICAgICAgcHJpdmF0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpcFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgY29udGFpbmVyIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIHBvcnRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHNlcnZpY2VMb2dzUXVlcnk6IGdxbGBcbiAgICBxdWVyeSBnZXRTZXJ2aWNlTG9ncygkaW5zdGFuY2VOYW1lOiBTdHJpbmchLCAkc2VydmljZU5hbWU6IFN0cmluZyEpIHtcbiAgICAgIGluc3RhbmNlcyhuYW1lOiAkaW5zdGFuY2VOYW1lKSB7XG4gICAgICAgIHNlcnZpY2VzKG5hbWU6ICRzZXJ2aWNlTmFtZSkge1xuICAgICAgICAgIGxvZ3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgYnVja2V0c1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYnVja2V0cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgaXNMb2NrZWRcbiAgICAgICAgc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgZGF0YVN0b3Jlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgZGF0YXN0b3JlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICB0b3RhbFxuICAgICAgICB1c2VkXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgcmVzb3VyY2VzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICByZXNvdXJjZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGxhc3RDaGVja1xuICAgICAgICBpc1VwXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGRldGFpbHNcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGFwcHN0b3JlQXBwc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYXBwc3RvcmVBcHBzIHtcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICAgIGltYWdlXG4gICAgICAgIGRvY2tlckNvbXBvc2VcbiAgICAgICAgYmlnYm9hdENvbXBvc2VcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGN1cnJlbnRVc2VyUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBjdXJyZW50VXNlciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgZW1haWxcbiAgICAgICAgcGljdHVyZVxuICAgICAgICByb2xlc1xuICAgICAgfVxuICAgIH1cbiAgYFxufTtcbiJdfQ==