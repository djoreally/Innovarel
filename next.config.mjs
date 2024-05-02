/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io", "i.ibb.co", "images.unsplash.com"],
    },
    experimental: { urlImports: ["https://themer.sanity.build/"] },
};

export default nextConfig;
