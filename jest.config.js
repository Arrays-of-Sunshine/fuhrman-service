// {
//   "name": "my-project",
//   "jest": {
//     "verbose": true,
//     "setupFilesAfterEnv": ["./setupTests.js"],
//   },
//   "preset": "@shelf/jest-mongodb"
// }

module.exports = {
  verbose: true,
  preset: '@shelf/jest-mongodb',
  // setupFiles: ['/Users/mollyfuhrman/SDC/product_images/jest.setup.js'],
  // globalSetup: global.__MONGOD__ = mongod,
};
