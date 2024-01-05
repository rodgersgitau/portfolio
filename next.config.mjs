import { sql } from '@vercel/postgres';

const nextConfig = {
  experimental: {
    // ppr: true,
    optimizeCss: true,
    mdxRs: false,
    useLightningcss: true,
  },

  pageExtensions: ['md', 'tsx', 'ts', 'jsx', 'js', 'md', 'mdx'],

  async redirects() {
    const redirects = [
      {
        source: '/X11',
        destination: '/blog/X11',
        permanent: true,
      },
      {
        source: '/atom',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/rss',
        destination: '/feed.xml',
        permanent: true,
      },
    ]
    if (!process.env.POSTGRES_URL) {
      return [];
    }

    const { rows } = await sql`
      SELECT source, destination, permanent
      FROM rows;
    `;

    const sqlRedirects = rows.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent,
    }));

    return [...new Set([...sqlRedirects, ...redirects])];
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

export default nextConfig;