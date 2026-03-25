import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),

    image: z.string().optional(),
    technologies: z.array(z.string()),

    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),

    problem: z.string().optional(),
    solution: z.string().optional(),
    technicalArchitecture: z.array(z.string()).optional(),
    projectDemonstration: z.array(z.string()).optional(),

    features: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
