"use strict";

var _require = require("./queries"),
    appsQuery = _require.appsQuery;

var _require2 = require("./mutations"),
    removeApp = _require2.removeApp,
    createOrUpdateApp = _require2.createOrUpdateApp;

module.exports = function (apolloClient) {
  return {
    list: function list() {
      return new Promise(function (resolve, reject) {
        apolloClient.query({ query: appsQuery }).then(function (res) {
          return resolve(res.data.apps);
        }).catch(reject);
      });
    },
    createOrUpdate: function createOrUpdate(name, version, dockerCompose, bigboatCompose) {
      return new Promise(function (resolve, reject) {
        var variables = { name: name, version: version, dockerCompose: dockerCompose, bigboatCompose: bigboatCompose };
        apolloClient.mutate({ mutation: createOrUpdateApp, variables: variables }).then(function (res) {
          return resolve(res.data.createOrUpdateApp);
        }).catch(reject);
      });
    },
    remove: function remove(name, version) {
      return new Promise(function (resolve, reject) {
        var variables = { name: name, version: version };
        apolloClient.mutate({ mutation: removeApp, variables: variables }).then(function (res) {
          return resolve(res.data.removeApp);
        }).catch(reject);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHBzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhcHBzUXVlcnkiLCJyZW1vdmVBcHAiLCJjcmVhdGVPclVwZGF0ZUFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJsaXN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcG9sbG9DbGllbnQiLCJxdWVyeSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiYXBwcyIsImNhdGNoIiwiY3JlYXRlT3JVcGRhdGUiLCJuYW1lIiwidmVyc2lvbiIsImRvY2tlckNvbXBvc2UiLCJiaWdib2F0Q29tcG9zZSIsInZhcmlhYmxlcyIsIm11dGF0ZSIsIm11dGF0aW9uIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztlQUFzQkEsUUFBUSxXQUFSLEM7SUFBZEMsUyxZQUFBQSxTOztnQkFDaUNELFFBQVEsYUFBUixDO0lBQWpDRSxTLGFBQUFBLFM7SUFBV0MsaUIsYUFBQUEsaUI7O0FBRW5CQyxPQUFPQyxPQUFQLEdBQWlCO0FBQUEsU0FBaUI7QUFDaENDLFVBQU07QUFBQSxhQUNKLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0JDLHFCQUNHQyxLQURILENBQ1MsRUFBRUEsT0FBT1YsU0FBVCxFQURULEVBRUdXLElBRkgsQ0FFUTtBQUFBLGlCQUFPSixRQUFRSyxJQUFJQyxJQUFKLENBQVNDLElBQWpCLENBQVA7QUFBQSxTQUZSLEVBR0dDLEtBSEgsQ0FHU1AsTUFIVDtBQUlELE9BTEQsQ0FESTtBQUFBLEtBRDBCO0FBUWhDUSxvQkFBZ0Isd0JBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsYUFBaEIsRUFBK0JDLGNBQS9CO0FBQUEsYUFDZCxJQUFJZCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CLFlBQU1hLFlBQVksRUFBRUosVUFBRixFQUFRQyxnQkFBUixFQUFpQkMsNEJBQWpCLEVBQWdDQyw4QkFBaEMsRUFBbEI7QUFDQVgscUJBQ0dhLE1BREgsQ0FDVSxFQUFFQyxVQUFVckIsaUJBQVosRUFBK0JtQixvQkFBL0IsRUFEVixFQUVHVixJQUZILENBRVE7QUFBQSxpQkFBT0osUUFBUUssSUFBSUMsSUFBSixDQUFTWCxpQkFBakIsQ0FBUDtBQUFBLFNBRlIsRUFHR2EsS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FORCxDQURjO0FBQUEsS0FSZ0I7QUFnQmhDZ0IsWUFBUSxnQkFBQ1AsSUFBRCxFQUFPQyxPQUFQO0FBQUEsYUFDTixJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQy9CLFlBQU1hLFlBQVksRUFBRUosVUFBRixFQUFRQyxnQkFBUixFQUFsQjtBQUNBVCxxQkFDR2EsTUFESCxDQUNVLEVBQUVDLFVBQVV0QixTQUFaLEVBQXVCb0Isb0JBQXZCLEVBRFYsRUFFR1YsSUFGSCxDQUVRO0FBQUEsaUJBQU9KLFFBQVFLLElBQUlDLElBQUosQ0FBU1osU0FBakIsQ0FBUDtBQUFBLFNBRlIsRUFHR2MsS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FORCxDQURNO0FBQUE7QUFoQndCLEdBQWpCO0FBQUEsQ0FBakIiLCJmaWxlIjoiYXBwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXBwc1F1ZXJ5IH0gPSByZXF1aXJlKFwiLi9xdWVyaWVzXCIpO1xuY29uc3QgeyByZW1vdmVBcHAsIGNyZWF0ZU9yVXBkYXRlQXBwIH0gPSByZXF1aXJlKFwiLi9tdXRhdGlvbnNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBvbGxvQ2xpZW50ID0+ICh7XG4gIGxpc3Q6ICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXBvbGxvQ2xpZW50XG4gICAgICAgIC5xdWVyeSh7IHF1ZXJ5OiBhcHBzUXVlcnkgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEuYXBwcykpXG4gICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pLFxuICBjcmVhdGVPclVwZGF0ZTogKG5hbWUsIHZlcnNpb24sIGRvY2tlckNvbXBvc2UsIGJpZ2JvYXRDb21wb3NlKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgbmFtZSwgdmVyc2lvbiwgZG9ja2VyQ29tcG9zZSwgYmlnYm9hdENvbXBvc2UgfTtcbiAgICAgIGFwb2xsb0NsaWVudFxuICAgICAgICAubXV0YXRlKHsgbXV0YXRpb246IGNyZWF0ZU9yVXBkYXRlQXBwLCB2YXJpYWJsZXMgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEuY3JlYXRlT3JVcGRhdGVBcHApKVxuICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KSxcbiAgcmVtb3ZlOiAobmFtZSwgdmVyc2lvbikgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSB7IG5hbWUsIHZlcnNpb24gfTtcbiAgICAgIGFwb2xsb0NsaWVudFxuICAgICAgICAubXV0YXRlKHsgbXV0YXRpb246IHJlbW92ZUFwcCwgdmFyaWFibGVzIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcy5kYXRhLnJlbW92ZUFwcCkpXG4gICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pXG59KTtcbiJdfQ==