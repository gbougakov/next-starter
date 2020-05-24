const webpack = require('webpack')
const nextSourceMaps = require('@zeit/next-source-maps')()

module.exports = nextSourceMaps({
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG_SLUG: process.env.SENTRY_ORG_SLUG,
    SENTRY_PRJ_SLUG: process.env.SENTRY_PRJ_SLUG
  },
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      })
    )

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config
  },
})