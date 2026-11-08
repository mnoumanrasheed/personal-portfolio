import type { MetadataRoute } from 'next';

const SITE_URL = 'https://mnoumanrasheed.netlify.app';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-Web',
                    'Google-Extended',
                    'Anthropic-AI',
                    'PerplexityBot',
                    'YouBot',
                    'PetalBot',
                    'facebookexternalhit'
                ],
                allow: '/',
            }
        ],
        host: SITE_URL,
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
