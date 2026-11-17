import type { NextConfig } from 'next';

// Static export for GitHub Pages (user site at the domain root, so no basePath).
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
