import type { MetadataRoute } from 'next';
import { SITE_URL, seoCategories } from '@/lib/gigsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-26');
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...seoCategories.map((category) => ({
      url: SITE_URL + '/gigs/' + category.slug,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
