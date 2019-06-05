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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sIm5hbWVzIjpbImdxbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwc1F1ZXJ5IiwiaW5zdGFuY2VzUXVlcnkiLCJzZXJ2aWNlTG9nc1F1ZXJ5IiwiYnVja2V0c1F1ZXJ5IiwiZGF0YVN0b3Jlc1F1ZXJ5IiwicmVzb3VyY2VzUXVlcnkiLCJhcHBzdG9yZUFwcHNRdWVyeSIsImN1cnJlbnRVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVdKLEdBQUk7Ozs7Ozs7Ozs7O0dBREE7QUFhZkssa0JBQWdCTCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWJMO0FBaURmTSxvQkFBa0JOLEdBQUk7Ozs7Ozs7O0dBakRQO0FBMERmTyxnQkFBY1AsR0FBSTs7Ozs7Ozs7R0ExREg7QUFtRWZRLG1CQUFpQlIsR0FBSTs7Ozs7Ozs7Ozs7R0FuRU47QUErRWZTLGtCQUFnQlQsR0FBSTs7Ozs7Ozs7Ozs7R0EvRUw7QUEyRmZVLHFCQUFtQlYsR0FBSTs7Ozs7Ozs7OztHQTNGUjtBQXNHZlcsb0JBQWtCWCxHQUFJOzs7Ozs7Ozs7O0FBdEdQLENBQWpCIiwiZmlsZSI6InF1ZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncWwgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBhcHBzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICAgIGRvY2tlckNvbXBvc2VcbiAgICAgICAgYmlnYm9hdENvbXBvc2VcbiAgICAgICAgdGFnc1xuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgaW5zdGFuY2VzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBpbnN0YW5jZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGFwcCB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlQnVja2V0XG4gICAgICAgIHN0YXJ0ZWRCeSB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHVzZXJuYW1lXG4gICAgICAgICAgZW1haWxcbiAgICAgICAgICBwaWN0dXJlXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVcbiAgICAgICAgZGVzaXJlZFN0YXRlXG4gICAgICAgIHN0YXR1c1xuICAgICAgICBzZXJ2aWNlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGZxZG5cbiAgICAgICAgICBpcFxuICAgICAgICAgIHN0YXRlXG4gICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgY29udGFpbmVyIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICBub2RlXG4gICAgICAgICAgfVxuICAgICAgICAgIHBvcnRzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHNlcnZpY2VMb2dzUXVlcnk6IGdxbGBcbiAgICBxdWVyeSBnZXRTZXJ2aWNlTG9ncygkaW5zdGFuY2VOYW1lOiBTdHJpbmchLCAkc2VydmljZU5hbWU6IFN0cmluZyEpIHtcbiAgICAgIGluc3RhbmNlcyhuYW1lOiAkaW5zdGFuY2VOYW1lKSB7XG4gICAgICAgIHNlcnZpY2VzKG5hbWU6ICRzZXJ2aWNlTmFtZSkge1xuICAgICAgICAgIGxvZ3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgYnVja2V0c1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYnVja2V0cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgaXNMb2NrZWRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGRhdGFTdG9yZXNRdWVyeTogZ3FsYFxuICAgIHtcbiAgICAgIGRhdGFzdG9yZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgdG90YWxcbiAgICAgICAgdXNlZFxuICAgICAgICBjcmVhdGVkQXRcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIHJlc291cmNlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgcmVzb3VyY2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBsYXN0Q2hlY2tcbiAgICAgICAgaXNVcFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBkZXRhaWxzXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBhcHBzdG9yZUFwcHNRdWVyeTogZ3FsYFxuICAgIHtcbiAgICAgIGFwcHN0b3JlQXBwcyB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgdmVyc2lvblxuICAgICAgICBpbWFnZVxuICAgICAgICBkb2NrZXJDb21wb3NlXG4gICAgICAgIGJpZ2JvYXRDb21wb3NlXG4gICAgICB9XG4gICAgfVxuICBgLFxuICBjdXJyZW50VXNlclF1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgY3VycmVudFVzZXIge1xuICAgICAgICBuYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICAgIHBpY3R1cmVcbiAgICAgICAgcm9sZXNcbiAgICAgIH1cbiAgICB9XG4gIGBcbn07XG4iXX0=