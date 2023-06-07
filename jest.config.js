module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFilesAfterEnv: ["<rootDir>/js/index.js"]
  };
  