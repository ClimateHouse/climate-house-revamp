import { Header } from "@/components/Header";
import { ClimateHouseHero } from "@/components/ClimateHouseHero";
import { EcosystemPillars } from "@/components/EcosystemPillars";
import { ImpactStats } from "@/components/ImpactStats";
import { Spaces } from "@/components/Spaces";
import { ClimateHouseClosing } from "@/components/ClimateHouseClosing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const ClimateHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ClimateHouseHero />
        <Spaces />
        <EcosystemPillars />
        <ImpactStats />
        <ClimateHouseClosing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ClimateHouse;
