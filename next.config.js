module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://191.252.156.192:8080/:path*',
      },
    ]
  },
}
