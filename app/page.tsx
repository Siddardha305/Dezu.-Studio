import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { Hero2 } from "@/components/sections/Hero2/Hero2";
import { Hero3 } from "@/components/sections/Hero3/Hero3";
import { Hero4 } from "@/components/sections/Hero4/Hero4";
import { Hero5 } from "@/components/sections/Hero5/Hero5";
import { Hero6 } from "@/components/sections/Hero6/Hero6";


import { Hero7 } from "@/components/sections/Hero7/Hero7";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero7 />
        <Hero5 />
        <Hero6 />
      </main>
      <FloatingNav />
      <Footer />
    </div>
  );
}
