/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    basePath: "/mssinergy",
    assetPrefix: "/mssinergy/images",
    output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    }
}
module.exports = nextConfig
