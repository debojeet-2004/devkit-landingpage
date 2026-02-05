import {
  Navbar,
  Hero,
  Problems,
  HowItWorks,
  InteractiveStackDemo,
  SupportedStack,
  Features,
  Comparison,
  CTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050508] noise">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <InteractiveStackDemo />
        <Features />
        <SupportedStack />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
