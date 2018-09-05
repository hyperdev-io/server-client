const fetch = require("node-fetch");
const { ApolloClient } = require("apollo-client");
const { HttpLink } = require("apollo-link-http");
const { setContext } = require('apollo-link-context');
const { WebSocketLink } = require("apollo-link-ws");
const { onError } = require("apollo-link-error");
const {
  InMemoryCache,
  IntrospectionFragmentMatcher
} = require("apollo-cache-inmemory");
const introspectionQueryResultData = require("./fragmentTypes.json");

// Refer to https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher
// on how to obtain the fragmentTypes data 
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
const cache = new InMemoryCache({ fragmentMatcher });

const authLink = token => setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const errorLink = ({onUserError, onNetworkError}) => onError(error => {
 if(error.networkError && onNetworkError){
   onNetworkError(error.networkError);
 } else if(error.graphQLErrors && onUserError) {
   error.graphQLErrors.forEach(onUserError);
 }
});

module.exports = {
  client: (uri, opts = {}) => {
    const client = new ApolloClient({
      link: errorLink(opts).concat(authLink(opts.token).concat(new HttpLink({ uri, fetch }))),
      cache
    });
    return {
      instances: require("./instances")(client),
      apps: require("./apps")(client),
      buckets: require("./buckets")(client),
      datastores: require("./datastores")(client),
      resources: require("./resources")(client),
      appstoreapps: require("./appstoreapps")(client),
      currentUser: require("./current-user")(client)
    };
  },
  subscriptions: (uri, token, options = { reconnect: true }, webSocketImpl) => {
    options.connectionParams = { token }
    const wsclient = new ApolloClient({
      link: new WebSocketLink({ uri, options, webSocketImpl }),
      cache,
    });
    return {
      instances: require("./subscriptions/instances")(wsclient),
      apps: require("./subscriptions/apps")(wsclient),
      buckets: require("./subscriptions/buckets")(wsclient),
      resources: require("./subscriptions/resources")(wsclient)
    };
  }
};
