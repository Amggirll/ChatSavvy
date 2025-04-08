/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.pravatar.cc'], // 允许使用pravatar.cc作为图像源（用于示例头像）
  },
  i18n: {
    locales: ['en', 'es', 'pt', 'hi'], // 支持的语言
    defaultLocale: 'en',
  },
};

module.exports = nextConfig; 