const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const baseUrl = 'https://bro-portfolio.vercel.app/';

const generator = SitemapGenerator(baseUrl, {
  stripQuerystring: true,
  filepath: 'public/sitemap.xml',
});

generator.on('done', () => {
  console.log('Sitemap généré et sauvegardé dans public/sitemap.xml !');
});

generator.start();
