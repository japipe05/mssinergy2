/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    },
    basePath: '/mssinergy',
}
module.exports = nextConfig