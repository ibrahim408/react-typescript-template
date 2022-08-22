const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = environmentVariables => {
  const { env } = environmentVariables;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
