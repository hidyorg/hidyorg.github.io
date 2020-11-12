// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const aliases = {
  "@src": "src",
  "@assets": "src/assets",
  "@router": "src/router",
  "@store": "src/store"
};

module.exports = {
  webpack: {},
  jsconfig: {}
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  // const aliasHasExtension = /\.\w+$/.test(aliasTo)

  module.exports.webpack[alias] = path.resolve(__dirname, aliasTo);
  module.exports.jsconfig[alias + "/*"] = [aliasTo + "/*"];
  module.exports.jsconfig[alias] = [
    aliasTo + "/index.js",
    aliasTo + "/index.json",
    aliasTo + "/index.vue",
    aliasTo + "/index.scss",
    aliasTo + "/index.css"
  ];
}
