import { Component, Palette, Server } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 relative z-0   overflow-hidden">
      {/* STATIC WAVE BACKGROUND */}
      <div className="absolute inset-0 z-[-1] flex items-center justify-center translate-y-20   pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M 1000 200 C 800 550, 650 550, 500 200 C 350 -100, 200 -100, 0 200"
            fill="none"
            stroke="hsl(var(--primary))"
            style={{ strokeWidth: "0.8rem" }}
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid md:grid-cols-3 gap-9 containerr mx-auto px-4 ">
        {/* Card 1: Product Design */}
        <div className="glass-card p-8 flex flex-col  gap-4 hover:border-primary/50 transition-all duration-300 group">
          <div className="pt-4 pb-8 rounded-full ">
            <Palette size={32} />
          </div>
          <h3 className="text-xl font-bold mt-10">Product  <br />   Design</h3>
          <p className="text-muted-foreground text-sm">
            20+ Projects
          </p>
        </div>

        {/* Card 2: Frontend Development */}
        <div className="glass-card p-8 flex flex-col  gap-4 hover:border-primary/50 transition-all duration-300 group">
          <div className="pt-4 pb-8 rounded-full ">
            <Component size={32} />
          </div>
          <h3 className="text-xl font-bold mt-10">Frontend Development</h3>
          <p className="text-muted-foreground text-sm">
            15+ Projects
          </p>
        </div>

        {/* Card 3: Backend Development */}
        <div className="glass-card p-8 flex flex-col  gap-4 hover:border-primary/50 transition-all duration-300 group">
          <div className="pt-4 pb-8 rounded-full ">
            <Server size={32} />
          </div>
          <h3 className="text-xl font-bold mt-10">Backend Development</h3>
          <p className="text-muted-foreground text-sm">
            10+ Projects
          </p>
        </div>
      </div>
    </section>
  );
}
