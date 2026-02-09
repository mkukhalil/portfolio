import { motion } from "framer-motion";
import { ContactForm } from "../ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-black/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Build <br />
              <span className="text-primary">The Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Looking for a new team member? I'm always open to discussing new opportunities and challenges.
            </p>

            <div className="space-y-4 text-sm font-mono text-muted-foreground/80">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for freelance
              </div>
              <p>Based in New York, NY (Remote friendly)</p>
              <p>hello@portfolio.dev</p>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
