"use strict";

var fetch = require("node-fetch");

var _require = require("apollo-client"),
    ApolloClient = _require.ApolloClient;

var _require2 = require("apollo-link-http"),
    HttpLink = _require2.HttpLink;

var _require3 = require("apollo-link-ws"),
    WebSocketLink = _require3.WebSocketLink;

var _require4 = require("apollo-cache-inmemory"),
    InMemoryCache = _require4.InMemoryCache;

var cache = new InMemoryCache();

module.exports = {
  client: function client(uri) {
    var client = new ApolloClient({
      link: new HttpLink({ uri: uri, fetch: fetch }),
      cache: cache
    });
    return {
      instances: require("./instances")(client),
      apps: require("./apps")(client),
      buckets: require("./buckets")(client),
      datastores: require("./datastores")(client),
      resources: require("./resources")(client),
      appstoreapps: require("./appstoreapps")(client)
    };
  },
  subscriptions: function subscriptions(uri) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { reconnect: true };

    var wsclient = new ApolloClient({
      link: new WebSocketLink({ uri: uri, options: options }),
      cache: cache
    });
    return {
      instances: require("./subscriptions/instances")(wsclient),
      apps: require("./subscriptions/apps")(wsclient),
      buckets: require("./subscriptions/buckets")(wsclient),
      resources: require("./subscriptions/resources")(wsclient)
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJBcG9sbG9DbGllbnQiLCJIdHRwTGluayIsIldlYlNvY2tldExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY2FjaGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpZW50IiwibGluayIsInVyaSIsImluc3RhbmNlcyIsImFwcHMiLCJidWNrZXRzIiwiZGF0YXN0b3JlcyIsInJlc291cmNlcyIsImFwcHN0b3JlYXBwcyIsInN1YnNjcmlwdGlvbnMiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid3NjbGllbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUUMsUUFBUSxZQUFSLENBQWQ7O2VBQ3lCQSxRQUFRLGVBQVIsQztJQUFqQkMsWSxZQUFBQSxZOztnQkFDYUQsUUFBUSxrQkFBUixDO0lBQWJFLFEsYUFBQUEsUTs7Z0JBQ2tCRixRQUFRLGdCQUFSLEM7SUFBbEJHLGEsYUFBQUEsYTs7Z0JBQ2tCSCxRQUFRLHVCQUFSLEM7SUFBbEJJLGEsYUFBQUEsYTs7QUFFUixJQUFNQyxRQUFRLElBQUlELGFBQUosRUFBZDs7QUFFQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxVQUFRLHFCQUFPO0FBQ2IsUUFBTUEsU0FBUyxJQUFJUCxZQUFKLENBQWlCO0FBQzlCUSxZQUFNLElBQUlQLFFBQUosQ0FBYSxFQUFFUSxRQUFGLEVBQU9YLFlBQVAsRUFBYixDQUR3QjtBQUU5Qk07QUFGOEIsS0FBakIsQ0FBZjtBQUlBLFdBQU87QUFDTE0saUJBQVdYLFFBQVEsYUFBUixFQUF1QlEsTUFBdkIsQ0FETjtBQUVMSSxZQUFNWixRQUFRLFFBQVIsRUFBa0JRLE1BQWxCLENBRkQ7QUFHTEssZUFBU2IsUUFBUSxXQUFSLEVBQXFCUSxNQUFyQixDQUhKO0FBSUxNLGtCQUFZZCxRQUFRLGNBQVIsRUFBd0JRLE1BQXhCLENBSlA7QUFLTE8saUJBQVdmLFFBQVEsYUFBUixFQUF1QlEsTUFBdkIsQ0FMTjtBQU1MUSxvQkFBY2hCLFFBQVEsZ0JBQVIsRUFBMEJRLE1BQTFCO0FBTlQsS0FBUDtBQVFELEdBZGM7QUFlZlMsaUJBQWUsdUJBQUNQLEdBQUQsRUFBd0M7QUFBQSxRQUFsQ1EsT0FBa0MsdUVBQXhCLEVBQUVDLFdBQVcsSUFBYixFQUF3Qjs7QUFDckQsUUFBTUMsV0FBVyxJQUFJbkIsWUFBSixDQUFpQjtBQUNoQ1EsWUFBTSxJQUFJTixhQUFKLENBQWtCLEVBQUVPLFFBQUYsRUFBT1EsZ0JBQVAsRUFBbEIsQ0FEMEI7QUFFaENiO0FBRmdDLEtBQWpCLENBQWpCO0FBSUEsV0FBTztBQUNMTSxpQkFBV1gsUUFBUSwyQkFBUixFQUFxQ29CLFFBQXJDLENBRE47QUFFTFIsWUFBTVosUUFBUSxzQkFBUixFQUFnQ29CLFFBQWhDLENBRkQ7QUFHTFAsZUFBU2IsUUFBUSx5QkFBUixFQUFtQ29CLFFBQW5DLENBSEo7QUFJTEwsaUJBQVdmLFFBQVEsMkJBQVIsRUFBcUNvQixRQUFyQztBQUpOLEtBQVA7QUFNRDtBQTFCYyxDQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5jb25zdCB7IEFwb2xsb0NsaWVudCB9ID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7XG5jb25zdCB7IEh0dHBMaW5rIH0gPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstaHR0cFwiKTtcbmNvbnN0IHsgV2ViU29ja2V0TGluayB9ID0gcmVxdWlyZShcImFwb2xsby1saW5rLXdzXCIpO1xuY29uc3QgeyBJbk1lbW9yeUNhY2hlIH0gPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjbGllbnQ6IHVyaSA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBsaW5rOiBuZXcgSHR0cExpbmsoeyB1cmksIGZldGNoIH0pLFxuICAgICAgY2FjaGVcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFuY2VzOiByZXF1aXJlKFwiLi9pbnN0YW5jZXNcIikoY2xpZW50KSxcbiAgICAgIGFwcHM6IHJlcXVpcmUoXCIuL2FwcHNcIikoY2xpZW50KSxcbiAgICAgIGJ1Y2tldHM6IHJlcXVpcmUoXCIuL2J1Y2tldHNcIikoY2xpZW50KSxcbiAgICAgIGRhdGFzdG9yZXM6IHJlcXVpcmUoXCIuL2RhdGFzdG9yZXNcIikoY2xpZW50KSxcbiAgICAgIHJlc291cmNlczogcmVxdWlyZShcIi4vcmVzb3VyY2VzXCIpKGNsaWVudCksXG4gICAgICBhcHBzdG9yZWFwcHM6IHJlcXVpcmUoXCIuL2FwcHN0b3JlYXBwc1wiKShjbGllbnQpLFxuICAgIH07XG4gIH0sXG4gIHN1YnNjcmlwdGlvbnM6ICh1cmksIG9wdGlvbnMgPSB7IHJlY29ubmVjdDogdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3Qgd3NjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgIGxpbms6IG5ldyBXZWJTb2NrZXRMaW5rKHsgdXJpLCBvcHRpb25zIH0pLFxuICAgICAgY2FjaGVcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5zdGFuY2VzOiByZXF1aXJlKFwiLi9zdWJzY3JpcHRpb25zL2luc3RhbmNlc1wiKSh3c2NsaWVudCksXG4gICAgICBhcHBzOiByZXF1aXJlKFwiLi9zdWJzY3JpcHRpb25zL2FwcHNcIikod3NjbGllbnQpLFxuICAgICAgYnVja2V0czogcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9idWNrZXRzXCIpKHdzY2xpZW50KSxcbiAgICAgIHJlc291cmNlczogcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9yZXNvdXJjZXNcIikod3NjbGllbnQpLFxuICAgIH07XG4gIH1cbn07XG4iXX0=