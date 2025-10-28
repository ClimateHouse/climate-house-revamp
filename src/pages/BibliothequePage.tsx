import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bibliotheque } from "@/components/Bibliotheque";

const BibliothequePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Bibliotheque />
      </main>
      <Footer />
    </div>
  );
};

export default BibliothequePage;
