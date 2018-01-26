const { appsQuery } = require("./queries");
const { removeApp, createOrUpdateApp } = require("./mutations");

module.exports = apolloClient => ({
  list: () =>
    new Promise((resolve, reject) => {
      apolloClient
        .query({ query: appsQuery })
        .then(res => resolve(res.data.apps))
        .catch(reject);
    }),
  createOrUpdate: (name, version, dockerCompose, bigboatCompose) =>
    new Promise((resolve, reject) => {
      const variables = { name, version, dockerCompose, bigboatCompose };
      apolloClient
        .mutate({ mutation: createOrUpdateApp, variables })
        .then(res => resolve(res.data.createOrUpdateApp))
        .catch(reject);
    }),
  remove: (name, version) =>
    new Promise((resolve, reject) => {
      const variables = { name, version };
      apolloClient
        .mutate({ mutation: removeApp, variables })
        .then(res => resolve(res.data.removeApp))
        .catch(reject);
    })
});
