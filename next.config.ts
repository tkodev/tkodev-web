import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/ig',
        destination: 'https://www.instagram.com/tkodev',
        permanent: true,
        basePath: false
      }
    ]
  }
}

export default nextConfig
