/**
* @type {import('next').NextConfig}
*/
let basePath = '';

if (process.env.APP_ENTORNO === 'PRODUCCION') {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH;
}

const nextConfig = {
    basePath: basePath,
    output: 'export',
    distDir: 'dist',
    images:{
    unoptimized: true,
    }
}
module.exports = nextConfig
