import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  image: string;
  index: number;
}

export function SkillCard({ name, image, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative"
    >
      <div className="bg-white/10 border border-white/20 rounded-xl p-6 h-full flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-white/20 transition-all duration-500 group-hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
        <div
          className="p-4 bg-white/90 rounded-2xl group-hover:scale-110 transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:animate-shine" />
          <img
            src={image}
            alt={name}
            className="w-12 h-12 transition-all duration-500 relative z-10"
          />
        </div>
        <span className="font-display font-medium text-sm text-center text-zinc-200 group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    </motion.div>
  );
}
