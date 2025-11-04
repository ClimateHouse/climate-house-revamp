import { Header } from "@/components/Header";
import { CommunityHero } from "@/components/CommunityHero";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const CommunautePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CommunityHero />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default CommunautePage;
