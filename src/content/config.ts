// 1. Import utilities from `astro:content`
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
      startDate: z.date(),
      endDate: z.date().optional(),
      role: z.string(),
      techStack: z.array(z.string()),
      projectLink: z.string().optional(),
      aboutCompany: z.string().optional(),
      githubLink: z.string().optional(),
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      platform: z.string(),
      link: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: workProjects,
  blog,
};
