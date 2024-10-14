import {defineConfig} from 'astro/config';
import alpine from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import config from './src/config'

export default defineConfig({
    site: config.siteUrl,
    integrations: [alpine(), sitemap({
        filter: (page) =>
            page !== config.siteUrl + '/test/' &&
            page !== config.siteUrl + '/test1/',
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
    })],
    server: {
        port: 3000
    },
    vite: {
        css: {
            transformer: "lightningcss",
        },
    },
});
