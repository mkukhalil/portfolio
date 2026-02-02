import { motion } from "framer-motion";
import { SkillCard } from "../SkillCard";

type Skill = {
  name: string;
  category: string;
  icon: string;
};

interface Props {
  skills: Skill[];
  isLoading: boolean;
}

export function SkillsSection({ skills, isLoading }: Props) {
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-24 px-6 relative z-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display text-gradient mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My proficiency across the full stack. Always learning, always evolving.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-24 w-full bg-white/5 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {Object.entries(skillsByCategory || {}).map(([category, items], catIndex) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-display text-gradient-primary border-l-4 border-primary pl-4">
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
  );
}
