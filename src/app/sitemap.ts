import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cambridgeenglishschool.com";

    // Core routes for the Cambridge English School website
    const routes = [
        '',
        '/about',
        '/academics',
        '/admissions',
        '/anti-ragging',
        '/blog',
        '/contact',
        '/facilities',
        '/gallery',
        '/principal',
        '/results',
        '/school-rules',
        '/student-life',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
