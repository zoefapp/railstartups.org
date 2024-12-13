import { defineCollection, z } from "astro:content";

const startupsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      companyName: z.string(),
      shortDescription: z.string(),
      country: z.string(),
      logo: image(),
      website: z.string().url(),
    //   .refine((img) => img.width >= 1080, {
    //     message: "Cover image must be at least 1080 pixels wide!",
    //   }),
      categories: z.array(
        z.enum(["customer service", "tickets", "b2b", "b2c", "other", "community", "lobby", "content", "data", "planner", "tour operator"])
      ),
    }),
});

export const collections = {
  startups: startupsCollection,
};
export type ContentCollection = keyof typeof collections;
