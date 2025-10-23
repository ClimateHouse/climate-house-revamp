import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Mission } from "@/components/Mission";
import { Spaces } from "@/components/Spaces";
import { Community } from "@/components/Community";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <Spaces />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
