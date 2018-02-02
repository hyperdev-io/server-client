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
      buckets: require("./subscriptions/buckets")(wsclient)
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJBcG9sbG9DbGllbnQiLCJIdHRwTGluayIsIldlYlNvY2tldExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY2FjaGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2xpZW50IiwibGluayIsInVyaSIsImluc3RhbmNlcyIsImFwcHMiLCJidWNrZXRzIiwiZGF0YXN0b3JlcyIsInJlc291cmNlcyIsImFwcHN0b3JlYXBwcyIsInN1YnNjcmlwdGlvbnMiLCJvcHRpb25zIiwicmVjb25uZWN0Iiwid3NjbGllbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUUMsUUFBUSxZQUFSLENBQWQ7O2VBQ3lCQSxRQUFRLGVBQVIsQztJQUFqQkMsWSxZQUFBQSxZOztnQkFDYUQsUUFBUSxrQkFBUixDO0lBQWJFLFEsYUFBQUEsUTs7Z0JBQ2tCRixRQUFRLGdCQUFSLEM7SUFBbEJHLGEsYUFBQUEsYTs7Z0JBQ2tCSCxRQUFRLHVCQUFSLEM7SUFBbEJJLGEsYUFBQUEsYTs7QUFFUixJQUFNQyxRQUFRLElBQUlELGFBQUosRUFBZDs7QUFFQUUsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxVQUFRLHFCQUFPO0FBQ2IsUUFBTUEsU0FBUyxJQUFJUCxZQUFKLENBQWlCO0FBQzlCUSxZQUFNLElBQUlQLFFBQUosQ0FBYSxFQUFFUSxRQUFGLEVBQU9YLFlBQVAsRUFBYixDQUR3QjtBQUU5Qk07QUFGOEIsS0FBakIsQ0FBZjtBQUlBLFdBQU87QUFDTE0saUJBQVdYLFFBQVEsYUFBUixFQUF1QlEsTUFBdkIsQ0FETjtBQUVMSSxZQUFNWixRQUFRLFFBQVIsRUFBa0JRLE1BQWxCLENBRkQ7QUFHTEssZUFBU2IsUUFBUSxXQUFSLEVBQXFCUSxNQUFyQixDQUhKO0FBSUxNLGtCQUFZZCxRQUFRLGNBQVIsRUFBd0JRLE1BQXhCLENBSlA7QUFLTE8saUJBQVdmLFFBQVEsYUFBUixFQUF1QlEsTUFBdkIsQ0FMTjtBQU1MUSxvQkFBY2hCLFFBQVEsZ0JBQVIsRUFBMEJRLE1BQTFCO0FBTlQsS0FBUDtBQVFELEdBZGM7QUFlZlMsaUJBQWUsdUJBQUNQLEdBQUQsRUFBd0M7QUFBQSxRQUFsQ1EsT0FBa0MsdUVBQXhCLEVBQUVDLFdBQVcsSUFBYixFQUF3Qjs7QUFDckQsUUFBTUMsV0FBVyxJQUFJbkIsWUFBSixDQUFpQjtBQUNoQ1EsWUFBTSxJQUFJTixhQUFKLENBQWtCLEVBQUVPLFFBQUYsRUFBT1EsZ0JBQVAsRUFBbEIsQ0FEMEI7QUFFaENiO0FBRmdDLEtBQWpCLENBQWpCO0FBSUEsV0FBTztBQUNMTSxpQkFBV1gsUUFBUSwyQkFBUixFQUFxQ29CLFFBQXJDLENBRE47QUFFTFIsWUFBTVosUUFBUSxzQkFBUixFQUFnQ29CLFFBQWhDLENBRkQ7QUFHTFAsZUFBU2IsUUFBUSx5QkFBUixFQUFtQ29CLFFBQW5DO0FBSEosS0FBUDtBQUtEO0FBekJjLENBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmV0Y2ggPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcbmNvbnN0IHsgQXBvbGxvQ2xpZW50IH0gPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTtcbmNvbnN0IHsgSHR0cExpbmsgfSA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1odHRwXCIpO1xuY29uc3QgeyBXZWJTb2NrZXRMaW5rIH0gPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstd3NcIik7XG5jb25zdCB7IEluTWVtb3J5Q2FjaGUgfSA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7XG5cbmNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNsaWVudDogdXJpID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgIGxpbms6IG5ldyBIdHRwTGluayh7IHVyaSwgZmV0Y2ggfSksXG4gICAgICBjYWNoZVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBpbnN0YW5jZXM6IHJlcXVpcmUoXCIuL2luc3RhbmNlc1wiKShjbGllbnQpLFxuICAgICAgYXBwczogcmVxdWlyZShcIi4vYXBwc1wiKShjbGllbnQpLFxuICAgICAgYnVja2V0czogcmVxdWlyZShcIi4vYnVja2V0c1wiKShjbGllbnQpLFxuICAgICAgZGF0YXN0b3JlczogcmVxdWlyZShcIi4vZGF0YXN0b3Jlc1wiKShjbGllbnQpLFxuICAgICAgcmVzb3VyY2VzOiByZXF1aXJlKFwiLi9yZXNvdXJjZXNcIikoY2xpZW50KSxcbiAgICAgIGFwcHN0b3JlYXBwczogcmVxdWlyZShcIi4vYXBwc3RvcmVhcHBzXCIpKGNsaWVudClcbiAgICB9O1xuICB9LFxuICBzdWJzY3JpcHRpb25zOiAodXJpLCBvcHRpb25zID0geyByZWNvbm5lY3Q6IHRydWUgfSkgPT4ge1xuICAgIGNvbnN0IHdzY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICBsaW5rOiBuZXcgV2ViU29ja2V0TGluayh7IHVyaSwgb3B0aW9ucyB9KSxcbiAgICAgIGNhY2hlXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluc3RhbmNlczogcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9pbnN0YW5jZXNcIikod3NjbGllbnQpLFxuICAgICAgYXBwczogcmVxdWlyZShcIi4vc3Vic2NyaXB0aW9ucy9hcHBzXCIpKHdzY2xpZW50KSxcbiAgICAgIGJ1Y2tldHM6IHJlcXVpcmUoXCIuL3N1YnNjcmlwdGlvbnMvYnVja2V0c1wiKSh3c2NsaWVudClcbiAgICB9O1xuICB9XG59O1xuIl19