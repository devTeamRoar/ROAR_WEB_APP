/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Azure Web App
  // output: 'standalone', // Commented out - may cause build issues
  
  // Optimize for production
  compress: true,
  
  // Image optimization
  images: {
    // unoptimized: true, // Only needed for static export
    domains: [],
  },
  
  // Asset prefix for Azure (if needed)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-app-name' : '',
  
  // Trailing slash for better Azure compatibility
  trailingSlash: true,
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled - requires critters package
  },
  
  // Webpack configuration for Azure
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
