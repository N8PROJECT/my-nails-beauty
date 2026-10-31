import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
