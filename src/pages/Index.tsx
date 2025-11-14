import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Mission } from "@/components/Mission";
import { PresidentMessage } from "@/components/PresidentMessage";
import { TrustedBy } from "@/components/TrustedBy";
import { CommunitySummary } from "@/components/CommunitySummary";
import { ScientificPartnership } from "@/components/ScientificPartnership";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Mission className="mx-0 px-0 py-[40px]" />
        <CommunitySummary />
        <ScientificPartnership />
        <PresidentMessage />
        <CTA />
      </main>
      <Footer />
    </div>;
};
export default Index;