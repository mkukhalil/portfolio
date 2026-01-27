import { motion } from "framer-motion";
import { type Skill } from "@shared/schema";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-primary/50 transition-colors duration-300">
        <div className="flex justify-between items-end mb-2">
          <span className="font-display font-semibold text-lg">{skill.name}</span>
          <span className="text-sm text-primary font-mono">{skill.proficiency}%</span>
        </div>
        
        <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
            className="h-full bg-primary relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
