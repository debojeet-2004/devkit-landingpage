"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

const STACK_OPTIONS = {
  framework: {
    label: "Framework",
    options: ["Next.js 15", "Remix", "Nuxt 3", "SvelteKit"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  database: {
    label: "Database",
    options: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  provider: {
    label: "Provider",
    options: ["Neon", "Supabase", "PlanetScale", "Turso", "Local"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  orm: {
    label: "ORM",
    options: ["Drizzle", "Prisma", "Kysely"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  auth: {
    label: "Authentication",
    options: ["BetterAuth", "NextAuth", "Clerk", "Lucia"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  ui: {
    label: "UI Library",
    options: ["shadcn/ui", "Tailwind Only", "MUI", "Chakra UI"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
};

type StackCategory = keyof typeof STACK_OPTIONS;

interface Selections {
  framework: string;
  database: string;
  provider: string;
  orm: string;
  auth: string;
  ui: string;
}

const DEFAULT_SELECTIONS: Selections = {
  framework: "Next.js 15",
  database: "PostgreSQL",
  provider: "Neon",
  orm: "Drizzle",
  auth: "BetterAuth",
  ui: "shadcn/ui",
};

function generateCLIOutput(selections: Selections, projectName: string): Array<{ type: string; content: string }> {
  const frameworkCmd = selections.framework.toLowerCase().replace(/[\s.]/g, "-").replace(/--+/g, "-");
  const dbConfig = selections.provider === "Local" ? "localhost" : selections.provider.toLowerCase();
  
  return [
    { type: "prompt", content: "~" },
    { type: "command", content: ` npx devkit init ${projectName}` },
    { type: "empty", content: "" },
    { type: "info", content: "◆  DevKit v1.0.0" },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select framework:" },
    { type: "selected", content: `   ● ${selections.framework}` },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select database:" },
    { type: "selected", content: `   ● ${selections.database}` },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select database provider:" },
    { type: "selected", content: `   ● ${selections.provider}` },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select ORM:" },
    { type: "selected", content: `   ● ${selections.orm}` },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select authentication:" },
    { type: "selected", content: `   ● ${selections.auth}` },
    { type: "empty", content: "" },
    { type: "question", content: "◇  Select UI library:" },
    { type: "selected", content: `   ● ${selections.ui}` },
    { type: "empty", content: "" },
    { type: "step", content: `◐  Creating ${frameworkCmd} project...` },
    { type: "step", content: "◐  Installing dependencies..." },
    { type: "step", content: `◐  Configuring ${selections.database} with ${selections.orm}...` },
    { type: "step", content: `◐  Connecting to ${dbConfig}...` },
    { type: "step", content: `◐  Setting up ${selections.auth}...` },
    { type: "step", content: `◐  Adding ${selections.ui} components...` },
    { type: "empty", content: "" },
    { type: "success", content: "◆  Project created successfully!" },
    { type: "empty", content: "" },
    { type: "output", content: `   cd ${projectName}` },
    { type: "output", content: "   npm run dev" },
    { type: "empty", content: "" },
    { type: "ready", content: "✓  Ready in 47 seconds" },
  ];
}

function getLineColor(type: string): string {
  switch (type) {
    case "prompt":
      return "text-emerald-400";
    case "command":
      return "text-cyan-400";
    case "info":
      return "text-violet-400";
    case "question":
      return "text-zinc-400";
    case "selected":
      return "text-cyan-400";
    case "step":
      return "text-amber-400";
    case "success":
      return "text-emerald-400";
    case "output":
      return "text-zinc-500";
    case "ready":
      return "text-emerald-400 font-semibold";
    default:
      return "text-zinc-400";
  }
}

function StackSelector({
  config,
  selected,
  onSelect,
}: {
  config: typeof STACK_OPTIONS[StackCategory];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <span className="text-cyan-400">{config.icon}</span>
        <span>{config.label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {config.options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-200 ${
              selected === option
                ? "bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-cyan-500/50 text-cyan-400"
                : "bg-white/5 border-white/10 text-zinc-400 hover:border-cyan-500/30 hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function InteractiveCLI({
  selections,
  projectName,
}: {
  selections: Selections;
  projectName: string;
}) {
  const cliLines = useMemo(
    () => generateCLIOutput(selections, projectName),
    [selections, projectName]
  );

  return (
    <div className="terminal rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 h-full">
      {/* Terminal Header */}
      <div className="terminal-header px-4 py-3 flex items-center gap-2 bg-[#18181b]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-4 text-xs text-zinc-500 font-mono">Terminal — devkit</span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 min-h-[400px] max-h-[500px] overflow-y-auto bg-[#0c0c10]">
        <AnimatePresence mode="sync">
          {cliLines.map((line, index) => (
            <motion.div
              key={`${index}-${line.content}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, delay: index * 0.02 }}
              className={`font-mono text-sm leading-relaxed ${getLineColor(line.type)}`}
            >
              {line.type === "prompt" ? (
                <span>
                  <span className="text-emerald-400">❯</span>
                  <span className="text-zinc-500"> ~/projects</span>
                </span>
              ) : line.content === "" ? (
                <div className="h-4" />
              ) : (
                <span>{line.content}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm mt-2"
        >
          <span className="text-emerald-400">❯</span>
          <span className="text-zinc-500"> ~/projects/{projectName}</span>
          <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-terminal-cursor" />
        </motion.div>
      </div>
    </div>
  );
}

export function InteractiveStackDemo() {
  const [selections, setSelections] = useState<Selections>(DEFAULT_SELECTIONS);
  const [projectName, setProjectName] = useState("my-saas-app");

  const handleSelect = (category: StackCategory, value: string) => {
    setSelections((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <section id="try-it" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal variant="blur" className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm mb-4 block">TRY IT YOURSELF</span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Build your <span className="text-gradient">perfect stack</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Select your preferred technologies and see exactly what DevKit will generate.
            Every combination is production-ready.
          </p>
        </ScrollReveal>

        {/* Interactive Demo */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Selector Panel */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Configure Your Stack</h3>
                <button
                  onClick={() => setSelections(DEFAULT_SELECTIONS)}
                  className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors"
                >
                  Reset to defaults
                </button>
              </div>

              {/* Project Name Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-zinc-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                  </svg>
                  <span>Project Name</span>
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white font-mono text-sm focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="my-app"
                />
              </div>

              <div className="h-px bg-white/10" />

              {/* Stack Selectors */}
              {(Object.keys(STACK_OPTIONS) as StackCategory[]).map((category) => (
                <StackSelector
                  key={category}
                  config={STACK_OPTIONS[category]}
                  selected={selections[category]}
                  onSelect={(value) => handleSelect(category, value)}
                />
              ))}

              {/* Summary */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Your command:</span>
                  <code className="font-mono text-cyan-400 bg-black/40 px-3 py-1 rounded-lg">
                    npx devkit init {projectName}
                  </code>
                </div>
              </div>
            </div>

            {/* CLI Preview */}
            <div className="flex flex-col">
              <InteractiveCLI selections={selections} projectName={projectName} />
            </div>
          </div>
        </ScrollReveal>

        {/* Feature callouts */}
        <ScrollReveal variant="fade-up" delay={0.2}>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-emerald-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span>Type-safe from DB to UI</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span>Ready in under 1 minute</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-violet-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <span>Best practices built-in</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
