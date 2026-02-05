"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";

const PROBLEMS = [
  {
    title: "Boilerplate Hell",
    description:
      "Every project starts with the same repetitive setup: config files, env variables, folder structure, database wiring. Over and over again.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Integration Pain",
    description:
      "Auth + database + UI libraries don't connect smoothly out of the box. You waste hours reading docs and debugging configuration.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: "Inconsistent Architecture",
    description:
      "Teams build projects differently every time. Different folder structures, patterns, and conventions make codebases hard to maintain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Time Loss",
    description:
      "2-3 days of setup before writing a single line of business logic. That's time you could spend building features and shipping products.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function Problems() {
  return (
    <section id="problems" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="blur" className="text-center mb-16">
          <span className="text-red-400 font-mono text-sm mb-4 block">THE PROBLEM</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Setting up projects is <span className="text-red-400">painful</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every developer knows these frustrations. You&apos;ve felt them. We&apos;ve felt them.
            That&apos;s why we built DevKit.
          </p>
        </ScrollReveal>

        {/* Problems Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.15}>
          {PROBLEMS.map((problem) => (
            <StaggerItem key={problem.title} variant="scale">
              <div className="glass rounded-2xl p-6 h-full border-red-500/10 hover:border-red-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transition to solution */}
        <ScrollReveal variant="fade-up" delay={0.3} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-zinc-500">
            <span>There&apos;s a better way</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 animate-bounce">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
