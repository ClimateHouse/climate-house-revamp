import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Mission } from "@/components/Mission";
import { TrustedBy } from "@/components/TrustedBy";
import { Atelier } from "@/components/Atelier";
import { Parcours } from "@/components/Parcours";
import { Formats } from "@/components/Formats";
import { Spaces } from "@/components/Spaces";
import { Community } from "@/components/Community";
import { Bibliotheque } from "@/components/Bibliotheque";
import { Calendrier } from "@/components/Calendrier";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Mission className="mx-0 px-0 py-[40px]" />
        <Atelier />
        <Parcours />
        <Formats />
        <Spaces />
        <Calendrier />
        <Community />
        <Bibliotheque />
        <CTA />
      </main>
      <Footer />
    </div>;
};
export default Index;