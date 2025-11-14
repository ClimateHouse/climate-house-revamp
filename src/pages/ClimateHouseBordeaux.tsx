import { Header } from "@/components/Header";
import { ClimateHouseBordeauxHero } from "@/components/ClimateHouseBordeauxHero";
import { OcubeSpaces } from "@/components/OcubeSpaces";
import { OcubeServices } from "@/components/OcubeServices";
import { OcubeLocation } from "@/components/OcubeLocation";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const ClimateHouseBordeaux = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ClimateHouseBordeauxHero />
        <OcubeSpaces />
        <OcubeServices />
        <OcubeLocation />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ClimateHouseBordeaux;
