import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Search, Users } from "lucide-react";
import wallImage from "@/assets/cofondateurs-wall.jpg";

// Liste des cofondateurs - structure extensible
const cofondateurs = [
  { 
    name: "Henri-François MARTIN", 
    company: "Climate House", 
    sector: "Impact",
    image: "", 
    linkedin: "https://www.linkedin.com/in/henri-françoismartin/",
    initials: "HM"
  },
  { 
    name: "Maika NUTI", 
    company: "Climate House", 
    sector: "Impact",
    image: "", 
    linkedin: "#",
    initials: "MN"
  },
  // Ajoutez ici les autres cofondateurs
  // Structure répétable pour faciliter l'ajout de nouveaux membres
].concat(
  // Génération de cofondateurs exemples pour démonstration
  Array.from({ length: 78 }, (_, i) => ({
    name: `Cofondateur ${i + 3}`,
    company: `Entreprise ${i + 3}`,
    sector: ["Impact", "Finance", "Tech", "Conseil", "Industrie"][i % 5],
    image: "",
    linkedin: "#",
    initials: `C${i + 3}`
  }))
);

const sectors = ["Tous", "Impact", "Finance", "Tech", "Conseil", "Industrie"];

const CofondateursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous");

  const filteredCofondateurs = cofondateurs.filter(cofo => {
    const matchesSearch = cofo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cofo.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "Tous" || cofo.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-soft overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">80 Cofondateurs</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Les Cofondateurs de Climate House
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                80 entrepreneurs visionnaires à parité femmes-hommes, qui ont uni leurs forces
                pour créer le premier lieu dédié à l'action climatique en France
              </p>
            </div>

            {/* Image du mur */}
            <div className="max-w-5xl mx-auto mb-12 animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src={wallImage}
                  alt="Mur des 80 cofondateurs Climate House"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                    Une vision collective
                  </h3>
                  <p className="text-lg text-primary-foreground/90">
                    Ensemble pour transformer l'économie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtres et Recherche */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Barre de recherche */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher un cofondateur ou une entreprise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>

              {/* Filtres par secteur */}
              <div className="flex flex-wrap gap-2 justify-center">
                {sectors.map((sector) => (
                  <Button
                    key={sector}
                    variant={selectedSector === sector ? "default" : "outline"}
                    onClick={() => setSelectedSector(sector)}
                    className="rounded-full"
                  >
                    {sector}
                  </Button>
                ))}
              </div>

              {/* Compteur */}
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  {filteredCofondateurs.length} cofondateur{filteredCofondateurs.length > 1 ? 's' : ''} affiché{filteredCofondateurs.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille des cofondateurs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredCofondateurs.map((cofo, index) => (
                  <Card
                    key={`${cofo.name}-${index}`}
                    className="p-4 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
                    style={{ animationDelay: `${(index % 24) * 30}ms` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <Avatar className="h-20 w-20 border-2 border-border group-hover:border-primary transition-colors duration-300">
                          <AvatarImage src={cofo.image} alt={cofo.name} />
                          <AvatarFallback className="text-base font-semibold bg-primary/10">
                            {cofo.initials}
                          </AvatarFallback>
                        </Avatar>
                        {cofo.linkedin !== "#" && (
                          <a
                            href={cofo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                            aria-label={`LinkedIn de ${cofo.name}`}
                          >
                            <Linkedin className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2 min-h-[2.5rem]">
                        {cofo.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                        {cofo.company}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {cofo.sector}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredCofondateurs.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">
                    Aucun cofondateur trouvé
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSector("Tous");
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez le mouvement
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vous partagez notre vision d'une économie au service du climat ?
                Devenez membre de notre communauté et participez à la transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
                  <a href="#contact">Devenir résident</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#communaute">Découvrir la communauté</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CofondateursPage;
