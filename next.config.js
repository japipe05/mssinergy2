/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    basePath: '/mssinergy',
    assetPrefix: '/mssinergy',
    output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    }
}
module.exports = nextConfig