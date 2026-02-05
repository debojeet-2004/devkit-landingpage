"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";

const STACK_CATEGORIES = [
  {
    name: "Frameworks",
    items: ["Next.js", "Remix", "Nuxt", "SvelteKit"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    name: "Providers",
    items: ["Neon", "Supabase", "PlanetScale", "Turso"],
  },
  {
    name: "ORMs",
    items: ["Drizzle", "Prisma", "Kysely"],
  },
  {
    name: "Authentication",
    items: ["BetterAuth", "NextAuth", "Clerk", "Lucia"],
  },
  {
    name: "UI & Payments",
    items: ["shadcn/ui", "Tailwind", "Stripe", "LemonSqueezy"],
  },
];

export function SupportedStack() {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px] translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="blur" className="text-center mb-20">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">SUPPORTED STACK</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Works with tools you <span className="text-gradient">already love</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            DevKit supports the most popular frameworks, databases, and tools in the
            modern web development ecosystem.
          </p>
        </ScrollReveal>

        {/* Stack Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {STACK_CATEGORIES.map((category) => (
            <StaggerItem
              key={category.name}
              variant="scale"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal variant="fade-up" delay={0.2} className="text-center text-zinc-500 text-sm mt-12">
          <p>
            More integrations coming soon. Have a request?{" "}
            <a href="#" className="text-cyan-400 hover:underline">
              Let us know →
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
