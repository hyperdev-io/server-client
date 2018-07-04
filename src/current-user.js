const { currentUserQuery } = require("./queries");

module.exports = apolloClient => ({
    get: () =>
        new Promise((resolve, reject) => {
            apolloClient
              .query({ query: currentUserQuery })
              .then(res => resolve(res.data.currentUser))
              .catch(reject);
        })
});
