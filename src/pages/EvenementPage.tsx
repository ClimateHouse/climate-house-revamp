import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Presentation, Plus, Minus, Users, Building2, Quote } from "lucide-react";

// Données des espaces événementiels
const eventSpaces = [
  {
    icon: Presentation,
    title: "Espaces événementiels modulables",
    capacity: "De 30 à 400 personnes",
    features: [
      "Cinq espaces, de 30 à 100 personnes, pour vos conférences, séminaires et ateliers",
      "Extension jusqu'à 400 personnes à Plantation Paris",
      "Équipement professionnel complet et support technique dédié",
      "Configuration modulable selon vos besoins",
    ],
  },
  {
    icon: Users,
    title: "Ateliers transformants",
    capacity: "Formats sur-mesure",
    features: [
      "Des ateliers qui éveillent la tête, touchent le cœur et engagent le corps",
      "Salons thématiques pour les rencontres et zones de créativité",
      "Des partenaires engagés dans une démarche pour une alimentation responsable",
      "Des offres modulables, pensées pour répondre à vos attentes",
    ],
  },
];

// Données des espaces spécifiques
const specificSpaces = [
  {
    name: "La BAL-ROOM",
    description: "Salle de réception pour jusqu'à 90 personnes, idéale pour des conférences ou des cocktails."
  },
  {
    name: "Le JARDIN Divers",
    description: "Espace modulable pour 40 personnes, parfait pour des ateliers ou des événements publics."
  },
  {
    name: "Les COMMUNS",
    description: "Accueille jusqu'à 150 personnes, idéal pour des séminaires collaboratifs."
  },
  {
    name: "La WAVE ROOM",
    description: "Salle de créativité unique avec vue panoramique, favorisant l'innovation."
  },
  {
    name: "PLANTATION",
    description: "Une toute nouvelle extension"
  }
];

// Composant pour les cartes d'espaces événementiels
const EventSpaceCard = ({ space, index, colorScheme }: { 
  space: typeof eventSpaces[0]; 
  index: number;
  colorScheme: 'accent' | 'accent-light';
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const bgColorClass = colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
  const textColorClass = colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';
  const dotColorClass = colorScheme === 'accent' ? 'bg-accent' : 'bg-accent-light';

  return (
    <Card
      className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${bgColorClass} flex items-center justify-center`}>
          <space.icon className={`h-7 w-7 ${textColorClass}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
          <p className={`text-lg ${textColorClass} font-semibold mb-2`}>{space.capacity}</p>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-4 mb-6 animate-fade-in">
          <div className="bg-secondary/30 rounded-lg p-4">
            <h5 className="font-semibold mb-2">✨ Ce qui est inclus</h5>
            <ul className="space-y-2 text-sm">
              {space.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${dotColorClass} mt-1.5 flex-shrink-0`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button size="lg" variant="default" className="flex-1" asChild>
          <a href="#contact">Organiser un événement</a>
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  );
};

const EvenementPage = () => {
  const [showSpaceDetails, setShowSpaceDetails] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Organiser un Événement</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Des espaces modulables et équipés pour donner vie à tous vos événements professionnels
                </p>
              </div>

              {/* Grille des espaces événementiels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <EventSpaceCard space={eventSpaces[0]} index={0} colorScheme="accent" />
                <EventSpaceCard space={eventSpaces[1]} index={1} colorScheme="accent-light" />
              </div>

              {/* Bloc des espaces spécifiques */}
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">Nos espaces</h4>
                    <p className="text-muted-foreground">
                      Découvrez nos espaces modulables pour tous types d'événements
                    </p>
                  </div>
                </div>

                {showSpaceDetails && (
                  <ul className="space-y-3 mb-6 animate-fade-in">
                    {specificSpaces.map((space) => (
                      <li key={space.name} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-accent">{space.name}</span>
                          <span className="text-muted-foreground"> - {space.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <Button
                  variant="outline"
                  onClick={() => setShowSpaceDetails(!showSpaceDetails)}
                  className="w-full"
                >
                  {showSpaceDetails ? (
                    <>
                      <Minus className="h-4 w-4 mr-2" />
                      Voir moins de détails
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" />
                      Découvrir nos espaces
                    </>
                  )}
                </Button>
              </Card>

              {/* Partenaires Traiteurs */}
              <div className="mt-20 animate-fade-in">
                <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
                  Nos Partenaires Traiteurs engagés
                </p>
                
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                  {[
                    "LE RECHO",
                    "necense",
                    "Les Marmites Volantes",
                    "Bimbamboum Traiteur",
                    "Meet My Mama",
                    "La Balle",
                    "PERDUE",
                    "APPIE",
                    "müre",
                    "CAUSSES"
                  ].map((partner, index) => (
                    <div
                      key={partner}
                      className="text-lg font-bold text-muted-foreground/60 hover:text-accent transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              {/* Témoignages événements */}
              <div className="mt-20 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <Card className="p-8 hover:shadow-strong transition-all duration-300">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "Tout était très doux, efficace et fluide, je n'attends qu'une chose : recommencer une collaboration avec vous !"
                    </p>
                    <div>
                      <div className="font-bold">Fleur DOUET</div>
                      <div className="text-sm text-muted-foreground">Field Marketing Manager SWEEP</div>
                    </div>
                  </Card>

                  <Card className="p-8 hover:shadow-strong transition-all duration-300">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">
                      "Merci pour votre dispo : Manon était top dans l'accompagnement, Anthony hyper pro et efficace le jour J et le traiteur très bon. Hâte de revenir :)"
                    </p>
                    <div>
                      <div className="font-bold">Ingrid Vanhée</div>
                      <div className="text-sm text-muted-foreground">Fondatrice Envolées Sauvages</div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* CTA Final */}
              <div className="mt-16 text-center">
                <Card className="p-12 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Prêt à organiser votre événement ?</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Notre équipe est à votre disposition pour vous accompagner dans l'organisation de votre événement et créer une expérience mémorable.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="shadow-md">
                      Nous contacter
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://discover.matterport.com/space/UxagxBR7SZk" target="_blank" rel="noopener noreferrer">
                        Visite virtuelle
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EvenementPage;
