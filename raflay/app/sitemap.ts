// app/sitemap.ts
import { MetadataRoute } from 'next'
import { projects } from './data/content'

const baseUrl = 'https://raflay.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`,          lastModified: new Date(), priority: 1,   changeFrequency: 'weekly' },
    { url: `${baseUrl}/products`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/team`,     lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/careers`,  lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
  ]

  const productPages: MetadataRoute.Sitemap = projects.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages]
}