import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: "src/content/projects"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    tech: z.array(z.string()).default([]),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
