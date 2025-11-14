import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Building2, Coffee, Plus, Minus, Users } from "lucide-react";
import { useState } from "react";
import ocubeMeetingSpace from "@/assets/ocube-meeting-space.jpg";
import ocubePrivateRoom from "@/assets/ocube-private-room.jpg";
import bordeauxChartrons from "@/assets/bordeaux-chartrons.jpg";
import bordeauxRueNotreDame from "@/assets/bordeaux-rue-notre-dame.jpg";
import traiteurFoodImage from "@/assets/traiteur-food-2.jpg";

// Types d'événements Bordeaux
const eventTypes = [
  {
    icon: Sparkles,
    title: "Afterworks & moments partagés",
    description: "À la tombée du jour, Ocube se transforme en un espace de détente et d'échanges.",
    features: [
      "Afterworks dans une atmosphère chaleureuse et inspirante",
      "Cocktails professionnels au cœur des Chartrons",
      "Conférences et expositions dans un cadre unique",
      "Vivez vos soirées professionnelles autrement"
    ],
    image: bordeauxChartrons
  },
  {
    icon: Users,
    title: "L'Atelier",
    description: "Un espace modulable de 45 m² avec terrasse privative, idéal pour vos réunions, workshops, ateliers créatifs ou formations.",
    features: [
      "45 m² d'espace lumineux et modulable",
      "Terrasse privative pour vos pauses",
      "Cadre apaisant pensé pour stimuler les idées",
      "Favorise la collaboration et la créativité"
    ],
    image: ocubeMeetingSpace
  },
  {
    icon: Building2,
    title: "Privatisation de l'espace",
    description: "Pour vos événements d'envergure, privatisez Ocube dans son intégralité.",
    features: [
      "Un lieu unique à Bordeaux",
      "Modulable selon vos besoins",
      "Alliant intimité, flexibilité et caractère",
      "Accompagné par une équipe attentive et passionnée"
    ],
    image: ocubePrivateRoom
  }
];

const EvenementBordeauxPage = () => {
  const [showAllPartners, setShowAllPartners] = useState(false);
  
  const partners = [
    "BAPBAP",
    "OÉ",
    "MAMOSSA",
    "LE RECHO",
    "LES CUISTOTS MIGRATEURS",
    "MEET MY MAMA",
    "CAUSSES",
    "LES MARMITES VOLANTES",
    "MÛRE",
    "SOSA PARIS",
    "ON MANGE QUOI ?",
    "CUISINE SANS FRONTIÈRES",
    "BEELIV",
    "POTAGE",
    "PEAS AND LOVE",
    "KELBONGOO",
    "MAISON MARCHAND",
    "LA BELLE ASSIETTE",
    "PLATEAU REPAS"
  ];

  const displayedPartners = showAllPartners ? partners : partners.slice(0, 9);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center bg-gradient-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="animate-fade-in">
                  <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Événements Bordeaux</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Des événements qui créent du lien
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                    Au cœur des Chartrons, notre lieu devient le théâtre de vos temps forts : séminaires, ateliers, 
                    afterworks, formations ou moments de célébration.
                  </p>

                  <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                    Chaque événement est pensé comme une parenthèse collective, propice à la rencontre, à la créativité 
                    et à la convivialité.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="mailto:bordeaux@ocube.co?subject=Demande d'information - Événement">
                        Organiser mon événement
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="/climate-house-bordeaux">
                        Découvrir le lieu
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="relative rounded-2xl overflow-hidden shadow-strong">
                    <img 
                      src={bordeauxRueNotreDame}
                      alt="Quartier des Chartrons à Bordeaux - Lieu événementiel Ocube"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-2xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Types d'événements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-20">
                {eventTypes.map((type, index) => (
                  <div 
                    key={type.title}
                    className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                      index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-strong">
                        <img 
                          src={type.image}
                          alt={`${type.title} - Événements Ocube Bordeaux`}
                          className="w-full h-[400px] object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10">
                        <type.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">{type.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-3">
                        {type.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Traiteurs */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Coffee className="h-5 w-5 text-accent" />
                  <h2 className="text-3xl md:text-4xl font-bold">Nos partenaires traiteurs engagés</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Une alimentation responsable pour vos événements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="animate-fade-in order-2 md:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-strong h-[400px]">
                    <img 
                      src={traiteurFoodImage} 
                      alt="Cuisine responsable de nos partenaires traiteurs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Liste des partenaires */}
                <div className="order-1 md:order-2">
                  <div className="columns-2 gap-x-6">
                    {displayedPartners.map((partner, index) => (
                      <div
                        key={partner}
                        className="text-sm font-semibold text-muted-foreground/70 hover:text-accent transition-colors animate-fade-in uppercase mb-3 break-inside-avoid"
                        style={{ animationDelay: `${index * 20}ms` }}
                      >
                        {partner}
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setShowAllPartners(!showAllPartners)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    {showAllPartners ? (
                      <>
                        <Minus className="h-4 w-4" />
                        Voir moins
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" />
                        Voir tous les partenaires
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EvenementBordeauxPage;
