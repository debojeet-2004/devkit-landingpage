"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-violet-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal variant="scale">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 hover:scale-105 transition-transform">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-zinc-400">Open Source & Free</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="blur" delay={0.1}>
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to build
            <br />
            <span className="text-gradient-animated">faster than ever?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Stop wasting time on boilerplate. Start shipping features.
            Generate your next project in under a minute.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={0.2}>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-semibold px-8 h-14 text-lg glow animate-pulse-glow hover:scale-105 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 mr-2"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              npx devkit init
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 px-8 h-14 text-lg hover:scale-105 transition-transform"
            >
              Read the Docs
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4 ml-2"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </ScrollReveal>

        {/* Command Copy */}
        <ScrollReveal variant="fade-up" delay={0.3} className="mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black/60 border border-white/10 font-mono text-sm hover:border-cyan-500/30 transition-colors">
            <span className="text-emerald-400">$</span>
            <span className="text-zinc-300">npx devkit init my-awesome-app</span>
            <button
              className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-zinc-500 hover:text-white"
              onClick={() => navigator.clipboard.writeText("npx devkit init my-awesome-app")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
