import { useQuery, useMutation } from "@tanstack/react-query";
import { type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { projects, skills } from "@/lib/data";

export function useProjects() {
  return useQuery({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      // Return static data directly
      return projects;
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["/api/skills"],
    queryFn: async () => {
      // Return static data directly
      return skills;
    },
  });
}

export function useContactForm() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log message to console since there's no backend
      console.log("Contact form submission (local):", data);

      return { success: true, message: "Thank you! Your message has been received (simulated)." };
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent",
        description: data.message,
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
