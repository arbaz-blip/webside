// scripts/generate-sitemap.js
const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

// Your site base URL
const hostname = 'https://cinergiedigital.com';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/About-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/Industries', changefreq: 'monthly', priority: 0.8 },
  { url: '/Products', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/Resources', changefreq: 'monthly', priority: 0.8 },
  { url: '/career', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  // Add any others...
];


// Create sitemap stream and write to file
(async () => {
  try {
    const stream = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./public/sitemap.xml');
    stream.pipe(writeStream);

    for (const link of links) {
      stream.write(link);
    }

    stream.end();

    // Wait for writing to finish
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    console.log('✅ Sitemap created at public/sitemap.xml');
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
})();
