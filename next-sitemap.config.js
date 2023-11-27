/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.core-point.kr',
  generateRobotsTxt: false,
  exclude: ['/admin', '/admin/*'],
};
