/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const getCurrentGitBranch = () => {
  const cmd = 'git rev-parse --abbrev-ref HEAD';
  try {
    const br = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    return br;
  } catch (e) {
    console.warn('Could not determine current branch');
    return '';
  }
};

module.exports = {
  configure: async (defaultConfig) => {
    const finalConfig = { ...defaultConfig };
    if (defaultConfig && typeof defaultConfig.BODILESS_SEARCH_CONFIG === 'string') {
      const confFilePath = path.resolve(defaultConfig.BODILESS_SEARCH_CONFIG);
      if (fs.existsSync(confFilePath) && fs.lstatSync(confFilePath).isFile()) {
        const searchConf = JSON.parse(fs.readFileSync(confFilePath, 'utf8'));
        finalConfig.BODILESS_SEARCH_PARAMS = JSON.stringify(searchConf);
      }
    }
    if (getCurrentGitBranch() === 'main') {
      finalConfig.BODILESS_BACKEND_SAVE_ENABLED = '0';
    } else {
      finalConfig.BODILESS_BACKEND_COMMIT_ENABLED = '1';
    }
    return finalConfig;
  },
};
