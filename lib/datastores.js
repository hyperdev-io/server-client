"use strict";

var _require = require("./queries"),
    dataStoresQuery = _require.dataStoresQuery;

module.exports = function (apolloClient) {
  return {
    list: function list() {
      return new Promise(function (resolve, reject) {
        apolloClient.query({ query: dataStoresQuery }).then(function (res) {
          return resolve(res.data.datastores);
        }).catch(reject);
      });
    }
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kYXRhc3RvcmVzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkYXRhU3RvcmVzUXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwibGlzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXBvbGxvQ2xpZW50IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImRhdGFzdG9yZXMiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7ZUFBNEJBLFFBQVEsV0FBUixDO0lBQXBCQyxlLFlBQUFBLGU7O0FBRVJDLE9BQU9DLE9BQVAsR0FBaUI7QUFBQSxTQUFpQjtBQUNoQ0MsVUFBTTtBQUFBLGFBQ0osSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMvQkMscUJBQ0dDLEtBREgsQ0FDUyxFQUFFQSxPQUFPUixlQUFULEVBRFQsRUFFR1MsSUFGSCxDQUVRO0FBQUEsaUJBQU9KLFFBQVFLLElBQUlDLElBQUosQ0FBU0MsVUFBakIsQ0FBUDtBQUFBLFNBRlIsRUFHR0MsS0FISCxDQUdTUCxNQUhUO0FBSUQsT0FMRCxDQURJO0FBQUE7QUFEMEIsR0FBakI7QUFBQSxDQUFqQiIsImZpbGUiOiJkYXRhc3RvcmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBkYXRhU3RvcmVzUXVlcnkgfSA9IHJlcXVpcmUoXCIuL3F1ZXJpZXNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBvbGxvQ2xpZW50ID0+ICh7XG4gIGxpc3Q6ICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXBvbGxvQ2xpZW50XG4gICAgICAgIC5xdWVyeSh7IHF1ZXJ5OiBkYXRhU3RvcmVzUXVlcnkgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEuZGF0YXN0b3JlcykpXG4gICAgICAgIC5jYXRjaChyZWplY3QpO1xuICAgIH0pLFxufSk7XG4iXX0=