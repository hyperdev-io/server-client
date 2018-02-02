"use strict";

var _require = require("./queries"),
    resourcesQuery = _require.resourcesQuery;

module.exports = function (apolloClient) {
  return {
    list: function list() {
      return new Promise(function (resolve, reject) {
        apolloClient.query({ query: resourcesQuery }).then(function (res) {
          return resolve(res.data.resources);
        }).catch(reject);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXNvdXJjZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInJlc291cmNlc1F1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsImxpc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFwb2xsb0NsaWVudCIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXNvdXJjZXMiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7ZUFBMkJBLFFBQVEsV0FBUixDO0lBQW5CQyxjLFlBQUFBLGM7O0FBRVJDLE9BQU9DLE9BQVAsR0FBaUI7QUFBQSxTQUFpQjtBQUNoQ0MsVUFBTTtBQUFBLGFBQ0osSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMscUJBQ0dDLEtBREgsQ0FDUyxFQUFFQSxPQUFPUixjQUFULEVBRFQsRUFFR1MsSUFGSCxDQUVRO0FBQUEsaUJBQU9KLFFBQVFLLElBQUlDLElBQUosQ0FBU0MsU0FBakIsQ0FBUDtBQUFBLFNBRlIsRUFHR0MsS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FMRCxDQURJO0FBQUE7QUFEMEIsR0FBakI7QUFBQSxDQUFqQiIsImZpbGUiOiJyZXNvdXJjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHJlc291cmNlc1F1ZXJ5IH0gPSByZXF1aXJlKFwiLi9xdWVyaWVzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwb2xsb0NsaWVudCA9PiAoe1xuICBsaXN0OiAoKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGFwb2xsb0NsaWVudFxuICAgICAgICAucXVlcnkoeyBxdWVyeTogcmVzb3VyY2VzUXVlcnkgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEucmVzb3VyY2VzKSlcbiAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgfSlcbn0pO1xuIl19