import { Header } from "@/components/Header";
import { ClimateHouseHero } from "@/components/ClimateHouseHero";
import { Stats } from "@/components/Stats";
import { EcosystemPillars } from "@/components/EcosystemPillars";
import { ImpactStats } from "@/components/ImpactStats";
import { Spaces } from "@/components/Spaces";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const ClimateHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ClimateHouseHero />
        <Stats />
        <EcosystemPillars />
        <ImpactStats />
        <Spaces />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ClimateHouse;
