const { resourcesQuery } = require("./queries");

module.exports = apolloClient => ({
  list: () =>
    new Promise((resolve, reject) => {
      apolloClient
        .query({ query: resourcesQuery })
        .then(res => resolve(res.data.resources))
        .catch(reject);
    })
});
