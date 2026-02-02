// src/components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { MeshBackground } from "../MeshBackground"; // correct relative path

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* MESH BACKGROUND */}
      <MeshBackground />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* IMAGE WITH SUBTLE GLOW */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative mt-20"
        >
          {/* Optional subtle glow behind image */}
          <div className="absolute -inset-2 -z-10 rounded-t-full rounded-b-none blur-[60px] bg-gradient-to-t from-primary/40 via-cyan-400/20 to-transparent" />

          <img
            src="/khalil.png"
            alt="Khalil"
            className="
              w-36 h-56 sm:w-40 sm:h-60 md:w-64 md:h-80 lg:w-56 lg:h-[19rem]
              object-cover shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              border-4 border-white
              rounded-t-full rounded-b-none
            "
          />

          {/* BLACK FADE AT BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-none rounded-t-full" />
        </motion.div>

        {/* HERO TEXT */}
        <div className="relative -mt-20 md:-mt-32 text-center z-20 space-y-3 px-6 py-4">
          {/* CINEMATIC FADE BEHIND TEXT */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/95 via-black/70 to-transparent blur-xl" />

          <h1 className="text-4xl md:text-6xl font-display text-gradient drop-shadow-2xl">
            Hey, I’m Khalil
          </h1>
          <h2 className="text-4xl md:text-6xl font-display text-gradient-primary drop-shadow-2xl">
            Full-Stack Developer
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg">
            I build scalable, modern web applications with clean architecture,
            strong logic, and production-ready code.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <ScrollLink
            to="projects"
            className="mt-2 px-4 py-2 text-sm text-black border border-primary/40 bg-primary  hover:bg-primary/60 transition"
          >
            View Work ↓
          </ScrollLink>
        </div>
      </div>


    </section>
  );
}
