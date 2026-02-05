"use client";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-black"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <span className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} DevKit. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Discord
            </a>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-zinc-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
