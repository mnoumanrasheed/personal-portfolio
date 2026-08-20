import { MetadataRoute } from 'next';

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
        sitemap: 'https://mnouman.dev/sitemap.xml',
    };
}
