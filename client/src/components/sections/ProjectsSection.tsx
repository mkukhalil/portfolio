import { motion } from "framer-motion";
import { ProjectCard } from "../ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Props {
  projects: Project[];
  isLoading: boolean;
}

export function ProjectsSection({ projects, isLoading }: Props) {
  return (
    <section id="projects" className="py-24 px-6 relative z-0">
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

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-video w-full rounded-2xl bg-white/5" />
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
  );
}
