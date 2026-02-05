import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevKit – Build Full-Stack Apps in Minutes, Not Days",
  description:
    "DevKit is an intelligent CLI that generates production-ready full-stack projects automatically. Framework, database, auth, UI – all wired up in one command.",
  keywords: [
    "devkit",
    "cli",
    "full-stack",
    "boilerplate",
    "nextjs",
    "react",
    "prisma",
    "drizzle",
    "authentication",
    "developer tools",
  ],
  authors: [{ name: "DevKit" }],
  openGraph: {
    title: "DevKit – Build Full-Stack Apps in Minutes",
    description:
      "Generate production-ready full-stack projects with a single command. Stop wasting days on boilerplate.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevKit – Build Full-Stack Apps in Minutes",
    description:
      "Generate production-ready full-stack projects with a single command.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050508] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
