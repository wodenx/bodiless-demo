const fs = require('fs');
const express = require('express');
// const {
//   createDefaultContentPlugins,
//   getSampleDefaultContentConfig,
// } = require('@bodiless/gatsby-theme-bodiless/dist/DefaultContent');
const { getDisabledPages } = require('@bodiless/components/node-api');
// const getSSIEntities = require('@bodiless/gatsby-plugin-ssi/read-ssi-entities');
// const {
//   getConfig: getSiteDefaultContentConfig,
// } = require('./src/components/Contentful');

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const SITEURL = process.env.SITE_URL;

const disablePageList = getDisabledPages();
const disabledPages = Object.keys(disablePageList).filter(
  item => disablePageList[item].pageDisabled === true || disablePageList[item].indexingDisabled,
);

// Gatsby plugins list.
const plugins = [
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: '9jfq70qfast7',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-source-drupal',
    options: {
      baseUrl: 'https://main-bvxea6i-kvlqv2lq6ljra.ca-1.platformsh.site',
      // apiBase: `api`, // optional, defaults to `jsonapi`
    },
  },
  // 'gatsby-transformer-remote-filesystem',
  {
    resolve: 'gatsby-plugin-compile-es6-packages',
    options: {
      modules: ['@bodiless/gatsby-theme-bodiless'],
    },
  },
  {
    resolve: '@bodiless/gatsby-theme-bodiless',
    options: {
      gatsbyImage: {
        sharpArgs: {
          quality: 90,
        },
      },
      // Static replacement options, see docs for more info.
      static: {
        // Pass false to disable static replacement. Defaults to true.
        enabled: true,
        // Static replacement works by searching for files ending in ".bl-edit" and replacing them
        // with a file with the same name, but ending in ".static" instead. However, all files are
        // skipped by default for compatibility reasons.
        //
        // You can pass a boolean to include or exclude all files easily. True means include all
        // ".bl-edit" files, enabling static replacement on all packages. False disables static
        // replacement, which is the same as passing `enabled: false` in the options object.
        //
        // You can also pass a RegExp which will be matched against the **absolute** path of every
        // .bl-edit file being imported. If it matches and a sibling .static file is found, the file
        // will be replaced. For instance, if you want to include all `vital-editors` and
        // `vital-link` files, you may pass `/vital-editors|vital-link/` to this option.
        //
        // Defaults to false.
        include: true,
        // Pass false to disable logging all resolving operations. Defaults to true.
        logging: true,
      }
    },
  },
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: SITEURL,
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: { excludes: disabledPages },
  },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-N3M9LLD',
      dataLayerName: 'globalDataLayer',
    },
  },
  {
    resolve: 'bodiless-demo',
  }
];

const robotsTxtPolicy = [
  {
    userAgent: '*',
    allow: '/',
  },
];
process.env.ROBOTSTXT_POLICY = JSON.stringify(robotsTxtPolicy);

module.exports = {
  developMiddleware: app => {
    app.use('/___docs', express.static('doc', { fallthrough: false }));
  },
  siteMetadata: {
    siteUrl: SITEURL,
  },
  flags: {
    DEV_SSR: false,
  },
  pathPrefix: process.env.GATSBY_PATH_PREFIX || '',
  plugins,
};
