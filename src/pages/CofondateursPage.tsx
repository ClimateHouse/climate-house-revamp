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

// Liste des cofondateurs
const cofondateurs = [
  { name: "Céline RÉMY", company: "Angel Investor & Co-Founder @ Neoness & Episod", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CR" },
  { name: "Olivier RENAUD", company: "Co-Founder & Investor @ Tech for Climate", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "OR" },
  { name: "Charlotte CHENEVIER", company: "Co-Founder @ The Fat Broccoli & Agence Alignée", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CC" },
  { name: "Renaud VISAGE", company: "Co-Founder @ Slate VC + Eventbrite", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "RV" },
  { name: "Sarah HUET", company: "Co-Founder @ AFemaleAgency & Leia Capital", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "SH" },
  { name: "Maxime BLONDEAU", company: "Founder @ Cosmorama & AlmaMater", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MB" },
  { name: "Olivier CUEILLE", company: "Co-Founder @ microDON", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "OC" },
  { name: "Lucie BASCH", company: "Co-Founder @ Too Good To Go @ Poppins", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "LB" },
  { name: "Nabil HMAMA", company: "VC investor & Founder @ QLAY", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NH" },
  { name: "Laurence GRANDCOLAS", company: "Founder @ MySezame", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "LG" },
  { name: "Mamadou DEMBELE", company: "Founder @ The Impact Story", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MD" },
  { name: "Julia BIJAOUI", company: "Co-Founder @ Frichti & Selar", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "JB" },
  { name: "Alexandra PALT", company: "Présidente @ WWF France", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AP" },
  { name: "Thierry PETIT", company: "CEO & business angel @ Made For All", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "TP" },
  { name: "Souad BOUTEGRABET", company: "Founder @ DesCodeuses", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "SB" },
  { name: "Thibault LAMARQUE", company: "Founder @ Castalie", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TL" },
  { name: "Solenne OJEA-DEVYS", company: "General Director @ OKKO HOTELS", sector: "Hospitality", batch: "COFO #1", image: "", linkedin: "#", initials: "SO" },
  { name: "Vincent STUHLEN", company: "Investor & Founder @ IMPACT LABS.earth", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "VS" },
  { name: "Galo DIALLO", company: "Founder & CEO @ Smile Conseil", sector: "Conseil", batch: "COFO #1", image: "", linkedin: "#", initials: "GD" },
  { name: "Khadija NEMRI", company: "General Director @ L'École de la 2e Chance", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "KN" },
  { name: "Quentin BORDET", company: "Creator @ L'Œuvre & Co-founder @ Les Collectifs", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "QB" },
  { name: "Maud CAILLAUX", company: "Co-Founder @ Green Got", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "MC" },
  { name: "Mohamed EL IDRISSI", company: "Founder @ SPARK Club & PANIER!", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "ME" },
  { name: "Olivia BLANCHARD", company: "Présidente @ Association des acteurs de la finance durable", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "OB" },
  { name: "Juliette DELANOË", company: "Co-Founder @ Ubble", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "JD" },
  { name: "Ano KUHANATHAN", company: "Head of Corporate Research @ Allianz", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "AK" },
  { name: "Delphine DE CANECAUDE", company: "Founder @ Etoile Rouge", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "DC" },
  { name: "Xavier DURAND", company: "Co-Founder @ Chilli", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "XD" },
  { name: "Charlotte RIVATON", company: "Co-CEO @ Exhibitgroup", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "CR" },
  { name: "Rodolphe LANDEMAINE", company: "Fondateur @ Maison Landemaine Land & Monkeys", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "RL" },
  { name: "Josef BOVET", company: "Angel investor & Co-founder @ Tiller", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JB" },
  { name: "Julie GOSALVEZ", company: "Board Chairwoman @ AFEN", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JG" },
  { name: "Clement ALTERESCO", company: "Founder & CEO de Morning", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CA" },
  { name: "Sophie DARRIERE", company: "Co-founder @ Label Experience", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "SD" },
  { name: "Jack HABRA", company: "Investor & Founder @ Context", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JH" },
  { name: "Claire BRETTON", company: "Co-Founder & CEO @ Underdog", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "CB" },
  { name: "Maud MIELVAQUE", company: "Co-Fondatrice @ adaptation/s", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MM" },
  { name: "Abdelaali EL BADAOUI", company: "Founder @ Banlieues Santé & Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AE" },
  { name: "Béatrice EASTHAM", company: "Founder @ Green Evénements & Climeet", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "BE" },
  { name: "Cedric SELLIN", company: "Investor & Co-Founder @ Auxilium Foundation", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "CS" },
  { name: "Marie DEWAVRIN", company: "Venture Partner @ Peakbridge", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "MD" },
  { name: "Dimitri FARBER GARCIA CAMINATI", company: "Impact investor & Co-Founder @ Tiller", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "DF" },
  { name: "Dimitri CAUDRELIER", company: "Co-Founder @ Reboat & Shape Transition", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "DC" },
  { name: "Kako DUBS", company: "Founder @ WAAAS", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "KD" },
  { name: "Moussa CAMARA", company: "Founder @ Les Déterminés", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MC" },
  { name: "Kelly MERRAN", company: "Founder @ MIRAA & Orgaanic", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "KM" },
  { name: "Yamina AÎSSA ABDI", company: "Co-Founder @ Au Coeur de ma Cantine", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "YA" },
  { name: "Fanny BERNARD", company: "General Director @ BuyYourWay", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "FB" },
  { name: "Nathalie BALLA", company: "Investor & Board Member @ Criteo", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NB" },
  { name: "Nicolas MORBY", company: "CEO @ Cozétik (ESUS)", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "NM" },
  { name: "Bérengère LEHEMBRE", company: "Co-Founder @ Asterion Ventures", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "BL" },
  { name: "Quentin VACHER", company: "CEO & Co-Founder @ Frichti", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "QV" },
  { name: "Lara PAGNIER", company: "Co-Founder @ Standard Deviation", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "LP" },
  { name: "Bruno MENU", company: "Co-Founder @ Granular Energy", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "BM" },
  { name: "Paul CHAUMONT", company: "Senior Director of PM @ Integral Ad Science", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "PC" },
  { name: "Eva SADOUN", company: "Founder @ Rift & Co-Founder @ LITA.co", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "ES" },
  { name: "Marc BATTY", company: "Co-Founder & Chairman @ Fermes En ViE", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MB" },
  { name: "Loubna KSIBI", company: "Co-Founder @ Meet my Mama", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "LK" },
  { name: "Nicolas BENSIGNOR", company: "Entrepreneur & Investor", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NB" },
  { name: "Christine KOLB", company: "Co-Founder @ Sycomore Asset Management", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "CK" },
  { name: "Inès SEDDIKI", company: "Co-Founder @ GHETTUP", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "IS" },
  { name: "Bertrand JELENSPERGER", company: "Co-Founder @ The Fork & CEO Mure", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "BJ" },
  { name: "Alizée LOZAC'HMEUR", company: "Co-Founder @ Makesense", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AL" },
  { name: "Feris BARKAT", company: "Co-founder @ Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "FB" },
  { name: "Pascale GUIFFANT", company: "Co-Founder & GM @ Open Lande", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "PG" },
  { name: "Pierre-Yves SANCHIS", company: "Cofounder @ Youmatter", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "PS" },
  { name: "Nicolas CRESTIN", company: "Co-Founder @ Sami", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "NC" },
  { name: "Roxanne VARZA", company: "Director @ STATION F", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "RV" },
  { name: "Serge MAGDALEINE", company: "CEO @ LCL", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "SM" },
  { name: "Sanaa SAITOULI-TARAORE", company: "Co-Founder @ Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "SS" },
  { name: "Olivier COTINAT", company: "Co-CEO @ MoHo & Schoolab", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "OC" },
  { name: "Clara DELÉTRAZ", company: "Founder @ ENSEMBLE(S)", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CD" },
  { name: "Anne-Sophie PASTEL DUBANTON", company: "Co-Founder @ Life Flowing & EcoXtract", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AP" },
  { name: "Taoufik VALLIPURAM", company: "Board Member @ BCorp France & Connector @ Ouishare", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TV" },
  { name: "Camille DELAMAR", company: "Co-Founder @ EcoTable", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "CD" },
  { name: "Tristan LECOMTE", company: "Founder @ PUR Projet & Second Life", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TL" },
  { name: "Laura BEAULIER", company: "CEO @ Climate Dividends", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "LB" },
  { name: "Souba BRUNEL", company: "Founder @ Les Impactrices", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "SB" },
  { name: "Violaine TARDIEU", company: "Chief of Staff to Lucie BASCH", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "VT" },
  // COFO #2
  { name: "Alexandre SCHULLER", company: "PUR, Climate Club, Impact Labs, Altea", sector: "Impact", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/alexandreschouler/", initials: "AS" },
  { name: "Antoine CADI", company: "Tétras Restore FDB", sector: "Impact", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/antoine-cadi-2376a857/", initials: "AC" }
];

const sectors = ["Tous", "Impact", "Finance", "Tech", "Food", "Conseil", "Événementiel", "Hospitality"];
const batches = ["Tous", "COFO #1", "COFO #2"];

const CofondateursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous");
  const [selectedBatch, setSelectedBatch] = useState("Tous");

  const filteredCofondateurs = cofondateurs.filter(cofo => {
    const matchesSearch = cofo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cofo.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "Tous" || cofo.sector === selectedSector;
    const matchesBatch = selectedBatch === "Tous" || cofo.batch === selectedBatch;
    return matchesSearch && matchesSector && matchesBatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-soft overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">82 Cofondateurs</span>
              </div>
              <p className="text-xl text-muted-foreground">
                82 entrepreneurs visionnaires à parité femmes-hommes, qui ont uni leurs forces
                pour créer le premier lieu dédié à l'action climatique en France
              </p>
            </div>

            {/* Filtres et Recherche */}
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
              <div className="flex flex-wrap gap-2 justify-center mb-6">
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

              {/* Filtres par batch */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {batches.map((batch) => (
                  <Button
                    key={batch}
                    variant={selectedBatch === batch ? "default" : "outline"}
                    onClick={() => setSelectedBatch(batch)}
                    className="rounded-full"
                    size="sm"
                  >
                    {batch}
                  </Button>
                ))}
              </div>

              {/* Compteur */}
              <div className="text-center">
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
                    className="p-4 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in group relative"
                    style={{ animationDelay: `${(index % 24) * 30}ms` }}
                  >
                    {cofo.batch === "COFO #1" && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 bg-background/80 backdrop-blur-sm">
                          #1
                        </Badge>
                      </div>
                    )}
                    {cofo.batch === "COFO #2" && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 bg-background/80 backdrop-blur-sm">
                          #2
                        </Badge>
                      </div>
                    )}
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
                      setSelectedBatch("Tous");
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
