/** @type {import('next').NextConfig} */
const nextConfig = {
       eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      
      },

     
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

};

export default nextConfig;
