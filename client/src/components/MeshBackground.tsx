import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full mesh-gradient-1 blur-[100px]"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [50, -50, 50],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mesh-gradient-2 blur-[100px]"
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 2px, transparent 2px),
                           linear-gradient(to bottom, #ffffff 2px, transparent 2px)`,
          backgroundSize: '2.5rem 2.5rem',
          maskImage: 'radial-gradient(ellipse 40% 50% at 50% 50%, #000 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 40% 50% at 50% 50%, #000 10%, transparent 80%)'
        }}
      />
    </div>
  );
}
