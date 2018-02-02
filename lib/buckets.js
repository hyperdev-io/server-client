'use strict';

var _require = require('./queries'),
    bucketsQuery = _require.bucketsQuery;

var _require2 = require('./mutations'),
    deleteBucket = _require2.deleteBucket,
    copyBucket = _require2.copyBucket;

module.exports = function (apolloClient) {
    return {
        list: function list() {
            return new Promise(function (resolve, reject) {
                apolloClient.query({ query: bucketsQuery }).then(function (res) {
                    return resolve(res.data.buckets);
                }).catch(reject);
            });
        },
        remove: function remove(name) {
            return new Promise(function (resolve, reject) {
                var variables = { name: name };
                apolloClient.mutate({ mutation: deleteBucket, variables: variables }).then(function (res) {
                    return resolve(res.data.deleteBucket);
                }).catch(reject);
            });
        },
        copy: function copy(sourceName, destinationName) {
            return new Promise(function (resolve, reject) {
                var variables = { sourceName: sourceName, destinationName: destinationName };
                apolloClient.mutate({ mutation: copyBucket, variables: variables }).then(function (res) {
                    return resolve(res.data.copyBucket);
                }).catch(reject);
            });
        }
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idWNrZXRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJidWNrZXRzUXVlcnkiLCJkZWxldGVCdWNrZXQiLCJjb3B5QnVja2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImxpc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFwb2xsb0NsaWVudCIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImRhdGEiLCJidWNrZXRzIiwiY2F0Y2giLCJyZW1vdmUiLCJ2YXJpYWJsZXMiLCJuYW1lIiwibXV0YXRlIiwibXV0YXRpb24iLCJjb3B5Iiwic291cmNlTmFtZSIsImRlc3RpbmF0aW9uTmFtZSJdLCJtYXBwaW5ncyI6Ijs7ZUFBeUJBLFFBQVEsV0FBUixDO0lBQWpCQyxZLFlBQUFBLFk7O2dCQUM0QkQsUUFBUSxhQUFSLEM7SUFBNUJFLFksYUFBQUEsWTtJQUFjQyxVLGFBQUFBLFU7O0FBRXRCQyxPQUFPQyxPQUFQLEdBQWlCO0FBQUEsV0FBaUI7QUFDOUJDLGNBQU07QUFBQSxtQkFBTSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3pDQyw2QkFBYUMsS0FBYixDQUFtQixFQUFFQSxPQUFPVixZQUFULEVBQW5CLEVBQ0tXLElBREwsQ0FDVTtBQUFBLDJCQUFPSixRQUFRSyxJQUFJQyxJQUFKLENBQVNDLE9BQWpCLENBQVA7QUFBQSxpQkFEVixFQUVLQyxLQUZMLENBRVdQLE1BRlg7QUFHSCxhQUpXLENBQU47QUFBQSxTQUR3QjtBQU05QlEsZ0JBQVE7QUFBQSxtQkFBUSxJQUFJVixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzdDLG9CQUFNUyxZQUFZLEVBQUVDLFVBQUYsRUFBbEI7QUFDQVQsNkJBQWFVLE1BQWIsQ0FBb0IsRUFBRUMsVUFBVW5CLFlBQVosRUFBMEJnQixvQkFBMUIsRUFBcEIsRUFDS04sSUFETCxDQUNVO0FBQUEsMkJBQU9KLFFBQVFLLElBQUlDLElBQUosQ0FBU1osWUFBakIsQ0FBUDtBQUFBLGlCQURWLEVBRUtjLEtBRkwsQ0FFV1AsTUFGWDtBQUdILGFBTGUsQ0FBUjtBQUFBLFNBTnNCO0FBWTlCYSxjQUFNLGNBQUNDLFVBQUQsRUFBYUMsZUFBYjtBQUFBLG1CQUFpQyxJQUFJakIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwRSxvQkFBTVMsWUFBWSxFQUFFSyxzQkFBRixFQUFjQyxnQ0FBZCxFQUFsQjtBQUNBZCw2QkFBYVUsTUFBYixDQUFvQixFQUFFQyxVQUFVbEIsVUFBWixFQUF3QmUsb0JBQXhCLEVBQXBCLEVBQ0tOLElBREwsQ0FDVTtBQUFBLDJCQUFPSixRQUFRSyxJQUFJQyxJQUFKLENBQVNYLFVBQWpCLENBQVA7QUFBQSxpQkFEVixFQUVLYSxLQUZMLENBRVdQLE1BRlg7QUFHSCxhQUxzQyxDQUFqQztBQUFBO0FBWndCLEtBQWpCO0FBQUEsQ0FBakIiLCJmaWxlIjoiYnVja2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYnVja2V0c1F1ZXJ5IH0gPSByZXF1aXJlKCcuL3F1ZXJpZXMnKVxuY29uc3QgeyBkZWxldGVCdWNrZXQsIGNvcHlCdWNrZXR9ID0gcmVxdWlyZSgnLi9tdXRhdGlvbnMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwb2xsb0NsaWVudCA9PiAoe1xuICAgIGxpc3Q6ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgYXBvbGxvQ2xpZW50LnF1ZXJ5KHsgcXVlcnk6IGJ1Y2tldHNRdWVyeSB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlc29sdmUocmVzLmRhdGEuYnVja2V0cykpXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgICB9KSxcbiAgICByZW1vdmU6IG5hbWUgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB7IG5hbWUgfVxuICAgICAgICBhcG9sbG9DbGllbnQubXV0YXRlKHsgbXV0YXRpb246IGRlbGV0ZUJ1Y2tldCwgdmFyaWFibGVzIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzb2x2ZShyZXMuZGF0YS5kZWxldGVCdWNrZXQpKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdClcbiAgICB9KSxcbiAgICBjb3B5OiAoc291cmNlTmFtZSwgZGVzdGluYXRpb25OYW1lKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHsgc291cmNlTmFtZSwgZGVzdGluYXRpb25OYW1lIH1cbiAgICAgICAgYXBvbGxvQ2xpZW50Lm11dGF0ZSh7IG11dGF0aW9uOiBjb3B5QnVja2V0LCB2YXJpYWJsZXMgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXNvbHZlKHJlcy5kYXRhLmNvcHlCdWNrZXQpKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdClcbiAgICB9KSxcbn0pIl19