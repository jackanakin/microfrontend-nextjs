const { REMOTE1_URL } = process.env

module.exports = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: '/remote1',
        destination: `${REMOTE1_URL}/remote1`,
      },
      {
        source: '/remote1/:path*',
        destination: `${REMOTE1_URL}/remote1/:path*`,
      },
    ]
  },
}
