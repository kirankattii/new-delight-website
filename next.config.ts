import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression
  compress: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },
  
  // URL Rewrites - Map farmlands URLs to projects
  async rewrites() {
    return [
      {
        source: '/farmlands',
        destination: '/projects',
      },
      {
        source: '/farmlands/canvas.html',
        destination: '/projects/canvas',
      },
      {
        source: '/farmlands/arinaa-country-farms.html',
        destination: '/projects/arinaa-country-farms',
      },
      {
        source: '/farmlands/ayana.html',
        destination: '/projects/ayana',
      },
      {
        source: '/farmlands/bellevuee.html',
        destination: '/projects/bellevuee',
      },
      {
        source: '/farmlands/rhythm-of-soul.html',
        destination: '/projects/rhythm-of-soul',
      },
      {
        source: '/farmlands/whistling-woods.html',
        destination: '/projects/whistling-woods',
      },
    ];
  },

  // Redirects - Redirect old project URLs to new farmlands URLs
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/farmlands',
        permanent: true,
      },
      {
        source: '/projects/canvas',
        destination: '/farmlands/canvas.html',
        permanent: true,
      },
      {
        source: '/projects/arinaa-country-farms',
        destination: '/farmlands/arinaa-country-farms.html',
        permanent: true,
      },
      {
        source: '/projects/ayana',
        destination: '/farmlands/ayana.html',
        permanent: true,
      },
      {
        source: '/projects/bellevuee',
        destination: '/farmlands/bellevuee.html',
        permanent: true,
      },
      {
        source: '/projects/rhythm-of-soul',
        destination: '/farmlands/rhythm-of-soul.html',
        permanent: true,
      },
      {
        source: '/projects/whistling-woods',
        destination: '/farmlands/whistling-woods.html',
        permanent: true,
      },
    ];
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://in.fw-cdn.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://connect.facebook.net https://graph.facebook.com https://in.fw-cdn.com https://api.whatsapp.com",
              "frame-src 'self' https://www.googletagmanager.com https://connect.facebook.net https://www.youtube.com https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me tel:",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/static/(.*)',
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
