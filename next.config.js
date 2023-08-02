const webpack = require("webpack");
const { parsed: myEnv } = require("dotenv").config();

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
    return config;
  },
};

module.exports = nextConfig;
