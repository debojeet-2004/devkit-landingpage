"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CLI_LINES = [
  { type: "prompt", content: "~" },
  { type: "command", content: " npx devkit init my-saas-app" },
  { type: "empty", content: "" },
  { type: "info", content: "◆  DevKit v1.0.0" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select framework:" },
  { type: "selected", content: "   ● Next.js 15" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select database:" },
  { type: "selected", content: "   ● PostgreSQL" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select database provider:" },
  { type: "selected", content: "   ● Neon" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select ORM:" },
  { type: "selected", content: "   ● Drizzle" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select authentication:" },
  { type: "selected", content: "   ● BetterAuth" },
  { type: "empty", content: "" },
  { type: "question", content: "◇  Select UI library:" },
  { type: "selected", content: "   ● shadcn/ui" },
  { type: "empty", content: "" },
  { type: "step", content: "◐  Creating project structure..." },
  { type: "step", content: "◐  Installing dependencies..." },
  { type: "step", content: "◐  Configuring database..." },
  { type: "step", content: "◐  Setting up authentication..." },
  { type: "step", content: "◐  Adding UI components..." },
  { type: "empty", content: "" },
  { type: "success", content: "◆  Project created successfully!" },
  { type: "empty", content: "" },
  { type: "output", content: "   cd my-saas-app" },
  { type: "output", content: "   npm run dev" },
  { type: "empty", content: "" },
  { type: "ready", content: "✓  Ready in 47 seconds" },
];

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

export function CLIDemo() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines < CLI_LINES.length) {
      const line = CLI_LINES[visibleLines];
      const delay = line.type === "command" ? 80 : line.type === "step" ? 400 : 120;

      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [visibleLines]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="terminal rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
        {/* Terminal Header */}
        <div className="terminal-header px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs text-zinc-500 font-mono">Terminal</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 min-h-[420px] overflow-hidden">
          <AnimatePresence mode="sync">
            {CLI_LINES.slice(0, visibleLines).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={`font-mono text-sm leading-relaxed ${getLineColor(line.type)}`}
              >
                {line.type === "prompt" ? (
                  <span>
                    <span className="text-emerald-400">❯</span>
                    <span className="text-zinc-500"> ~/projects</span>
                    {visibleLines === index + 1 && isTyping && (
                      <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-terminal-cursor" />
                    )}
                  </span>
                ) : line.content === "" ? (
                  <div className="h-4" />
                ) : (
                  <span>{line.content}</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show cursor at end when done */}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-sm mt-2"
            >
              <span className="text-emerald-400">❯</span>
              <span className="text-zinc-500"> ~/projects/my-saas-app</span>
              <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-terminal-cursor" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
