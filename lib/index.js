var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const fetch = require("node-fetch");
const { ApolloClient } = require("apollo-client");
const { HttpLink } = require("apollo-link-http");
const { setContext } = require('apollo-link-context');
const { WebSocketLink } = require("apollo-link-ws");
const { InMemoryCache } = require("apollo-cache-inmemory");

const cache = new InMemoryCache();

const authLink = token => setContext((_, { headers }) => {
  return {
    headers: _extends({}, headers, {
      authorization: token ? `Bearer ${token}` : ""
    })
  };
});

module.exports = {
  client: (uri, token) => {
    const client = new ApolloClient({
      link: authLink(token).concat(new HttpLink({ uri, fetch })),
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
    options.connectionParams = { token };
    const wsclient = new ApolloClient({
      link: new WebSocketLink({ uri, options, webSocketImpl }),
      cache
    });
    return {
      instances: require("./subscriptions/instances")(wsclient),
      apps: require("./subscriptions/apps")(wsclient),
      buckets: require("./subscriptions/buckets")(wsclient),
      resources: require("./subscriptions/resources")(wsclient)
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJBcG9sbG9DbGllbnQiLCJIdHRwTGluayIsInNldENvbnRleHQiLCJXZWJTb2NrZXRMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImNhY2hlIiwiYXV0aExpbmsiLCJ0b2tlbiIsIl8iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbGllbnQiLCJ1cmkiLCJsaW5rIiwiY29uY2F0IiwiaW5zdGFuY2VzIiwiYXBwcyIsImJ1Y2tldHMiLCJkYXRhc3RvcmVzIiwicmVzb3VyY2VzIiwiYXBwc3RvcmVhcHBzIiwiY3VycmVudFVzZXIiLCJzdWJzY3JpcHRpb25zIiwib3B0aW9ucyIsInJlY29ubmVjdCIsIndlYlNvY2tldEltcGwiLCJjb25uZWN0aW9uUGFyYW1zIiwid3NjbGllbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsUUFBUUMsUUFBUSxZQUFSLENBQWQ7QUFDQSxNQUFNLEVBQUVDLFlBQUYsS0FBbUJELFFBQVEsZUFBUixDQUF6QjtBQUNBLE1BQU0sRUFBRUUsUUFBRixLQUFlRixRQUFRLGtCQUFSLENBQXJCO0FBQ0EsTUFBTSxFQUFFRyxVQUFGLEtBQWlCSCxRQUFRLHFCQUFSLENBQXZCO0FBQ0EsTUFBTSxFQUFFSSxhQUFGLEtBQW9CSixRQUFRLGdCQUFSLENBQTFCO0FBQ0EsTUFBTSxFQUFFSyxhQUFGLEtBQW9CTCxRQUFRLHVCQUFSLENBQTFCOztBQUVBLE1BQU1NLFFBQVEsSUFBSUQsYUFBSixFQUFkOztBQUVBLE1BQU1FLFdBQVdDLFNBQVNMLFdBQVcsQ0FBQ00sQ0FBRCxFQUFJLEVBQUVDLE9BQUYsRUFBSixLQUFvQjtBQUN2RCxTQUFPO0FBQ0xBLDBCQUNLQSxPQURMO0FBRUVDLHFCQUFlSCxRQUFTLFVBQVNBLEtBQU0sRUFBeEIsR0FBNEI7QUFGN0M7QUFESyxHQUFQO0FBTUQsQ0FQeUIsQ0FBMUI7O0FBU0FJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsVUFBUSxDQUFDQyxHQUFELEVBQU1QLEtBQU4sS0FBZ0I7QUFDdEIsVUFBTU0sU0FBUyxJQUFJYixZQUFKLENBQWlCO0FBQzlCZSxZQUFNVCxTQUFTQyxLQUFULEVBQWdCUyxNQUFoQixDQUF1QixJQUFJZixRQUFKLENBQWEsRUFBRWEsR0FBRixFQUFPaEIsS0FBUCxFQUFiLENBQXZCLENBRHdCO0FBRTlCTztBQUY4QixLQUFqQixDQUFmO0FBSUEsV0FBTztBQUNMWSxpQkFBV2xCLFFBQVEsYUFBUixFQUF1QmMsTUFBdkIsQ0FETjtBQUVMSyxZQUFNbkIsUUFBUSxRQUFSLEVBQWtCYyxNQUFsQixDQUZEO0FBR0xNLGVBQVNwQixRQUFRLFdBQVIsRUFBcUJjLE1BQXJCLENBSEo7QUFJTE8sa0JBQVlyQixRQUFRLGNBQVIsRUFBd0JjLE1BQXhCLENBSlA7QUFLTFEsaUJBQVd0QixRQUFRLGFBQVIsRUFBdUJjLE1BQXZCLENBTE47QUFNTFMsb0JBQWN2QixRQUFRLGdCQUFSLEVBQTBCYyxNQUExQixDQU5UO0FBT0xVLG1CQUFheEIsUUFBUSxnQkFBUixFQUEwQmMsTUFBMUI7QUFQUixLQUFQO0FBU0QsR0FmYztBQWdCZlcsaUJBQWUsQ0FBQ1YsR0FBRCxFQUFNUCxLQUFOLEVBQWFrQixVQUFVLEVBQUVDLFdBQVcsSUFBYixFQUF2QixFQUE0Q0MsYUFBNUMsS0FBOEQ7QUFDM0VGLFlBQVFHLGdCQUFSLEdBQTJCLEVBQUVyQixLQUFGLEVBQTNCO0FBQ0EsVUFBTXNCLFdBQVcsSUFBSTdCLFlBQUosQ0FBaUI7QUFDaENlLFlBQU0sSUFBSVosYUFBSixDQUFrQixFQUFFVyxHQUFGLEVBQU9XLE9BQVAsRUFBZ0JFLGFBQWhCLEVBQWxCLENBRDBCO0FBRWhDdEI7QUFGZ0MsS0FBakIsQ0FBakI7QUFJQSxXQUFPO0FBQ0xZLGlCQUFXbEIsUUFBUSwyQkFBUixFQUFxQzhCLFFBQXJDLENBRE47QUFFTFgsWUFBTW5CLFFBQVEsc0JBQVIsRUFBZ0M4QixRQUFoQyxDQUZEO0FBR0xWLGVBQVNwQixRQUFRLHlCQUFSLEVBQW1DOEIsUUFBbkMsQ0FISjtBQUlMUixpQkFBV3RCLFFBQVEsMkJBQVIsRUFBcUM4QixRQUFyQztBQUpOLEtBQVA7QUFNRDtBQTVCYyxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5jb25zdCB7IEFwb2xsb0NsaWVudCB9ID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7XG5jb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTtcbmNvbnN0IHsgc2V0Q29udGV4dCB9ID0gcmVxdWlyZSgnYXBvbGxvLWxpbmstY29udGV4dCcpO1xuY29uc3QgeyBXZWJTb2NrZXRMaW5rIH0gPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstd3NcIik7XG5jb25zdCB7IEluTWVtb3J5Q2FjaGUgfSA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7XG5cbmNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxuY29uc3QgYXV0aExpbmsgPSB0b2tlbiA9PiBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogXCJcIlxuICAgIH1cbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2xpZW50OiAodXJpLCB0b2tlbikgPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgbGluazogYXV0aExpbmsodG9rZW4pLmNvbmNhdChuZXcgSHR0cExpbmsoeyB1cmksIGZldGNoIH0pKSxcbiAgICAgIGNhY2hlXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluc3RhbmNlczogcmVxdWlyZShcIi4vaW5zdGFuY2VzXCIpKGNsaWVudCksXG4gICAgICBhcHBzOiByZXF1aXJlKFwiLi9hcHBzXCIpKGNsaWVudCksXG4gICAgICBidWNrZXRzOiByZXF1aXJlKFwiLi9idWNrZXRzXCIpKGNsaWVudCksXG4gICAgICBkYXRhc3RvcmVzOiByZXF1aXJlKFwiLi9kYXRhc3RvcmVzXCIpKGNsaWVudCksXG4gICAgICByZXNvdXJjZXM6IHJlcXVpcmUoXCIuL3Jlc291cmNlc1wiKShjbGllbnQpLFxuICAgICAgYXBwc3RvcmVhcHBzOiByZXF1aXJlKFwiLi9hcHBzdG9yZWFwcHNcIikoY2xpZW50KSxcbiAgICAgIGN1cnJlbnRVc2VyOiByZXF1aXJlKFwiLi9jdXJyZW50LXVzZXJcIikoY2xpZW50KVxuICAgIH07XG4gIH0sXG4gIHN1YnNjcmlwdGlvbnM6ICh1cmksIHRva2VuLCBvcHRpb25zID0geyByZWNvbm5lY3Q6IHRydWUgfSwgd2ViU29ja2V0SW1wbCkgPT4ge1xuICAgIG9wdGlvbnMuY29ubmVjdGlvblBhcmFtcyA9IHsgdG9rZW4gfVxuICAgIGNvbnN0IHdzY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBsaW5rOiBuZXcgV2ViU29ja2V0TGluayh7IHVyaSwgb3B0aW9ucywgd2ViU29ja2V0SW1wbCB9KSxcbiAgICAgIGNhY2hlLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBpbnN0YW5jZXM6IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvaW5zdGFuY2VzXCIpKHdzY2xpZW50KSxcbiAgICAgIGFwcHM6IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvYXBwc1wiKSh3c2NsaWVudCksXG4gICAgICBidWNrZXRzOiByZXF1aXJlKFwiLi9zdWJzY3JpcHRpb25zL2J1Y2tldHNcIikod3NjbGllbnQpLFxuICAgICAgcmVzb3VyY2VzOiByZXF1aXJlKFwiLi9zdWJzY3JpcHRpb25zL3Jlc291cmNlc1wiKSh3c2NsaWVudClcbiAgICB9O1xuICB9XG59O1xuIl19