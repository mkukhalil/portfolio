import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Layout, Terminal } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Navbar } from "@/components/Navbar";
import { MeshBackground } from "@/components/MeshBackground";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useProjects, useSkills } from "@/hooks/use-portfolio";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen relative">
      <MeshBackground />
      <Navbar />

      {/* Hero Section */}
      <section
  id="hero"
  className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden"
>
  <div className="relative w-full max-w-5xl mx-auto z-10 flex flex-col items-center">
    {/* IMAGE */}
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="relative mt-20"
    >
      <img
        src="/khalil.png"
        alt="Khalil"
        className="
          w-36 h-56
          sm:w-40 sm:h-60
          md:w-64 md:h-80
          lg:w-50 lg:h-[19rem]
          object-cover
          relative z-10
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          border-4 border-white
          rounded-t-full rounded-b-none
        "
        data-testid="img-khalil"
      />
    </motion.div>

    {/* TEXT OVERLAYING IMAGE */}
    <div className="relative -mt-12 md:-mt-20 text-center z-20 space-y-4 md:space-y-6 px-4">
  {/* Greeting */}
  <h1 className="
    text-xl md:text-2xl lg:text-3xl
    uppercase tracking-widest
    text-white/90
    bg-black/20 backdrop-blur-sm
    px-4 py-2
    rounded-lg
    font-display font-semibold
    drop-shadow-lg
  ">
    Hey, I’m Khalil
  </h1>

  {/* Main Title */}
  <h1 className="
    text-3xl md:text-5xl lg:text-6xl
    font-display font-extrabold
    tracking-tight leading-tight
    text-white
    bg-black/30 backdrop-blur-md
    px-6 py-3
    rounded-xl
    drop-shadow-2xl
  ">
    Full-Stack Developer
  </h1>

  {/* Subtitle */}
  <p className="
    max-w-xl mx-auto
    text-white/80
    md:text-lg lg:text-xl
    bg-black/20 backdrop-blur-sm
    px-4 py-2 rounded-lg
    drop-shadow-lg
  ">
    I build scalable, modern web applications with clean architecture,
    strong logic, and production-ready code.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
    <ScrollLink
      to="projects"
      smooth
      duration={500}
      className="
        px-8 py-3 rounded-full font-semibold
        bg-primary text-primary-foreground
        hover:scale-[1.05] hover:shadow-lg
        transition-all cursor-pointer
      "
    >
      View My Work
    </ScrollLink>

    <ScrollLink
      to="contact"
      smooth
      duration={500}
      className="
        px-8 py-3 rounded-full font-semibold
        border border-white/15
        bg-white/5 hover:bg-white/10
        hover:scale-[1.05]
        transition-all cursor-pointer
      "
    >
      Contact Me
    </ScrollLink>
  </div>
</div>

  </div>

  {/* SCROLL INDICATOR */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
  >
    <ArrowDown className="w-6 h-6" />
  </motion.div>
</section>



      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="prose prose-invert prose-lg text-muted-foreground">
                <p className="mb-4">
                  I'm a passionate developer who bridges the gap between design and engineering.
                  I don't just write code; I build immersive digital products that solve real problems.
                </p>
                <p>
                  With a background in both frontend aesthetics and backend architecture,
                  I create seamless applications that are fast, responsive, and reliable.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, label: "Frontend", desc: "Pixel Perfect" },
                { icon: Database, label: "Backend", desc: "Scalable Logic" },
                { icon: Layout, label: "UI/UX", desc: "Modern Design" },
                { icon: Terminal, label: "DevOps", desc: "CI/CD Pipelines" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/50 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-bold font-display">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technical <span className="text-primary">Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My proficiency across the full stack. Always learning, always evolving.
            </p>
          </motion.div>

          {skillsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-24 w-full bg-white/5" />)}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
              {Object.entries(skillsByCategory || {}).map(([category, items], catIndex) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-display font-bold border-l-4 border-primary pl-4">
                    {category}
                  </h3>
                  <div className="grid gap-4">
                    {items.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={catIndex + index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
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

          {projectsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="aspect-video w-full rounded-2xl bg-white/5" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black/40 relative overflow-hidden">
        {/* Decorative elements */}
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
                Have a project in mind? Looking for a new team member?
                I'm always open to discussing new opportunities and challenges.
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

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolio. Built with React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
