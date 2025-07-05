/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  navigateFallback: '/offline.html',
})

module.exports = withPWA({
  images: {
    domains: ['localhost'],
  },
})
