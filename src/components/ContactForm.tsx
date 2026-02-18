import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@/lib/schema";
import { useContactForm } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { mutate, isPending } = useContactForm();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "Other",
      message: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        setTimeout(() => {
          form.setFocus("name");
        }, 100);
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-[#071C29] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
        <h3 className="text-2xl font-display font-bold mb-4 text-center">Get In Touch</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <div className="flex flex-wrap gap-2  mb-6">
                    {["Freelance", "Collaboration", "Other"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => field.onChange(option)}
                        className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all border ${field.value === option
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white/70 border-white/20 hover:border-white/40"
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-[#071C29] border-white/50 focus:border-white transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="hello@example.com"
                      className="bg-[#071C29] border-white/50 focus:border-white transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="min-h-[100px] bg-[#071C29] border-white/50 focus:border-white transition-colors"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="w-fit px-2 bg-white text-black hover:bg-white/90 transition-all font-semibold rounded-md"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
