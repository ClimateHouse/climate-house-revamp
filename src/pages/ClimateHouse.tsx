import { Header } from "@/components/Header";
import { Spaces } from "@/components/Spaces";
import { Formats } from "@/components/Formats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const ClimateHouse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Spaces />
        <Formats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default ClimateHouse;
