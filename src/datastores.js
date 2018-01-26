const { dataStoresQuery } = require("./queries");

module.exports = apolloClient => ({
  list: () =>
    new Promise((resolve, reject) => {
      apolloClient
        .query({ query: dataStoresQuery })
        .then(res => resolve(res.data.datastores))
        .catch(reject);
    }),
});
