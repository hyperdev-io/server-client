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
