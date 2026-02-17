import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SkillCard } from "../SkillCard";
const skills = [
  { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Laravel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" }, // Next.js is b/w usually, but original is correct. 
  { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "Illustrator", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
  { name: "Photoshop", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "XD", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg" }, // Usually plain
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TensorFlow", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
];

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += 0.5; // Adjust speed as needed

        // If we've scrolled past the first set of items (approx), reset to 0
        // We duplicated items 3 times. The content width is (skills length * item width + gaps).
        // A safer way is checking scrollWidth.
        // If scrollLeft >= scrollWidth / 3, we can reset to 0?
        // Actually, we want to reset when the FIRST SET is fully out of view.
        // scrollWidth = 3 * singleSetWidth.
        // So when scrollLeft >= scrollWidth / 3, we subtract scrollWidth / 3.

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

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

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => {
              // Optional: resume after a delay or immediately
              setIsHovered(false)
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="flex-none w-40 md:w-56">
                <SkillCard
                  name={skill.name}
                  image={skill.image}
                  index={index % skills.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
