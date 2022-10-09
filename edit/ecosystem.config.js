const fs = require('fs');

const appVolume = () => process.env.APP_VOLUME || '/app/volume';
const gatsbyPort = () => process.env.PORT || 8888;
const siteDirName = () => process.env.APP_SITE_DIR_NAME || 'test-site';
const backend = () => {
  const backendRelative = 'node_modules/@bodiless/backend/src/server.js';
  const siteLevelBackend = `${appVolume()}/root/sites/${siteDirName()}/${backendRelative}`;
  return fs.existsSync(siteLevelBackend)
    ? siteLevelBackend : `${appVolume()}/root/${backendRelative}`;
};

module.exports = {
  apps: [
    {
      name: 'frontend',
      cwd: `${appVolume()}/root/sites/${siteDirName()}`,
      script: 'npm',
      args: `run dev-frontend -- --port ${gatsbyPort()}`,
    },
    {
      name: 'backend',
      cwd: `${appVolume()}/root/sites/${siteDirName()}`,
      script: 'npm',
      args: 'run dev-backend',
    },
    {
      name: 'package',
      cwd: `${appVolume()}/root/packages/${siteDirName()}`,
      script: 'npm',
      args: 'run build:watch',
    },
  ],
};
