import { motion } from "framer-motion";
import { ContactForm } from "../ContactForm";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="contaainer py-24 px-6 bg-black/40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-between h-full py-4 md:py-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold ">
                Let's Build <br />
                <span className="text-primary">The Future</span>
              </h2>
              <div className="space-y-4 text-sm font-mono text-muted-foreground/80 mt-12 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for freelance
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <p>mkukhalil1@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <p>+923073909479</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
