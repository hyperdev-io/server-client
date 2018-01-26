const gql = require('graphql-tag')

module.exports = {
    appsQuery: gql`
        {apps {
            id
            name
            version
            dockerCompose
            bigboatCompose
            tags
        }}
    `,
    instancesQuery: gql`
        {instances {
            id
            name
            app {name, version}
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
            logs{n1000}
            container{id, name, created, node}
            ports
            }
        }}
    `,
    bucketsQuery: gql`
        {buckets {
            id
            name
            isLocked
        }}
    `,
    dataStoresQuery: gql`
        {datastores {
            id
            name
            percentage
            total
            used
            createdAt
        }}
    `,
    resourcesQuery: gql`
        {resources {
            id
            name
            lastCheck
            isUp
            description
            details
        }}
    `,
    appstoreAppsQuery: gql`
        {appstoreApps {
            name
            version
            image
            dockerCompose
            bigboatCompose
        }}
        `,
}