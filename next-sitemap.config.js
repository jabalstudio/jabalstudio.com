/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://www.jabalstudio.com', // Remplacez par l'URL de votre site
    generateRobotsTxt: true, // Générer un fichier robots.txt
    sitemapSize: 5000, // Nombre maximum d'URL par fichier sitemap
    changefreq: 'daily', // Fréquence de modification suggérée
    priority: 0.7, // Priorité par défaut des pages
    exclude: ['/admin/*', '/private/*'], // Exclure certaines pages
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.votre-site.com/custom-sitemap-1.xml', // Sitemaps additionnels si nécessaire
      ],
    },
  };
  
  module.exports = config;