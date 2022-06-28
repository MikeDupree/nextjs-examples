const injectDevServer = require('@cypress/react/plugins/next');
const codeCoverage = require('@cypress/code-coverage/task');
const useBabel = require('@cypress/code-coverage/use-babelrc');

module.exports = (on, config) => {
  injectDevServer(on, config);
  codeCoverage(on, config);
  on('file:preprocessor', useBabel);

  return config;
};
