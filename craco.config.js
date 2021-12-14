const CracoAlias = require("craco-alias");

module.exports = {
  babel : {
    "presets": ["@emotion/babel-preset-css-prop"],
    "plugins": ["@emotion"]
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    }
  ]
};