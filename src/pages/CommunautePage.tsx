import { Header } from "@/components/Header";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const CommunautePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default CommunautePage;
