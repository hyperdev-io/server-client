const { appstoreAppsQuery } = require("./queries");

module.exports = apolloClient => ({
  list: () =>
    new Promise((resolve, reject) => {
      apolloClient
        .query({ query: appstoreAppsQuery })
        .then(res => resolve(res.data.appstoreApps))
        .catch(reject);
    })
});
