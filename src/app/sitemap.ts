import type { MetadataRoute } from 'next';

const SITE_URL = 'https://mnoumanrasheed.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
            images: [
                `${SITE_URL}/M.Nouman.png`,
                `${SITE_URL}/hero-bg.png`,
            ],
        },
    ];
}
