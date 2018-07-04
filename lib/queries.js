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
        startedBy
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
      }
    }
  `
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLmpzIl0sIm5hbWVzIjpbImdxbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwc1F1ZXJ5IiwiaW5zdGFuY2VzUXVlcnkiLCJzZXJ2aWNlTG9nc1F1ZXJ5IiwiYnVja2V0c1F1ZXJ5IiwiZGF0YVN0b3Jlc1F1ZXJ5IiwicmVzb3VyY2VzUXVlcnkiLCJhcHBzdG9yZUFwcHNRdWVyeSIsImN1cnJlbnRVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU1DLFFBQVEsYUFBUixDQUFaOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVdKLEdBQUk7Ozs7Ozs7Ozs7O0dBREE7QUFhZkssa0JBQWdCTCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FiTDtBQTRDZk0sb0JBQWtCTixHQUFJOzs7Ozs7OztHQTVDUDtBQXFEZk8sZ0JBQWNQLEdBQUk7Ozs7Ozs7O0dBckRIO0FBOERmUSxtQkFBaUJSLEdBQUk7Ozs7Ozs7Ozs7O0dBOUROO0FBMEVmUyxrQkFBZ0JULEdBQUk7Ozs7Ozs7Ozs7O0dBMUVMO0FBc0ZmVSxxQkFBbUJWLEdBQUk7Ozs7Ozs7Ozs7R0F0RlI7QUFpR2ZXLG9CQUFrQlgsR0FBSTs7Ozs7Ozs7O0FBakdQLENBQWpCIiwiZmlsZSI6InF1ZXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBncWwgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBhcHBzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICAgIGRvY2tlckNvbXBvc2VcbiAgICAgICAgYmlnYm9hdENvbXBvc2VcbiAgICAgICAgdGFnc1xuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgaW5zdGFuY2VzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBpbnN0YW5jZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGFwcCB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlQnVja2V0XG4gICAgICAgIHN0YXJ0ZWRCeVxuICAgICAgICBzdGF0ZVxuICAgICAgICBkZXNpcmVkU3RhdGVcbiAgICAgICAgc3RhdHVzXG4gICAgICAgIHNlcnZpY2VzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZnFkblxuICAgICAgICAgIGlwXG4gICAgICAgICAgc3RhdGVcbiAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICBjb250YWluZXIge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgICAgcG9ydHNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgc2VydmljZUxvZ3NRdWVyeTogZ3FsYFxuICAgIHF1ZXJ5IGdldFNlcnZpY2VMb2dzKCRpbnN0YW5jZU5hbWU6IFN0cmluZyEsICRzZXJ2aWNlTmFtZTogU3RyaW5nISkge1xuICAgICAgaW5zdGFuY2VzKG5hbWU6ICRpbnN0YW5jZU5hbWUpIHtcbiAgICAgICAgc2VydmljZXMobmFtZTogJHNlcnZpY2VOYW1lKSB7XG4gICAgICAgICAgbG9nc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgLFxuICBidWNrZXRzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBidWNrZXRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBpc0xvY2tlZFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgZGF0YVN0b3Jlc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgZGF0YXN0b3JlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICB0b3RhbFxuICAgICAgICB1c2VkXG4gICAgICAgIGNyZWF0ZWRBdFxuICAgICAgfVxuICAgIH1cbiAgYCxcbiAgcmVzb3VyY2VzUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICByZXNvdXJjZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGxhc3RDaGVja1xuICAgICAgICBpc1VwXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGRldGFpbHNcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGFwcHN0b3JlQXBwc1F1ZXJ5OiBncWxgXG4gICAge1xuICAgICAgYXBwc3RvcmVBcHBzIHtcbiAgICAgICAgbmFtZVxuICAgICAgICB2ZXJzaW9uXG4gICAgICAgIGltYWdlXG4gICAgICAgIGRvY2tlckNvbXBvc2VcbiAgICAgICAgYmlnYm9hdENvbXBvc2VcbiAgICAgIH1cbiAgICB9XG4gIGAsXG4gIGN1cnJlbnRVc2VyUXVlcnk6IGdxbGBcbiAgICB7XG4gICAgICBjdXJyZW50VXNlciB7XG4gICAgICAgIG5hbWVcbiAgICAgICAgZW1haWxcbiAgICAgICAgcGljdHVyZVxuICAgICAgfVxuICAgIH1cbiAgYFxufTtcbiJdfQ==