import { z } from "zod";

// Contact form message schema
export const insertMessageSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type Message = InsertMessage & {
    id: number;
};

// Portfolio Data Types
export const projectSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    imageUrl: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export const skillSchema = z.object({
    name: z.string(),
    category: z.enum(["Frontend", "Backend", "Tools", "Design"]),
    proficiency: z.number().min(0).max(100),
});

export type Skill = z.infer<typeof skillSchema>;
