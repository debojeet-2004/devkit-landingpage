"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";

const STEPS = [
  {
    number: "01",
    title: "Run the CLI",
    description:
      "Execute a single command to start the interactive setup wizard. No config files, no manual setup.",
    code: "npx devkit init my-app",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose Your Stack",
    description:
      "Select your preferred framework, database, ORM, auth provider, and UI library from curated options.",
    code: "Framework → Database → Auth → UI",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Start Building",
    description:
      "DevKit generates a complete, production-ready project with everything wired up. Just run npm run dev.",
    code: "cd my-app && npm run dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="slide-up" className="text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">HOW IT WORKS</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Three steps to <span className="text-gradient">production</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From zero to a fully configured full-stack application in under a minute.
            No more boilerplate hell.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {STEPS.map((step, index) => (
            <StaggerItem
              key={step.number}
              variant="fade-up"
            >
              <div className="relative group h-full">
                {/* Connector Line */}
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
                )}

                <div className="glass rounded-2xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/5 group-hover:translate-y-[-4px]">
                  {/* Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{step.description}</p>

                  {/* Code snippet */}
                  <div className="font-mono text-sm bg-black/40 rounded-lg px-4 py-3 text-cyan-400 border border-white/5">
                    <span className="text-emerald-400">$</span> {step.code}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
