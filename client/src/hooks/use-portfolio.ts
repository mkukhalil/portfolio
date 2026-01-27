import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useProjects() {
  return useQuery({
    queryKey: [api.portfolio.getProjects.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getProjects.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.portfolio.getProjects.responses[200].parse(await res.json());
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: [api.portfolio.getSkills.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.getSkills.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.portfolio.getSkills.responses[200].parse(await res.json());
    },
  });
}

export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate with shared schema first if needed, but endpoint does it too
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to send message");
      }
      
      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent",
        description: data.message,
        className: "bg-primary text-primary-foreground border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
