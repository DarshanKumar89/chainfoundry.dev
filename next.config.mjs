/** @type {import('next').NextConfig} */
const nextConfig = {
  // Full Next.js runtime (API routes, ISR, etc.) — required for /api/subscribe.
  // Netlify's @netlify/plugin-nextjs picks this up automatically.
  //
  // If you ever need a pure static bundle for GitHub Pages:
  //   output: "export",
  //   and the /api/subscribe route must be removed or hosted elsewhere.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
