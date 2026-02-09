import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MeshBackground } from "../MeshBackground";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative z-0">
      <MeshBackground />
      <div className="containerr mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground">
            A selection of projects that showcase my capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-11">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[1/1.2] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                <img
                  src="automation.png"
                  alt="automation"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                  <a
                    href="https://fluix-site.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center ">
              <h3 className="text-lg font-semibold tracking-tight text-center">
                Fluix Automation
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Full-stack
              </p>
            </div>
          </motion.div>



          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[1/1.2] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                <img
                  src="nike.png"
                  alt="nike"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                  <a
                    href="https://nike-website-2.vercel.app/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-lg font-semibold tracking-tight text-center">
                Nike Website
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Front End
              </p>
            </div>


          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[1/1.2] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                <img
                  src="CRM.jpg"
                  alt="CRM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                  <a
                    href="https://www.awesomescreenshot.com/video/49031420?key=d1d07fe5d9c20877930880d952d969ea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-lg font-semibold tracking-tight text-center">
                CRM Dashboard
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Full-stack
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[1/1.2] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                <img
                  src="POS.jpg"
                  alt="POS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                  <a
                    href="https://www.awesomescreenshot.com/video/49162174?key=1f5fe03fef191f9cc9dac0857c20b49e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center">
              <h3 className="text-lg font-semibold tracking-tight text-center">
                POS System
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Full-stack
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
