 import type { NextConfig } from "next"; const nextConfig: NextConfig = { reactStrictMode: true, experimental: { turbo: { rules: { "*.css": ["postcss-loader"] } } } }; export default nextConfig; 
