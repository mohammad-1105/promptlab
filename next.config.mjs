/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
    env: {
      KINDE_SITE_URL: process.env.KINDE_SITE_URL ?? `https://${process.env.VERCEL_URL}`,
      KINDE_POST_LOGOUT_REDIRECT_URL:
        process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? `https://${process.env.VERCEL_URL}`,
      KINDE_POST_LOGIN_REDIRECT_URL:
        process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? `https://${process.env.VERCEL_URL}/api/auth/callback`
    }
  };
  
  export default nextConfig;
  