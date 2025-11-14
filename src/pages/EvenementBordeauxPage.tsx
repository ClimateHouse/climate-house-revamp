import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const EvenementBordeauxPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Contenu à venir */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Votre événement à <span className="text-primary">Bordeaux</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Contenu en cours de création...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EvenementBordeauxPage;
