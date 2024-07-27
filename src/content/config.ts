// 1. Import utilities from `astro:content`
import { date } from "astro/zod";
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const workProjects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      company: z.string(),
      description: z.string(),
      coverImage: image(),
      additionalImages: z.array(image()).optional(),
      startDate: z.string().transform((val) => new Date(val).toDateString()),
      endDate: z
        .string()
        .transform((val) => new Date(val).toDateString())
        .optional(),
      role: z.string(),
      techStack: z.array(z.string()),
      projectLink: z.string().optional(),
      aboutCompany: z.string().optional(),
    }),
});

const blogPostPreviews = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      date: date(),
      platform: z.string(),
      link: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: workProjects,
};
