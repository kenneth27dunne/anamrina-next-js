/** @type {import('next').NextConfig} */
const nextConfig = {
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
    }
};

export default nextConfig;
