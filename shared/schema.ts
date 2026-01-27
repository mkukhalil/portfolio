import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form messages
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({ id: true });
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;

// Portfolio Data Types (Served from API, no DB table needed for static portfolio data)
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
