module.exports = {
  target: 'serverless',
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    deviceSizes: [320, 768, 1024, 1200, 1440],
    // iconSizes: [],
    // domains: [],
    path: '/_next/image',
    loader: 'default',
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}