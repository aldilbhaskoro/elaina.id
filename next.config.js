/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // pakai static export
  images: {
    unoptimized: true,     // kalau pakai <Image>
  },
  trailingSlash: true,     // supaya route /about → /about/index.html
}

module.exports = nextConfig
