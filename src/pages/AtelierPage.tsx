import { Header } from "@/components/Header";
import { Atelier } from "@/components/Atelier";
import { Parcours } from "@/components/Parcours";
import { Calendrier } from "@/components/Calendrier";
import { PedagogicalPartners } from "@/components/PedagogicalPartners";
import { Formats } from "@/components/Formats";
import { TrustedBy } from "@/components/TrustedBy";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const AtelierPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Atelier />
        <PedagogicalPartners />
        <Formats />
        <Calendrier />
        <TrustedBy />
        <Parcours />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AtelierPage;
