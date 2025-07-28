// B:\mytestProjects\PatriciaConstructions\v2\panframltdv2\next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://panframltd.co.ke",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
}; 
