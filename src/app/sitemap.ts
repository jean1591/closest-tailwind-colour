import { MetadataRoute } from 'next'

const baseUrl = 'https://closest-tailwind-colour.rb2.fr'
const changeFrequency = 'monthly'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1,
    },
  ]
}
