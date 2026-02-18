import { useQuery, useMutation } from "@tanstack/react-query";
import { type InsertMessage } from "@/lib/schema";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again later.");
      }

      return result;
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
