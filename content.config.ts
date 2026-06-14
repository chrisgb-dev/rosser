import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        type: z.string(),
        readingTime: z.object({
          text: z.string(),
          minutes: z.number(),
          time: z.number(),
          words: z.number()
        }),
        robots: defineRobotsSchema(),
        sitemap: defineSitemapSchema(),
        schemaOrg: defineSchemaOrgSchema(),
      })
    }),
    books: defineCollection({
      type: 'page',
      source: 'books/*.md',
      schema: z.object({
        cover: z.string(),
        title: z.string(),
        type: z.string(),
        order: z.number(),
        description: z.string(),
        genre: z.string(),
        robots: defineRobotsSchema(),
        sitemap: defineSitemapSchema(),
        schemaOrg: defineSchemaOrgSchema(),
      })
    }),
    writingList: defineCollection({
      type: 'data',
      source: 'data/writing_list.json',
      schema: z.object({
        title: z.string(),
        progress: z.number(),
        url: z.string()
      })
    }),
    journal: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/chrisgb-dev/crnet-blog/tree/master',
        include: "posts/**/*.md",
      },
      schema: z.object({
        title: z.string(),
        date: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
        cover: z.string(),
        coverCaption: z.string().optional(),
        description: z.string(),
        readingTime: z.object({
          text: z.string(),
          minutes: z.number(),
          time: z.number(),
          words: z.number()
        }),
        robots: defineRobotsSchema().default({ index: false, follow: true }),
        sitemap: defineSitemapSchema().default({ changefreq: 'weekly', priority: 0.7 }),
        schemaOrg: defineSchemaOrgSchema().default({
          '@type': 'BlogPosting',
          headline: '{{title}}',
          datePublished: '{{date}}',
          description: '{{description}}',
          image: '{{cover}}',
          author: {
            '@type': 'Person',
            name: 'Chris Rosser'
          }
        }),
      })
    }),
    alashiya: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/chrisgb-dev/alashiya/tree/master',
        include: "docs/**/*",
      },
    }),
  }
})