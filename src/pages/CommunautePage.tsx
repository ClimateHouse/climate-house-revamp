import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { CommunityHero } from "@/components/CommunityHero";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const CommunautePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Gérer l'affichage du bouton scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CommunityHero />
        <Community />
      </main>

      {/* Bouton Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-strong z-50 animate-fade-in"
          aria-label="Remonter en haut de la page"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default CommunautePage;
