/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'anamrinarecruitment.com',
            },
            {
                protocol: 'https',
                hostname: 'admin.anamrinarecruitment.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'cloudinary.com',
            },
        ],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    trailingSlash: false,
};

export default nextConfig;
