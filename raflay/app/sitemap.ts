// app/sitemap.ts
import { MetadataRoute } from 'next'
import { products, jobs } from './data/content'

const baseUrl = 'https://raflay.com'
const now = new Date()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── Static pages ────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/team`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: now,
      priority: 0.8,
      changeFrequency: 'weekly',
    },
  ]

  // ── Service pages (all static slugs) ────────────────────────────
  const serviceSlug = [
    'web-development',
    'full-stack-development',
    'react-development',
    'nextjs-development',
    'hire-web-developers',
    'web-development-solutions',
    'website-development-company',
    'website-design-and-development',
    'web-development-islamabad',
    'top-web-development-companies',
    'mobile-app-development',
    'ios-app-development',
    'android-app-development',
    'ui-ux-design',
    'graphic-design',
    'logo-design',
    'branding-services',
    'motion-graphics',
    'video-editing',
    'youtube-video-editing',
    'vfx-services',
    'ai-development',
    'chatbot-development',
    'automation-solutions',
    'custom-software-development',
    'cloud-hosting',
    'aws-services',
    'devops',
    'docker-kubernetes',
  ]

  const servicePages: MetadataRoute.Sitemap = serviceSlug.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // ── Case studies ─────────────────────────────────────────────────
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies/video-editing-project`,
      lastModified: now,
      priority: 0.6,
      changeFrequency: 'monthly',
    },
  ]

  // ── Dynamic: products (from content.ts) ──────────────────────────
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }))

  // ── Dynamic: job listings (from content.ts) ───────────────────────
  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.id}`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: 'weekly' as const,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...productPages,
    ...jobPages,
  ]
}