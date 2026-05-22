import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Insights collection — long-form articles published on /insights.
// Astro 6 loader-based collections: the `glob` loader picks up every markdown
// file under src/content/insights and validates frontmatter against the
// schema. The file's stem (e.g. "wealth-side-checklist-selling-utah-business")
// becomes the entry id, which the dynamic route uses as the URL slug.
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishedAt: z.coerce.date(),
    // Short summary used on the /insights hub card and in OG previews.
    summary: z.string(),
    // Optional contextual link back to a related landing page.
    relatedHref: z.string().optional(),
    relatedLabel: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Estimated reading minutes; optional, displayed on the hub if present.
    minutes: z.number().int().positive().optional(),
  }),
});

export const collections = { insights };
