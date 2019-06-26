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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sIm5hbWVzIjpbImdxbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwc1F1ZXJ5IiwiaW5zdGFuY2VzUXVlcnkiLCJzZXJ2aWNlTG9nc1F1ZXJ5IiwiYnVja2V0c1F1ZXJ5IiwiZGF0YVN0b3Jlc1F1ZXJ5IiwicmVzb3VyY2VzUXVlcnkiLCJhcHBzdG9yZUFwcHNRdWVyeSIsImN1cnJlbnRVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVdKLEdBQUk7Ozs7Ozs7Ozs7O0dBREE7QUFhZkssa0JBQWdCTCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWJMO0FBaURmTSxvQkFBa0JOLEdBQUk7Ozs7Ozs7O0dBakRQO0FBMERmTyxnQkFBY1AsR0FBSTs7Ozs7Ozs7O0dBMURIO0FBb0VmUSxtQkFBaUJSLEdBQUk7Ozs7Ozs7Ozs7O0dBcEVOO0FBZ0ZmUyxrQkFBZ0JULEdBQUk7Ozs7Ozs7Ozs7O0dBaEZMO0FBNEZmVSxxQkFBbUJWLEdBQUk7Ozs7Ozs7Ozs7R0E1RlI7QUF1R2ZXLG9CQUFrQlgsR0FBSTs7Ozs7Ozs7OztBQXZHUCxDQUFqQiIsImZpbGUiOiJxdWVyaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ3FsID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYXBwcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgICBkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlXG4gICAgICAgIHRhZ3NcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGluc3RhbmNlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgaW5zdGFuY2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBhcHAge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB2ZXJzaW9uXG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZUJ1Y2tldFxuICAgICAgICBzdGFydGVkQnkge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgcGljdHVyZVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlXG4gICAgICAgIGRlc2lyZWRTdGF0ZVxuICAgICAgICBzdGF0dXNcbiAgICAgICAgc2VydmljZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBmcWRuXG4gICAgICAgICAgaXBcbiAgICAgICAgICBzdGF0ZVxuICAgICAgICAgIGVycm9yc1xuICAgICAgICAgIGNvbnRhaW5lciB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgY3JlYXRlZFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICAgIH1cbiAgICAgICAgICBwb3J0c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgLFxuICBzZXJ2aWNlTG9nc1F1ZXJ5OiBncWxgXG4gICAgcXVlcnkgZ2V0U2VydmljZUxvZ3MoJGluc3RhbmNlTmFtZTogU3RyaW5nISwgJHNlcnZpY2VOYW1lOiBTdHJpbmchKSB7XG4gICAgICBpbnN0YW5jZXMobmFtZTogJGluc3RhbmNlTmFtZSkge1xuICAgICAgICBzZXJ2aWNlcyhuYW1lOiAkc2VydmljZU5hbWUpIHtcbiAgICAgICAgICBsb2dzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGJ1Y2tldHNRdWVyeTogZ3FsYFxuICAgIHtcbiAgICAgIGJ1Y2tldHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGlzTG9ja2VkXG4gICAgICAgIHNpemVcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGRhdGFTdG9yZXNRdWVyeTogZ3FsYFxuICAgIHtcbiAgICAgIGRhdGFzdG9yZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgdG90YWxcbiAgICAgICAgdXNlZFxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHJlc291cmNlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgcmVzb3VyY2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBsYXN0Q2hlY2tcbiAgICAgICAgaXNVcFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBkZXRhaWxzXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBhcHBzdG9yZUFwcHNRdWVyeTogZ3FsYFxuICAgIHtcbiAgICAgIGFwcHN0b3JlQXBwcyB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgICBpbWFnZVxuICAgICAgICBkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBjdXJyZW50VXNlclF1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgY3VycmVudFVzZXIge1xuICAgICAgICBuYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHBpY3R1cmVcbiAgICAgICAgcm9sZXNcbiAgICAgIH1cbiAgICB9XG4gIGBcbn07XG4iXX0=