"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

const MANUAL_STEPS = [
  "Create Next.js project",
  "Install and configure Tailwind",
  "Set up PostgreSQL locally or cloud",
  "Install and configure Prisma/Drizzle",
  "Create database schema",
  "Run migrations",
  "Install auth library",
  "Configure auth providers",
  "Set up session handling",
  "Install shadcn/ui",
  "Configure components",
  "Set up environment variables",
  "Configure ESLint & Prettier",
  "Set up TypeScript paths",
];

const DEVKIT_STEPS = [
  "Run npx devkit init",
  "Select your preferences",
  "Start building",
];

export function Comparison() {
  return (
    <section id="comparison" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="slide-up" className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">COMPARISON</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Stop wasting <span className="text-gradient">setup days</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            See the difference between setting up a project manually versus using DevKit.
          </p>
        </ScrollReveal>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Manual Setup */}
          <ScrollReveal variant="fade-right" duration={0.7}>
            <div className="glass rounded-2xl p-8 h-full border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Manual Setup</h3>
                  <p className="text-sm text-zinc-500">2-3 days of configuration</p>
                </div>
              </div>

              <div className="space-y-2">
                {MANUAL_STEPS.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <span className="text-xs text-zinc-600 font-mono w-5">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-400">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Total time</span>
                  <span className="text-red-400 font-semibold">16+ hours</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* DevKit Setup */}
          <ScrollReveal variant="fade-left" delay={0.15} duration={0.7}>
            <div className="relative glass rounded-2xl p-8 h-full gradient-border">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/5" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-cyan-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">With DevKit</h3>
                    <p className="text-sm text-emerald-400">Under 2 minutes</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {DEVKIT_STEPS.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-black">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Everything pre-configured
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Production-ready defaults
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Best practices baked in
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Total time</span>
                    <span className="text-emerald-400 font-semibold">~47 seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Time Saved */}
        <ScrollReveal variant="scale" delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full glass hover:scale-105 transition-transform">
            <span className="text-zinc-400">Time saved per project:</span>
            <span className="text-2xl font-bold text-gradient">99.9%</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
