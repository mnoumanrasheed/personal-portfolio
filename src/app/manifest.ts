import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Muhammad Nouman Portfolio',
        short_name: 'Nouman Portfolio',
        description: 'Expert software solutions in .NET, Web Development, and AI.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0b10',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/nomi-transparent.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/nomi-transparent.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    };
}
