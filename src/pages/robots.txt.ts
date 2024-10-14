import config from '@/config'
import {getCollection} from "astro:content";

export async function GET() {

    const disallowedPaths = config.excludeFromRobots;
    
    const result = `  
User-agent: *
Allow: /
${disallowedPaths.map(path => `Disallow: ${path}\n`).join('')} 
Sitemap: ${config.siteUrl}/sitemap-index.xml
  `.trim();

    return new Response(result, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
