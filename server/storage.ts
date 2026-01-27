import { messages, type Message, type InsertMessage, type Project, type Skill } from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return [
      {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
        tags: ["React", "TypeScript", "Recharts", "Tailwind"],
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 2,
        title: "Social Media Platform",
        description: "Real-time social platform with messaging, feed, and user profiles.",
        tags: ["Node.js", "Socket.io", "React", "PostgreSQL"],
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 3,
        title: "AI Image Generator",
        description: "Web application that uses AI to generate images from text prompts.",
        tags: ["OpenAI API", "Next.js", "Tailwind CSS"],
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 4,
        title: "Task Management Tool",
        description: "Collaborative task manager with drag-and-drop kanban boards.",
        tags: ["Vue.js", "Firebase", "Pinia"],
        link: "#",
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800",
      },
    ];
  }

  async getSkills(): Promise<Skill[]> {
    return [
      { name: "React", category: "Frontend", proficiency: 95 },
      { name: "TypeScript", category: "Frontend", proficiency: 90 },
      { name: "Node.js", category: "Backend", proficiency: 85 },
      { name: "PostgreSQL", category: "Backend", proficiency: 80 },
      { name: "Tailwind CSS", category: "Frontend", proficiency: 95 },
      { name: "Docker", category: "Tools", proficiency: 75 },
      { name: "Git", category: "Tools", proficiency: 90 },
      { name: "Figma", category: "Design", proficiency: 70 },
    ];
  }
}

export const storage = new MemStorage();
