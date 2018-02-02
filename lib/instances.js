"use strict";

var _require = require("./queries"),
    instancesQuery = _require.instancesQuery,
    serviceLogsQuery = _require.serviceLogsQuery;

var _require2 = require("./mutations"),
    startInstance = _require2.startInstance,
    stopInstance = _require2.stopInstance;

module.exports = function (apolloClient) {
  return {
    list: function list() {
      return new Promise(function (resolve, reject) {
        apolloClient.query({ query: instancesQuery }).then(function (res) {
          return resolve(res.data.instances);
        }).catch(reject);
      });
    },
    serviceLogs: function serviceLogs(instanceName, serviceName) {
      return new Promise(function (resolve, reject) {
        var variables = { instanceName: instanceName, serviceName: serviceName };
        apolloClient.query({ query: serviceLogsQuery, variables: variables }).then(function (res) {
          return resolve(res.data.instances[0].services[0].logs);
        }).catch(reject);
      });
    },
    start: function start(name, appName, appVersion) {
      var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return new Promise(function (resolve, reject) {
        var variables = { name: name, appName: appName, appVersion: appVersion, parameters: parameters, options: options };
        apolloClient.mutate({ mutation: startInstance, variables: variables }).then(function (res) {
          return resolve(res.data.startInstance);
        }).catch(reject);
      });
    },
    stop: function stop(name) {
      return new Promise(function (resolve, reject) {
        var variables = { name: name };
        apolloClient.mutate({ mutation: stopInstance, variables: variables }).then(function (res) {
          return resolve(res.data.stopInstance);
        }).catch(reject);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnN0YW5jZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImluc3RhbmNlc1F1ZXJ5Iiwic2VydmljZUxvZ3NRdWVyeSIsInN0YXJ0SW5zdGFuY2UiLCJzdG9wSW5zdGFuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwibGlzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXBvbGxvQ2xpZW50IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImluc3RhbmNlcyIsImNhdGNoIiwic2VydmljZUxvZ3MiLCJpbnN0YW5jZU5hbWUiLCJzZXJ2aWNlTmFtZSIsInZhcmlhYmxlcyIsInNlcnZpY2VzIiwibG9ncyIsInN0YXJ0IiwibmFtZSIsImFwcE5hbWUiLCJhcHBWZXJzaW9uIiwicGFyYW1ldGVycyIsIm9wdGlvbnMiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInN0b3AiXSwibWFwcGluZ3MiOiI7O2VBQTZDQSxRQUFRLFdBQVIsQztJQUFyQ0MsYyxZQUFBQSxjO0lBQWdCQyxnQixZQUFBQSxnQjs7Z0JBQ2dCRixRQUFRLGFBQVIsQztJQUFoQ0csYSxhQUFBQSxhO0lBQWVDLFksYUFBQUEsWTs7QUFFdkJDLE9BQU9DLE9BQVAsR0FBaUI7QUFBQSxTQUFpQjtBQUNoQ0MsVUFBTTtBQUFBLGFBQ0osSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMscUJBQ0dDLEtBREgsQ0FDUyxFQUFFQSxPQUFPWCxjQUFULEVBRFQsRUFFR1ksSUFGSCxDQUVRO0FBQUEsaUJBQU9KLFFBQVFLLElBQUlDLElBQUosQ0FBU0MsU0FBakIsQ0FBUDtBQUFBLFNBRlIsRUFHR0MsS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FMRCxDQURJO0FBQUEsS0FEMEI7QUFRaENRLGlCQUFhLHFCQUFDQyxZQUFELEVBQWVDLFdBQWY7QUFBQSxhQUNYLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0IsWUFBTVcsWUFBWSxFQUFFRiwwQkFBRixFQUFnQkMsd0JBQWhCLEVBQWxCO0FBQ0FULHFCQUNHQyxLQURILENBQ1MsRUFBRUEsT0FBT1YsZ0JBQVQsRUFBMkJtQixvQkFBM0IsRUFEVCxFQUVHUixJQUZILENBRVE7QUFBQSxpQkFBT0osUUFBUUssSUFBSUMsSUFBSixDQUFTQyxTQUFULENBQW1CLENBQW5CLEVBQXNCTSxRQUF0QixDQUErQixDQUEvQixFQUFrQ0MsSUFBMUMsQ0FBUDtBQUFBLFNBRlIsRUFHR04sS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FORCxDQURXO0FBQUEsS0FSbUI7QUFnQmhDYyxXQUFPLGVBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsVUFBaEI7QUFBQSxVQUE0QkMsVUFBNUIsdUVBQXlDLEVBQXpDO0FBQUEsVUFBNkNDLE9BQTdDLHVFQUF1RCxFQUF2RDtBQUFBLGFBQ0wsSUFBSXJCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0IsWUFBTVcsWUFBWSxFQUFFSSxVQUFGLEVBQVFDLGdCQUFSLEVBQWlCQyxzQkFBakIsRUFBNkJDLHNCQUE3QixFQUF5Q0MsZ0JBQXpDLEVBQWxCO0FBQ0FsQixxQkFDR21CLE1BREgsQ0FDVSxFQUFFQyxVQUFVNUIsYUFBWixFQUEyQmtCLG9CQUEzQixFQURWLEVBRUdSLElBRkgsQ0FFUTtBQUFBLGlCQUFPSixRQUFRSyxJQUFJQyxJQUFKLENBQVNaLGFBQWpCLENBQVA7QUFBQSxTQUZSLEVBR0djLEtBSEgsQ0FHU1AsTUFIVDtBQUlELE9BTkQsQ0FESztBQUFBLEtBaEJ5QjtBQXdCaENzQixVQUFNO0FBQUEsYUFDSixJQUFJeEIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQixZQUFNVyxZQUFZLEVBQUVJLFVBQUYsRUFBbEI7QUFDQWQscUJBQ0dtQixNQURILENBQ1UsRUFBRUMsVUFBVTNCLFlBQVosRUFBMEJpQixvQkFBMUIsRUFEVixFQUVHUixJQUZILENBRVE7QUFBQSxpQkFBT0osUUFBUUssSUFBSUMsSUFBSixDQUFTWCxZQUFqQixDQUFQO0FBQUEsU0FGUixFQUdHYSxLQUhILENBR1NQLE1BSFQ7QUFJRCxPQU5ELENBREk7QUFBQTtBQXhCMEIsR0FBakI7QUFBQSxDQUFqQiIsImZpbGUiOiJpbnN0YW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGluc3RhbmNlc1F1ZXJ5LCBzZXJ2aWNlTG9nc1F1ZXJ5IH0gPSByZXF1aXJlKFwiLi9xdWVyaWVzXCIpO1xuY29uc3QgeyBzdGFydEluc3RhbmNlLCBzdG9wSW5zdGFuY2UgfSA9IHJlcXVpcmUoXCIuL211dGF0aW9uc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcG9sbG9DbGllbnQgPT4gKHtcbiAgbGlzdDogKCkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBhcG9sbG9DbGllbnRcbiAgICAgICAgLnF1ZXJ5KHsgcXVlcnk6IGluc3RhbmNlc1F1ZXJ5IH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcy5kYXRhLmluc3RhbmNlcykpXG4gICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pLFxuICBzZXJ2aWNlTG9nczogKGluc3RhbmNlTmFtZSwgc2VydmljZU5hbWUpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVzID0geyBpbnN0YW5jZU5hbWUsIHNlcnZpY2VOYW1lIH07XG4gICAgICBhcG9sbG9DbGllbnRcbiAgICAgICAgLnF1ZXJ5KHsgcXVlcnk6IHNlcnZpY2VMb2dzUXVlcnksIHZhcmlhYmxlcyB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzb2x2ZShyZXMuZGF0YS5pbnN0YW5jZXNbMF0uc2VydmljZXNbMF0ubG9ncykpXG4gICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pLFxuICBzdGFydDogKG5hbWUsIGFwcE5hbWUsIGFwcFZlcnNpb24sIHBhcmFtZXRlcnMgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgbmFtZSwgYXBwTmFtZSwgYXBwVmVyc2lvbiwgcGFyYW1ldGVycywgb3B0aW9ucyB9O1xuICAgICAgYXBvbGxvQ2xpZW50XG4gICAgICAgIC5tdXRhdGUoeyBtdXRhdGlvbjogc3RhcnRJbnN0YW5jZSwgdmFyaWFibGVzIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcy5kYXRhLnN0YXJ0SW5zdGFuY2UpKVxuICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KSxcbiAgc3RvcDogbmFtZSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgbmFtZSB9O1xuICAgICAgYXBvbGxvQ2xpZW50XG4gICAgICAgIC5tdXRhdGUoeyBtdXRhdGlvbjogc3RvcEluc3RhbmNlLCB2YXJpYWJsZXMgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEuc3RvcEluc3RhbmNlKSlcbiAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSlcbn0pO1xuIl19