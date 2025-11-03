import { Header } from "@/components/Header";
import { CommunityHero } from "@/components/CommunityHero";
import { Community } from "@/components/Community";
import { CommunityClosing } from "@/components/CommunityClosing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const CommunautePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CommunityHero />
        <Community />
        <CommunityClosing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default CommunautePage;
