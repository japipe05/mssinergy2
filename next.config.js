/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || null,
    assetPrefix: process.env.NEXT_PUBLIC_IMAGE_PATH || null,
    output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    }
}
module.exports = nextConfig