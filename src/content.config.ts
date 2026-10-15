import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    ratio: z.string(),
    label: z.string(),
    order: z.number(),
    alt: z.string().optional(),
    gradientClass: z.string().optional(),
    description: z.string().optional(),
    tools: z.array(z.string()).optional(),
    year: z.string().optional(),
    client: z.string().optional(),
  }),
});

export const collections = { portfolio };
