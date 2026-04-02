import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const startupsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/startups" }),
  schema: ({ image }) =>
    z.object({
      companyName: z.string(),
      shortDescription: z.string(),
      country: z.string(),
      logo: image(),
      website: z.string().url(),
      categories: z.array(
        z.enum(["customer service", "tickets", "b2b", "b2c", "other", "community", "lobby", "content", "data", "planner", "tour operator", "technology"])
      ),
    }),
});

export const collections = {
  startups: startupsCollection,
};
export type ContentCollection = keyof typeof collections;
