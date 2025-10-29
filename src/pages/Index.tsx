import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Mission } from "@/components/Mission";
import { TrustedBy } from "@/components/TrustedBy";
import { CommunitySummary } from "@/components/CommunitySummary";
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
        <TrustedBy />
        <CTA />
      </main>
      <Footer />
    </div>;
};
export default Index;