/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages — emits /out at build time.
  output: "export",

  // GH Pages serves from flat files; trailing slashes keep nested routes working.
  trailingSlash: true,

  // next/image optimizer needs a server. Disable for static hosting.
  images: { unoptimized: true },

  // Custom domain (chainfoundry.dev) → served at the root, no basePath needed.
  // If you ever deploy to https://<user>.github.io/chainfoundry.dev/ without a
  // custom domain, set basePath: "/chainfoundry.dev" here.
};

export default nextConfig;
