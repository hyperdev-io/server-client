const fetch = require("node-fetch");
const { ApolloClient } = require("apollo-client");
const { HttpLink } = require("apollo-link-http");
const { WebSocketLink } = require("apollo-link-ws");
const { InMemoryCache } = require("apollo-cache-inmemory");

const cache = new InMemoryCache();

module.exports = {
  client: uri => {
    const client = new ApolloClient({
      link: new HttpLink({ uri, fetch }),
      cache
    });
    return {
      instances: require("./instances")(client),
      apps: require("./apps")(client),
      buckets: require("./buckets")(client),
      datastores: require("./datastores")(client),
      resources: require("./resources")(client),
      appstoreapps: require("./appstoreapps")(client),
    };
  },
  subscriptions: (uri, options = { reconnect: true }) => {
    const wsclient = new ApolloClient({
      link: new WebSocketLink({ uri, options }),
      cache
    });
    return {
      instances: require("./subscriptions/instances")(wsclient),
      apps: require("./subscriptions/apps")(wsclient),
      buckets: require("./subscriptions/buckets")(wsclient),
      resources: require("./subscriptions/resources")(wsclient),
    };
  }
};
